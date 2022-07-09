import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { theme } from '../styles/theme'
import { makeServer } from '../services/mirage'

// if (process.env.NODE_ENV === 'development') {
//   makeServer({ environment: 'development' })
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <ChakraProvider resetCSS theme={theme}>
        <Header />

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
