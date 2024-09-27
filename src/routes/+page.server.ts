import type { PageServerLoad } from './$types';
import { drizzle } from 'drizzle-orm/d1';
import { Book } from '$lib/queries/book';
import { cfBindingNotFound } from '$lib/utils/cfBindingNotFound';

export const load: PageServerLoad = async ({ platform }) => {
	if (!platform?.env.DB) cfBindingNotFound();

	const db = drizzle(platform.env.DB);
	const book = new Book(db);

	const books = await book.getBookDetails();

	return {
		books
	};
};
