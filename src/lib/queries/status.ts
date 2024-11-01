import { TableCommon } from './table';
import type { DbClient } from '$lib/db/types';
import { status } from '$lib/db/schema/status';
import type { Status as StatusType } from '$lib/db/schema/status';
import { eq } from 'drizzle-orm';

export class Status extends TableCommon<typeof status> {
	constructor(db: DbClient) {
		super(db, status);
	}

	async getIdByStatus(status: StatusType['status']) {
		return await this.db
			.select({
				id: this.schema.id
			})
			.from(this.schema)
			.where(eq(this.schema.status, status));
	}
}
