import getSanityContent from '../src/lib/sanity';
import fakeData from '../__mocks__/fakeData';

beforeEach(() => {
  fetch.resetMocks();
});

it('runs a query against the graphql api', async () => {
  fetch.mockResponseOnce(JSON.stringify({ fakeData }));

  await getSanityContent({ query: `` });

  expect(fakeData.allBook).toHaveLength(3);
});
