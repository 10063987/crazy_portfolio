import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import 'leaflet/dist/leaflet.css';
import Saludo from '../components/Saludo'
import Link from 'next/link'


const Home: NextPage = () => {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

  return (<>
    <div className='w-screen h-screen bg-red-500'>
      <h1>Index</h1>
      <Link href='/map'>
        <h2 className='bg-blue-500 cursor-pointer' >Map</h2>
      </Link>
    </div>
  </>)
}

export default Home
