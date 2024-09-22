import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { series } from './series';
import { cover } from './cover';
import { status } from './status';

export type Book = typeof book.$inferSelect;

export const book = sqliteTable('book', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	blurb: text('blurb'),
	seriesId: integer('series_id').references(() => series.id),
	coverId: integer('cover_id').references(() => cover.id),
	statusId: integer('status_id').references(() => status.id)
});
