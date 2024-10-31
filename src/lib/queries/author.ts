import { author } from '$lib/db/schema/authors';
import { series } from '$lib/db/schema/series';
import type { DbClient } from '$lib/db/types';
import { and, eq } from 'drizzle-orm';
import { TableCommon } from './table';

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

	async getAuthorBySeriesId(seriesId?: number) {
		const results = await this.db
			.select({
				id: this.schema.id,
				first_name: this.schema.first_name,
				last_name: this.schema.last_name
			})
			.from(this.schema)
			.leftJoin(series, eq(this.schema.id, series.seriesAuthorId))
			.where(seriesId ? eq(series.id, seriesId) : undefined);

		// remove dupes by id
		const seen = new Set<number>();
		const uniqueResults = results.filter((result) => {
			if (seen.has(result.id)) {
				return false;
			}

			seen.add(result.id);
			return true;
		});

		return uniqueResults;
	}
}
