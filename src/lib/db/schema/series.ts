import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { author } from './authors';

export type Series = typeof series.$inferSelect;

export const series = sqliteTable('series', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	seriesAuthorId: integer('series_author_id').references(() => author.id)
});
