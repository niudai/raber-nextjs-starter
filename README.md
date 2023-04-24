## Next.js project with Raber integrated

This is a [Next.js](https://nextjs.org/) project with integration with [Raber](https://www.raber.app/)

## Getting Started

First, replace the public key with your own key in `pages/_app.tsx`:

```js
initializeApp({
  publicKey: '<with your own pub key>'
})
```

You can find public key in the header of the Editor:

![Image](https://firebasestorage.googleapis.com/v0/b/react-builder-c9ea4.appspot.com/o/assets%2FZXrA6EruQkdOmZXryEymXDihtSR2%2Fac5b8da3ee5f01b4089bff9572ef081a1e97da7dd2165b161a8ffba9d1cef746_1280x1280.webp?alt=media)

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:3000/nextjs](http://localhost:3000/nextjs) in [Raber Editor](https://www.raber.app/editor)

You can start editing the page visually in the Raber Editor.

## Learn More

To learn more about Raber, please follow our [official documentation](https://www.raber.app/docs/getting-started).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
