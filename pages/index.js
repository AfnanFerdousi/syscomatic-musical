import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import CreateMusic from '@/components/CreateMusic'
import Stream from '@/components/Stream'
import Shop from '@/components/Shop'
import Subscription from '@/components/Subscription'
import Footer from '@/components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className=''>
     <Head>
  <title>Music</title>
</Head>
      <Banner />
      <CreateMusic />
      <Stream />
      <Shop />
      <Subscription />
      <Footer />
    </div>
  )
}
