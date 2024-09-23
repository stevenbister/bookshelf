import type { SQL, TableConfig } from 'drizzle-orm';
import type { drizzle } from 'drizzle-orm/d1';
import type { SQLiteColumn, SQLiteTable } from 'drizzle-orm/sqlite-core';

export type SelectOptions = { limit?: number; orderBy?: (SQLiteColumn | SQL)[] };

export type DbClient = ReturnType<typeof drizzle>;

export type Table = SQLiteTable<TableConfig>;

export type TableWithID = Table & {
	id: SQLiteColumn;
};
