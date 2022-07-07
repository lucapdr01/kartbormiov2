import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../sections/Header'
import SplashScreen from '../sections/SplashScreen'
import PhotoSection from '../sections/PhotoSection'
import PriceSection from '../sections/PriceSection'
import WhereSection from '../sections/WhereSection'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kartdromo Bormio</title>
        <meta name="description" content="Sito Ufficiale del Kartdromo di Bormio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      {/* <Header/>*/}
      <SplashScreen/>
      <PhotoSection/>
      <PriceSection/>
      <WhereSection/>
      <Footer/>
      </main>
    </div>
  )
}
