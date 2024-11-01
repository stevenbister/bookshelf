import { author, type Author } from '$lib/db/schema/authors';
import { bookAuthor } from '$lib/db/schema/bookAuthor';
import type { Book as BookType } from '$lib/db/schema/books';
import { book } from '$lib/db/schema/books';
import { bookSeries } from '$lib/db/schema/bookSeries';
import { cover } from '$lib/db/schema/cover';
import { series, type Series } from '$lib/db/schema/series';
import type { DbClient } from '$lib/db/types';
import { groupBy } from '$lib/utils/groupBy';
import { and, eq } from 'drizzle-orm';
import { TableCommon } from './table';

export type Filters = {
	author?: number;
	series?: number;
	orderBy?: 'asc' | 'desc';
};

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

	async getIdBySlug(slug: string) {
		return await this.db
			.select({ id: this.schema.id })
			.from(this.schema)
			.where(eq(this.schema.slug, slug));
	}

	async getBooks(filters?: Filters) {
		type BookWithAuthors = Omit<BookType, 'blurb' | 'coverId' | 'statusId'> & {
			authors: Author[];
			cover: string | null;
			series: Series | null;
			seriesId?: Series['id'];
			number?: number | null;
		};

		const { author: authorId, series: seriesId } = filters ?? {};

		const results = await this.db
			.select({
				id: this.schema.id,
				title: this.schema.title,
				slug: this.schema.slug,
				cover: cover.url,
				author,
				series,
				number: bookSeries.bookNumber
			})
			.from(this.schema)
			.where(
				and(
					authorId ? eq(author.id, authorId) : undefined,
					seriesId ? eq(series.id, seriesId) : undefined
				)
			)
			.leftJoin(cover, eq(this.schema.coverId, cover.id))
			.leftJoin(bookAuthor, eq(this.schema.id, bookAuthor.bookId))
			.leftJoin(author, eq(bookAuthor.authorId, author.id))
			.leftJoin(bookSeries, eq(this.schema.id, bookSeries.bookId))
			.leftJoin(series, eq(bookSeries.seriesId, series.id));

		const booksMap = new Map<number, BookWithAuthors>();
		results.forEach((row) => {
			let book = booksMap.get(row.id);

			if (!book) {
				const { id, title, slug, cover, number, series } = row;
				book = { id, title, slug, cover, authors: [], number, series, seriesId: series?.id };
				booksMap.set(id, book);
			}

			if (row.author) book.authors.push(row.author);
		});

		const booksWithAuthors = Array.from(booksMap.values());

		const groupedBySeries: { [seriesId: number]: BookWithAuthors[] } = groupBy(
			booksWithAuthors,
			'seriesId'
		);

		for (const seriesId in groupedBySeries) {
			const books = groupedBySeries[seriesId];
			groupedBySeries[seriesId] = books.toSorted((a, b) => (a.number ?? 0) - (b.number ?? 0));
		}

		const sortedBooks = [...Object.values(groupedBySeries).flat()].toSorted((a, b) => {
			const orderSign = filters?.orderBy === 'desc' ? -1 : 1;

			if (a.series?.seriesAuthorId && b.series?.seriesAuthorId) {
				return (a.series.seriesAuthorId - b.series.seriesAuthorId) * orderSign;
			}

			const authorA = a.authors[0]?.first_name ?? '';
			const authorB = b.authors[0]?.first_name ?? '';

			return authorA.localeCompare(authorB) * orderSign;
		});

		return sortedBooks;
	}
}
