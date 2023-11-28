import Image from 'next/image'
import { Inter } from 'next/font/google'
import * as components from "@/components/modules";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' bg-white flex flex-col min-h-screen'>
      <components.Header/>
      <components.Body/>
      <components.Footer/>
    </main>
  )
}
