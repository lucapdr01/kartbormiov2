import Image from "next/image";
//import logoBig from '../../../public/images/logoBig.png'
import React from 'react';
import SplashCard from "./partial/SplashCard";
//import TopBar from './partial/TopBar';


function SplashScreen() {

    return (
        <>
        <section className="splash-bg2 px-6 md:px-8 lg:px-0 pb-4">
            <div className="mx-auto px-8 md:px-0">
            {/* Header */}
           {/* <TopBar/>*/}
            <div className="pt-2 pb-2 md:py-8 lg:py-10"></div>
            <div className="md:grid md:grid-cols-11 md:gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="md:col-span-1 lg:col-span-1 mb-8 md:mb-0 text-center md:text-left"></div>
            <div className="md:col-span-11 lg:col-span-4 mb-8 md:mb-0 text-center md:text-left">
                <div className='text-center mx-auto pt-6 pb-12'>
                </div>
               <h1 className="h1 my-title font-bold text-white text-4xl lg:text-6xl mb-4 font-red-hat-display text-left px-2" data-aos="fade-down">
                Kartdromo Bormio
                </h1>
                <p className="text-gray-400 text-left md:px-2" data-aos="fade-down" data-aos-delay="150">
                Pista di Go Kart a Bormio | Divertimento per giovani
                </p>
            </div>
            <div className="md:col-span-1 lg:col-span-1 mb-8 md:mb-0 text-center md:text-left"></div>
            <div className="md:col-span-11 lg:col-span-4 mb-8 md:mb-0 text-center md:text-left">
             <SplashCard/>
            </div>
            <div className="md:col-span-1 lg:col-span-1 mb-8 md:mb-0 text-center md:text-left"></div>
            </div>
            <div className="pt-16 pb-8 md:pt-20 md:pb-8"></div>
            </div>
        </section>
        </>
    );
  }
  
export default SplashScreen;

