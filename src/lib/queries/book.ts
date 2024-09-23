import { book } from '$lib/db/schema/books';
import { TableCommon } from './table';
import type { DbClient } from '$lib/db/types';
import { eq } from 'drizzle-orm';

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
}
