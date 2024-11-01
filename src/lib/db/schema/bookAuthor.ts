import { sqliteTable, integer } from 'drizzle-orm/sqlite-core';
import { author } from './authors';
import { book } from './books';

export type BookAuthor = typeof bookAuthor.$inferSelect;

export const bookAuthor = sqliteTable('book_author', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	authorId: integer('author_id').references(() => author.id),
	bookId: integer('book_id').references(() => book.id)
});
