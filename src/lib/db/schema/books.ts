import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { author } from './authors';
import { series } from './series';
import { cover } from './cover';
import { status } from './status';

export type Book = typeof book.$inferSelect;

export const book = sqliteTable('book', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	blurb: text('blurb'),
	bookNumber: integer('book_number'),
	authorId: integer('author_id').references(() => author.id),
	seriesId: integer('series_id').references(() => series.id),
	cover: integer('cover').references(() => cover.id),
	status: integer('status').references(() => status.id)
});
