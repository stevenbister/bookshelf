# Bookshelf

## Getting Started locally

This project uses [Sanity](https://www.sanity.io/docs/getting-started) as the CMS and serves the content using their [GraphQl API](https://www.sanity.io/docs/graphql).

To access the api add the project ID to a `.env` file

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=<your project ID>
```

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
