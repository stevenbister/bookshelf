import { bookData } from '$lib/data/seed/book';
import { statusData } from '$lib/data/seed/status';
import { Database } from '$lib/db/connection';
import type { Status as StatusType } from '$lib/db/schema/status';
import { Author } from '$lib/queries/author';
import { Book } from '$lib/queries/book';
import { BookAuthor } from '$lib/queries/bookAuthor';
import { BookSeries } from '$lib/queries/bookSeries';
import { Cover } from '$lib/queries/cover';
import { Series } from '$lib/queries/series';
import { Status } from '$lib/queries/status';
import { pageNotFound } from '$lib/utils/pageNotFound';
import { slugify } from '$lib/utils/slugify';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ platform }) => {
	if (platform?.env.ENVIRONMENT !== 'development') pageNotFound();

	const CHUNK_SIZE = 10;

	function chunkArray<T>(array: T[], size: number): T[][] {
		const chunks: T[][] = [];
		for (let i = 0; i < array.length; i += size) {
			chunks.push(array.slice(i, i + size));
		}
		return chunks;
	}

	async function processInChunks<T>(
		items: T[],
		chunkSize: number,
		processFn: (chunk: T[]) => Promise<void>
	) {
		const chunks = chunkArray(items, chunkSize);
		for (const chunk of chunks) {
			await processFn(chunk);
		}
	}

	const db = Database.getInstance();

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

	await processInChunks(bookData, CHUNK_SIZE, async (chunk) => {
		const seededBooks = await book.add(
			await Promise.all(
				chunk.map(async ({ title, blurb, status: sts, cover: cvr }) => {
					const statusId = (await status.getIdByStatus(sts as StatusType['status']))[0].id;
					const coverId = (await cover.getIdByUrl(cvr))?.[0].id;

					return {
						title,
						slug: slugify(title),
						blurb,
						statusId,
						coverId
					};
				})
			)
		);
		console.log('Books created', seededBooks);
	});

	console.log('Creating series...');

	await processInChunks(
		[...new Set(bookData.filter(({ series }) => !!series).map(({ series }) => series?.title))],
		CHUNK_SIZE,
		async (chunk) => {
			const seededSeries = await series.add(
				chunk.map((series) => ({
					title: series!
				}))
			);

			console.log('Series created', seededSeries);
		}
	);

	console.log('Creating authors...');

	await processInChunks(
		[...new Set(bookData.flatMap((b) => b.author).map((a) => `${a.first_name} ${a.last_name}`))],
		CHUNK_SIZE,
		async (chunk) => {
			const seededAuthors = await author.add(
				chunk.map((fullName) => {
					const [first_name, last_name] = fullName.split(' ');
					return {
						first_name,
						last_name
					};
				})
			);

			console.log('Authors created', seededAuthors);
		}
	);

	console.log('Creating book authors...');

	await processInChunks(bookData, CHUNK_SIZE, async (chunk) => {
		const bookAuthors = await Promise.all(
			chunk.flatMap(async ({ title, author: a }) => {
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
	});

	console.log('Creating book series...');

	await processInChunks(
		bookData.filter(({ series }) => series),
		CHUNK_SIZE,
		async (chunk) => {
			const seededBookSeries = await bookSeries.add(
				await Promise.all(
					chunk.map(async ({ title, series: srs }) => {
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
		}
	);

	console.log('Seeding finished 🌳');

	return new Response('OK');
};
