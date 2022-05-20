import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Postbox from '../components/Postbox'

const Home: NextPage = () => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>Reddit Clone</title>
      </Head>

      {/* POSTBOX */}
      <Postbox />

      <div className="flex">{/* FEED */}</div>
    </div>
  )
}

export default Home
