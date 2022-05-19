import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Postbox from '../components/Postbox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit Clone</title>
      </Head>

      {/* POSTBOX */}
      <Postbox />

      <div>{/* FEED */}</div>
    </div>
  )
}

export default Home
