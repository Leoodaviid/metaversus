import NavBar from '@/components/NavBar'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <div>
      <NavBar />
      <About />
      <Hero />
    </div>
  )
}
