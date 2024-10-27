import { Database } from '$lib/db/connection';
import { Book } from '$lib/queries/book';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const db = Database.getInstance();
	const book = new Book(db);

	const filters = Object.fromEntries(url.searchParams);

	const books = await book.getBooks(filters);

	return {
		books
	};
};
