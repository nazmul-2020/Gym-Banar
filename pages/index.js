import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/Components/Banner/Banner'
import Navbar from '@/Components/Banner/Navbar'
import Healthy from '@/Components/Banner/Healthy'
import FullBody from '@/Components/Banner/FullBody'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.bg_img}>
    <div className='mx-[99px]'>
     
      <Navbar/>
      <Banner />
      <Healthy/>
      <FullBody/>

    </div>
    </div>
  )
}
