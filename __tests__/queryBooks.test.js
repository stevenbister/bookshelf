import {
  querySingleBook,
  queryAllBooks,
  queryBooksBySeries,
  buildBooksArray,
  sortBooks,
} from '../src/lib/queryBooks';
import fakeData from '../__mocks__/fakeData';
import fakeData_formatted from '../__mocks__/fakeData_formatted';
import fakeData_single from '../__mocks__/fakeData_single';
import fakeData_series from '../__mocks__/fakeData_series';

const queryUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/production/default`;

beforeEach(() => {
  fetch.resetMocks();
});

it('successfully queries a single book', async () => {
  fetch.mockResponseOnce(JSON.stringify({ fakeData_single }));

  await querySingleBook('the-eye-of-the-world');

  expect(fakeData_single.allBook[0]).toHaveProperty(
    'title',
    'The Eye of the World',
  );
  expect(fetch.mock.calls[0][0]).toEqual(queryUrl);
});

it('successfully queries all books', async () => {
  fetch.mockResponseOnce(JSON.stringify({ fakeData }));

  await queryAllBooks();

  expect(fakeData.allBook).toHaveLength(3);
  expect(fetch.mock.calls[0][0]).toEqual(queryUrl);
});

it('successfully queries book by series', async () => {
  fetch.mockResponseOnce(JSON.stringify({ fakeData_series }));

  await queryBooksBySeries('The Wheel of Time');

  expect(fakeData_series.allBook).toHaveLength(6);
  expect(fetch.mock.calls[0][0]).toEqual(queryUrl);
});

it('successfully formats our data and builds the array', async () => {
  fetch.mockResponse(JSON.stringify({ fakeData_series }));
  const formattedData = await buildBooksArray(fakeData.allBook);

  expect(fetch.mock.calls[0][0]).toEqual(queryUrl);
  expect(fetch.mock.calls).toHaveLength(2); // Our mock data includes two books from the same series so only one should be returned

  expect(formattedData[0]).toMatchObject({
    _id: 'f4e7685b-1119-411f-855b-6f77e4816f6b',
    title: 'The Eye of the World',
    author: 'Robert Jordan',
    authorSlug: 'robert-jordan',
    slug: { current: 'the-eye-of-the-world' },
    series: 'The Wheel of Time',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcEBQgBBv/EACYQAAEDAwQCAQUAAAAAAAAAAAIBAwQAERIFBiExFEEHExUzYXH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHBEAAgEFAQAAAAAAAAAAAAAAAAESAgMTITFB/9oADAMBAAIRAxEAPwCTpmymHtEKdfBUvZpweVSuJpEViNl4pOH6EUpuyYKAZpgBMdpivdQwaFxt9kY6IpIluPdUk3sz40tCg+3OD+WCKEvNr+qKazmy4z5kbxviV7WQvVFHIhMFRS7H3NEnbShvyjwU7qqZ3UV/dWyT9OHJ/wAxwsUyxv1WVNuaq9DaRspKk0XKt2Xj+V69jcsEoRACyCI0UVEl4Sp8XRld8Y1dX+XtEYnG19fJR4VR6orNczSWDkuGkgkQlvbHqikkgyqP/9k=',
        },
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/3a0831dc96a22f3ae304e80e44e76e05e0bcb5c8-319x500.jpg',
      },
    },
    relatedBooks: null, //! This should ideally be the related book object. Gonna leave as null for now as that is "technically correct", but until I work out how to mock the inner getSeries function this can stay as is.
  });
});

it('sorts our array data', () => {
  const sortedBooks = sortBooks(fakeData_formatted, 'series');
  const firstItem = sortedBooks[0];
  const lastItem = sortedBooks[sortedBooks.length - 1];

  expect(firstItem).toHaveProperty('series', 'Mistborn');
  expect(firstItem).toHaveProperty('bookNumber', 1);

  expect(lastItem).toHaveProperty('series', '');
});
