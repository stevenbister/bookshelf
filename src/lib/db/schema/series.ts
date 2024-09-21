import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export type Series = typeof series.$inferSelect;

export const series = sqliteTable('series', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull()
});
