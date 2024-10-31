import { series } from '$lib/db/schema/series';
import type { DbClient } from '$lib/db/types';
import { eq } from 'drizzle-orm';
import { TableCommon } from './table';

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

	async getSeriesByAuthorId(authorId?: number) {
		return await this.db
			.select({
				id: this.schema.id,
				title: this.schema.title
			})
			.from(this.schema)
			.where(authorId ? eq(this.schema.seriesAuthorId, authorId) : undefined);
	}
}
