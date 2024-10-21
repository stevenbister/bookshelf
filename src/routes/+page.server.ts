import type { PageServerLoad } from './$types';
import { Book } from '$lib/queries/book';
import { Database } from '$lib/db/connection';

export const load: PageServerLoad = async () => {
	const db = Database.getInstance();
	const book = new Book(db);

	const books = await book.getBooksWithCover();

	return {
		books
	};
};
