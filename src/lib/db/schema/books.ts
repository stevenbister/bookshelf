import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { cover } from './cover';
import { status } from './status';

export type Book = typeof book.$inferSelect;

export const book = sqliteTable('book', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	slug: text('slug').notNull(),
	blurb: text('blurb'),
	coverId: integer('cover_id').references(() => cover.id),
	statusId: integer('status_id').references(() => status.id)
});
