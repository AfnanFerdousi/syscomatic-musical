import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import CreateMusic from '@/components/CreateMusic'
import Stream from '@/components/Stream'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
    <Banner/>
    <CreateMusic/>
    <Stream/>
    </div>
  )
}
