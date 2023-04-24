import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeApp } from '@raber/react';
import '@raber/react/src/index.css';

initializeApp({
  publicKey: 'ZXrA6EruQkdOmZXryEymXDihtSR2'
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
