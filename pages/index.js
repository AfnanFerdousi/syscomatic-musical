import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import CreateMusic from '@/components/CreateMusic'
import Stream from '@/components/Stream'
import Shop from '@/components/Shop'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
    <Banner/>
    <CreateMusic/>
    <Stream/>
    <Shop/>
    </div>
  )
}
