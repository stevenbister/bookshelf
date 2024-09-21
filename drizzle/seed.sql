DELETE FROM book;
DELETE FROM author;

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
	author_id
) VALUES (
	"American Gods",
	(SELECT id FROM author WHERE id = 1)
), (
	"The Eye of the World",
	(SELECT id FROM author WHERE id = 2)
);