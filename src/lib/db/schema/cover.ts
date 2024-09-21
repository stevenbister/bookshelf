import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export type Cover = typeof cover.$inferSelect;

export const cover = sqliteTable('cover', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title')
});
