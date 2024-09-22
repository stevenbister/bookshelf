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
	title
) VALUES (
	"The Wheel of Time"
);

INSERT INTO author (
	first_name,
	last_name
) VALUES (
	"Neil",
	"Gaiman"
), (
	"Robert",
	"Jordan"
);

INSERT INTO book (
	title,
	status_id
) VALUES (
	"American Gods",
	(SELECT id FROM status WHERE status = "read")
), (
	"The Eye of the World",
	(SELECT id FROM status WHERE status = "read")
);

INSERT INTO book_author (
	author_id,
	book_id
) VALUES (
	(SELECT id FROM author WHERE last_name = "Gaiman"),
	(SELECT id FROM book WHERE title = "American Gods")
), (
	(SELECT id FROM author WHERE last_name = "Jordan"),
	(SELECT id FROM book WHERE title = "The Eye of the World")
)

INSERT INTO book_series (
	book_number,
	book_id,
	series_id
) VALUES (
	1,
	(SELECT id FROM book WHERE title = "The Eye of the World"),
	(SELECT id FROM series WHERE title = "The Wheel of Time")
)