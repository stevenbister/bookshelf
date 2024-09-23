import { author } from '$lib/db/schema/authors';
import { TableCommon } from './table';
import type { DbClient } from '$lib/db/types';
import { and, eq } from 'drizzle-orm';

export class Author extends TableCommon<typeof author> {
	constructor(db: DbClient) {
		super(db, author);
	}

	async getIdByName(firstName: string, lastName: string) {
		return await this.db
			.select({
				id: this.schema.id
			})
			.from(this.schema)
			.where(and(eq(this.schema.first_name, firstName), eq(this.schema.last_name, lastName)));
	}
}
