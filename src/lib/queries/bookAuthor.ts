import { TableCommon } from './table';
import type { DbClient } from '$lib/db/types';
import { bookAuthor } from '$lib/db/schema/bookAuthor';

export class BookAuthor extends TableCommon {
	constructor(db: DbClient) {
		super(db, bookAuthor);
	}
}
