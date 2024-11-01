import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export type Status = typeof status.$inferSelect;

export const status = sqliteTable('status', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	status: text('status', { enum: ['not read', 'reading', 'read'] }).notNull()
});
