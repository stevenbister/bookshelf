CREATE TABLE IF NOT EXISTS `book_old` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`blurb` text,
	`book_number` integer,
	`author_id` integer,
	`series_id` integer,
	`cover_id` integer,
	`status_id` integer,
	FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`series_id`) REFERENCES `series`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`cover_id`) REFERENCES `cover`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`status_id`) REFERENCES `status`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP TABLE IF EXISTS `book`;