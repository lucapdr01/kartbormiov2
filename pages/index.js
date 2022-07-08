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
        <title>Kartdromo Bormio | Go kart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Sito Ufficiale del Kartdromo di Bormio. Luogo ideale per i giovani e per il divertimento per chi si trova in Alta Valle nelle vicinaze di Bormio"/>
        <meta name="keywords" content="Kartdromo, Bormio, Sport, Kart, Alta Valtellina, divertimento, go kart, giovani, divertimento bormio, cosa fare a Bormio"/>
        <meta http-equiv="author" content="Luca Pedranzini" />
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
