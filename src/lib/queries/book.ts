import { TableCommon } from './table';
import type { DbClient } from '$lib/db/types';
import { eq } from 'drizzle-orm';
import { author } from '$lib/db/schema/authors';
import { bookAuthor } from '$lib/db/schema/bookAuthor';
import { book } from '$lib/db/schema/books';
import { bookSeries } from '$lib/db/schema/bookSeries';
import { series } from '$lib/db/schema/series';
import { status } from '$lib/db/schema/status';
import {cover} from '$lib/db/schema/cover';

export class Book extends TableCommon<typeof book> {
	constructor(db: DbClient) {
		super(db, book);
	}

	async getIdByTitle(title: string) {
		return await this.db
			.select({
				id: this.schema.id
			})
			.from(this.schema)
			.where(eq(this.schema.title, title));
	}

	async getBookDetails() {
		return await this.db
			.select({
				id: this.schema.id,
				title: this.schema.title,
				blurb: this.schema.blurb,
				cover: cover.url,
				author,
				status: status.status,
				series,
				number: bookSeries.bookNumber
			})
			.from(this.schema)
			.leftJoin(status, eq(this.schema.statusId, status.id))
			.leftJoin(cover, eq(this.schema.coverId, cover.id))
			.leftJoin(bookAuthor, eq(this.schema.id, bookAuthor.bookId))
			.leftJoin(author, eq(bookAuthor.authorId, author.id))
			.leftJoin(bookSeries, eq(this.schema.id, bookSeries.bookId))
			.leftJoin(series, eq(bookSeries.seriesId, series.id));
	}
}
