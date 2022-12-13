import Head from 'next/head'
import Wrapper from '../components/Wrapper'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Footer />
      </Wrapper>
    </div>
  )
}
