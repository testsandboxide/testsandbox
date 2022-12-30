import type { AppProps } from 'next/app'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import { useRouter } from 'next/router'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {

  const { asPath } = useRouter()

  return(
    <NextAuthProvider session={pageProps.session}>
      {asPath !== '/signin' && <Header />}
      <Component {...pageProps} />
      {asPath !== '/signin' && asPath !== '/dashboard' && <Footer />}
    </NextAuthProvider>
  )
}
