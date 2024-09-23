import { TableCommon } from './table';
import type { DbClient } from '$lib/db/types';
import { bookSeries } from '$lib/db/schema/bookSeries';

export class BookSeries extends TableCommon {
	constructor(db: DbClient) {
		super(db, bookSeries);
	}
}
