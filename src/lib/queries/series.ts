import { TableCommon } from './table';
import type { DbClient } from '$lib/db/types';
import { series } from '$lib/db/schema/series';
import { eq } from 'drizzle-orm';

export class Series extends TableCommon<typeof series> {
	constructor(db: DbClient) {
		super(db, series);
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
