import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import 'leaflet/dist/leaflet.css';
import Saludo from '../components/Saludo'


const Home: NextPage = () => {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

  return (<>
    <Saludo />
    <div style={{ height: "100%", width: "100%" }}>
      <MapWithNoSSR />
    </div>
  </>)
}

export default Home
