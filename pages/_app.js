import Head from 'next/head'
import '../styles/globals.css'
import 'antd/dist/antd.css';
import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export function BasePage({ title, description, children, ...rest }) {
  return (
    <div { ...rest }>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TopMenu />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
