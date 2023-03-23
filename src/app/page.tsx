import NavBar from '@/components/NavBar'
import About from '@/sections/About'
import Explore from '@/sections/Explore'
import Hero from '@/sections/Hero'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <NavBar />
      <Hero />
      <div className='relative'>
        <About />
        <div className='gradient-03 z-0' />
        <Explore />
      </div>
    </div>
  )
}
