DELETE FROM status;
DELETE FROM series;
DELETE FROM book;
DELETE FROM author;

INSERT INTO status (
	status
) VALUES (
	'not read'
), (
	'reading'
), (
	'read'
);

INSERT INTO series (
	id,
	title
) VALUES (
	1,
	"The Wheel of Time"
);

INSERT INTO author (
	id,
	first_name,
	last_name
) VALUES (
	1,
	"Neil",
	"Gaiman"
), (
	2,
	"Robert",
	"Jordan"
);

INSERT INTO book (
	title,
	book_number,
	author_id,
	series_id,
	status
) VALUES (
	"American Gods",
	NULL,
	(SELECT id FROM author WHERE id = 1),
	NULL,
	1
), (
	"The Eye of the World",
	1,
	(SELECT id FROM author WHERE id = 2),
	1,
	1
);