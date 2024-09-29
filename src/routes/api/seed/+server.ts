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
import { Cover } from '$lib/queries/cover';

export const GET: RequestHandler = async ({ platform }) => {
	if (!platform?.env.DB) cfBindingNotFound();

	const db = drizzle(platform.env.DB);

	const author = new Author(db);
	const book = new Book(db);
	const bookAuthor = new BookAuthor(db);
	const bookSeries = new BookSeries(db);
	const series = new Series(db);
	const status = new Status(db);
	const cover = new Cover(db);

	console.log('Seeding data 🌱');

	console.log('Resetting tables...');

	await bookAuthor.deleteAll();
	await bookSeries.deleteAll();
	await author.deleteAll();
	await book.deleteAll();
	await series.deleteAll();
	await status.deleteAll();
	await cover.deleteAll();

	console.log('Tables reset');

	console.log('Creating statuses...');
	const seededStatus = await status.add(
		statusData.map((status) => ({
			status
		}))
	);
	console.log('Statuses created', seededStatus);

	console.log('Creating covers...');
	const seededCovers = await cover.add(
		bookData
			.filter(({ cover }) => !!cover)
			.map(({ cover }) => ({
				url: cover
			}))
	);
	console.log('Covers created', seededCovers);

	console.log('Creating books...');

	const seededBooks = await book.add(
		await Promise.all(
			bookData.map(async ({ title, blurb, status: sts, cover: cvr }) => {
				const statusId = (await status.getIdByStatus(sts as StatusType['status']))[0].id;
				const coverId = (await cover.getIdByUrl(cvr))?.[0].id;

				return {
					title,
					blurb,
					statusId,
					coverId
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
		[
			...new Set(bookData.flatMap((b) => b.author).map((a) => `${a.first_name} ${a.last_name}`))
		].map((fullName) => {
			const [first_name, last_name] = fullName.split(' ');
			return {
				first_name,
				last_name
			};
		})
	);

	console.log('Authors created', seededAuthors);

	console.log('Creating book authors...');

	const bookAuthors = await Promise.all(
		bookData.flatMap(async ({ title, author: a }) => {
			const bookId = (await book.getIdByTitle(title))[0].id;

			return Promise.all(
				a.map(async ({ first_name, last_name }) => {
					const authorId = (await author.getIdByName(first_name, last_name))[0].id;

					return {
						authorId,
						bookId
					};
				})
			);
		})
	);

	const seededBookAuthors = await bookAuthor.add(bookAuthors.flat());

	console.log('Book authors created', seededBookAuthors);

	console.log('Creating book series...');

	const seededBookSeries = await bookSeries.add(
		await Promise.all(
			bookData
				.filter(({ series }) => series)
				.map(async ({ title, series: srs }) => {
					const bookId = (await book.getIdByTitle(title))[0].id;
					const seriesId = (await series.getIdByTitle(srs!.title))[0].id;

					return {
						bookId,
						seriesId,
						bookNumber: srs?.number
					};
				})
		)
	);

	console.log('Book series created', seededBookSeries);

	console.log('Seeding finished 🌳');

	return new Response('OK');
};
