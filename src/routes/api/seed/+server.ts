import { bookData } from '$lib/data/seed/book';
import { statusData } from '$lib/data/seed/status';
import { Author } from '$lib/queries/author';
import { Book } from '$lib/queries/book';
import { BookAuthor } from '$lib/queries/bookAuthor';
import { BookSeries } from '$lib/queries/bookSeries';
import { Series } from '$lib/queries/series';
import { Status } from '$lib/queries/status';
import type { RequestHandler } from '@sveltejs/kit';
import { drizzle } from 'drizzle-orm/d1';
import type { Status as StatusType } from '$lib/db/schema/status';
import { cfBindingNotFound } from '$lib/utils/cfBindingNotFound';

export const GET: RequestHandler = async ({ platform }) => {
	if (!platform?.env.DB) cfBindingNotFound();

	const db = drizzle(platform.env.DB);

	const author = new Author(db);
	const book = new Book(db);
	const bookAuthor = new BookAuthor(db);
	const bookSeries = new BookSeries(db);
	const series = new Series(db);
	const status = new Status(db);

	console.log('Seeding data 🌱');

	console.log('Resetting tables...');

	await bookAuthor.deleteAll();
	await bookSeries.deleteAll();
	await author.deleteAll();
	await book.deleteAll();
	await series.deleteAll();
	await status.deleteAll();

	console.log('Tables reset');

	console.log('Creating statuses...');
	const seededStatus = await status.add(
		statusData.map((status) => ({
			status
		}))
	);
	console.log('Statuses created', seededStatus);

	console.log('Creating books...');

	const seededBooks = await book.add(
		await Promise.all(
			bookData.map(async ({ title, blurb, status: sts }) => {
				const statusId = (await status.getIdByStatus(sts as StatusType['status']))[0].id;

				return {
					title,
					blurb,
					statusId
				};
			})
		)
	);

	console.log('Books created', seededBooks);

	console.log('Creating series...');

	const seededSeries = await series.add(
		bookData
			.filter(({ series }) => !!series)
			.map(({ series }) => ({
				title: series!.title,
				bookNumber: series?.number
			}))
	);

	console.log('Series created', seededSeries);

	console.log('Creating authors...');

	const seededAuthors = await author.add(
		bookData.map(({ author: { first_name, last_name } }) => ({
			first_name,
			last_name
		}))
	);

	console.log('Books created', seededAuthors);

	console.log('Creating book authors...');

	const seededBookAuthors = await bookAuthor.add(
		await Promise.all(
			bookData.map(async ({ title, author: { first_name, last_name } }) => {
				const authorId = (await author.getIdByName(first_name, last_name))[0].id;
				const bookId = (await book.getIdByTitle(title))[0].id;

				return {
					authorId,
					bookId
				};
			})
		)
	);

	console.log('Book authors created', seededBookAuthors);

	console.log('Creating book series...');

	const seededBookSeries = await bookSeries.add(
		await Promise.all(
			bookData
				.filter(({ series }) => series)
				.map(async ({ title, series: srs }) => {
					const bookId = (await book.getIdByTitle(title))[0].id;
					const seriesId = (await series.getIdByTitle(srs!.title))[0].id;
					console.log({ seriesId });

					return {
						bookId,
						seriesId
					};
				})
		)
	);

	console.log('Book series created', seededBookSeries);

	console.log('Seeding finished 🌳');

	return new Response('OK');
};
