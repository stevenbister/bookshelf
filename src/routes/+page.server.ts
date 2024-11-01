import { Database } from '$lib/db/connection';
import { Author } from '$lib/queries/author';
import type { Filters } from '$lib/queries/book';
import { Book } from '$lib/queries/book';
import { Series } from '$lib/queries/series';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const db = Database.getInstance();
	const book = new Book(db);
	const author = new Author(db);
	const series = new Series(db);

	const filters = Object.fromEntries(url.searchParams) as Filters;

	const books = await book.getBooks(filters);
	const authors = await author.getAuthorBySeriesId(filters.series);
	const seriesTitles = await series.getSeriesByAuthorId(filters.author);

	return {
		books,
		authors,
		seriesTitles
	};
};
