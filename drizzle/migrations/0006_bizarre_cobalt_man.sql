CREATE TABLE `series_book_number` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`book_number` integer,
	`book_id` integer,
	`series_id` integer,
	FOREIGN KEY (`book_id`) REFERENCES `book`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`series_id`) REFERENCES `series`(`id`) ON UPDATE no action ON DELETE no action
);
