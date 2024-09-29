import { TableCommon } from './table';
import type { DbClient } from '$lib/db/types';
import { cover } from '$lib/db/schema/cover';
import { eq } from 'drizzle-orm';

export class Cover extends TableCommon<typeof cover> {
	constructor(db: DbClient) {
		super(db, cover);
	}

	async getIdByUrl(url: string | null) {
		if (!url) return;

		return await this.db
			.select({
				id: this.schema.id
			})
			.from(this.schema)
			.where(eq(this.schema.url, url));
	}
}
