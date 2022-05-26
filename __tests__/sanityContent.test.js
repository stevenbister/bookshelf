import getSanityContent from '../src/lib/sanity';
import fakeData from '../__mocks__/fakeData';

const queryUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/production/default`;

beforeEach(() => {
  fetch.resetMocks();
});

it('runs a query against the graphql api', async () => {
  fetch.mockResponseOnce(JSON.stringify({ fakeData }));

  await getSanityContent({ query: `` });

  expect(fakeData.allBook).toHaveLength(3);
  expect(fetch.mock.calls[0][0]).toEqual(queryUrl);
});
