import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { author } from './authors';

export type Book = typeof book.$inferSelect;

export const book = sqliteTable('book', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title'),
	authorId: integer('author_id').references(() => author.id)
});
