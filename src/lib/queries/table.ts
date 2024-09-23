import type { DbClient, TableWithID, SelectOptions } from '$lib/db/types';
import { eq } from 'drizzle-orm';

export class TableCommon<T extends TableWithID = TableWithID> {
	readonly db: DbClient;
	readonly schema: T;

	constructor(db: DbClient, schema: T) {
		this.db = db;
		this.schema = schema;
	}

	async add<K extends T['$inferInsert']>(item: K[]) {
		return await this.db.insert(this.schema).values(item).returning();
	}

	async deleteById(id: number) {
		return await this.db.delete(this.schema).where(eq(this.schema.id, id)).returning();
	}

	async deleteAll() {
		return await this.db.delete(this.schema);
	}

	async getById(id: number) {
		return await this.db.select().from(this.schema).where(eq(this.schema.id, id));
	}

	async getAll(options?: SelectOptions) {
		return await this.db
			.select()
			.from(this.schema)
			.limit(options?.limit ?? -1)
			.orderBy(...(options?.orderBy ?? []));
	}
}
