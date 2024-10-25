import { Database } from '$lib/db/connection';
import { Book } from '$lib/queries/book';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const db = Database.getInstance();
	const book = new Book(db);

	const books = await book.search();

	return {
		books
	};
};
