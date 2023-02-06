import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/Components/Banner/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>hi</h1>

      <h1 className="text-3xl text-red-600 font-bold underline">
        Hello world!
      </h1>
      <Banner />

    </div>
  )
}
