import { sqliteTable, integer } from 'drizzle-orm/sqlite-core';
import { series } from './series';
import { book } from './books';

export type BookSeries = typeof bookSeries.$inferSelect;

export const bookSeries = sqliteTable('book_series', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	bookNumber: integer('book_number'),
	bookId: integer('book_id').references(() => book.id),
	seriesId: integer('series_id').references(() => series.id)
});
