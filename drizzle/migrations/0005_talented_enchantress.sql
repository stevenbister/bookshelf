CREATE TABLE IF NOT EXISTS `book_author` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author_id` integer,
	`book_id` integer,
	FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`book_id`) REFERENCES `book`(`id`) ON UPDATE no action ON DELETE no action
);