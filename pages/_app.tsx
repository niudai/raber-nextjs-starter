import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeApp } from '@raber/react';
import '@raber/react/src/index.css';

initializeApp({
  // remember to replace this with your own public key, otherwise you won't be able to edit your pages
  publicKey: process.env.NEXT_PUBLIC_RABER_PUB_KEY || 'ZXrA6EruQkdOmZXryEymXDihtSR2'
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
