[![Netlify Status](https://api.netlify.com/api/v1/badges/20a1902f-8a3c-4dc6-87ae-973ff95c1111/deploy-status)](https://app.netlify.com/sites/glittery-caramel-209e33/deploys)

# Bookshelf

## Getting Started locally

This project uses [Sanity](https://www.sanity.io/docs/getting-started) as the CMS and serves the content using their [GraphQl API](https://www.sanity.io/docs/graphql).

To access the api add the project ID & development dataset to your `.env.local` and `.env.test.local` files.

```.env
NEXT_PUBLIC_SANITY_PROJECT_ID=<your project ID>
NEXT_PUBLIC_SANITY_DATASET=development
NEXT_PUBLIC_WISHLIST_URL=<your wishlist url>
```

Don't forget to update this ID within the sanity.json file!

## Next

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### API

There is an api route at `/api/wishlist` which generates a json response of books scraped from the `NEXT_PUBLIC_WISHLIST_URL` variable.
This url needs to be a public amazon wishlist for the scraper to work correctly, otherwise it will throw an error.

## Sanity

The files for editing our [Sanity studio](https://www.sanity.io/docs/sanity-studio) schema are located within the `/studio` directory.

To use the studio run:

```bash
npm run sanity
```

Open [http://localhost:3000/studio](http://localhost:3000/studio).

### Gotchas!

If you make a change to any of the schema the local studio does not automatically update the GraphQl api.

To do this run:

```bash
npm run sanity:update
```
