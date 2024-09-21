CREATE TABLE `author` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text,
	`last_name` text
);
--> statement-breakpoint
CREATE TABLE `book` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`author_id` integer,
	FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON UPDATE no action ON DELETE no action
);
