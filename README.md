[![Netlify Status](https://api.netlify.com/api/v1/badges/20a1902f-8a3c-4dc6-87ae-973ff95c1111/deploy-status)](https://app.netlify.com/sites/glittery-caramel-209e33/deploys)

# Bookshelf

## Getting Started locally

This project uses [Sanity](https://www.sanity.io/docs/getting-started) as the CMS and serves the content using their [GraphQl API](https://www.sanity.io/docs/graphql).

To access the api add the project ID to a `.env` file

```bash
SANITY_PROJECT_ID=<your project ID>
```

Don't forget to update this ID within the sanity.json file either

## Next

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
