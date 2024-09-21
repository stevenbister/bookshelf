import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export type Author = typeof author.$inferSelect;

export const author = sqliteTable('author', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	first_name: text('first_name'),
	last_name: text('last_name')
});
