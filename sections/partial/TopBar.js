import React from 'react';
import Image from 'next/image';
import LogoKart from '../../public/images/logoKart.png';

function TopBar(props) {

    return (
        <>
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-10 md:gap-12 lg:gap-20 items-center border-b border-white hidden md:visible">
        <div className="md:col-span-3 lg:col-span-3 mx-2 text-center">
        <div className="h-14 relative">
        <Image src={LogoKart} alt="Picture of the author" layout="fill" objectFit="contain" 
        className="mx-auto"/>
        </div>
        </div>
        <div className="md:col-span-4 lg:col-span-4 m-2">
            <div className='flex justify-start'>
            {/*<label className='text-white inline-block p-4 m-4'>Partners</label>*/}
            <label className='text-white text-lg font-bold inline-block p-4 my-2 mx-4 whitespace-nowrap hover:text-gray-400'><a href='#tariffe'>Tariffe e Orari</a></label>
            <label className='text-white text-lg font-bold inline-block p-4 my-2 mx-4 whitespace-nowrap hover:text-gray-400'><a href='#dove'>Dove Siamo?</a></label>
            <label className='text-white text-lg font-bold inline-block p-4 my-2 mx-4 whitespace-nowrap hover:text-gray-400'><a href='#contatti'>Contatti</a></label>
            </div>
        </div>
        
        <div className="md:col-span-1 lg:col-span-1 mb-8 md:mb-0 text-center md:text-left">
        </div>
        <div className="md:col-span-2 lg:col-span-2 mb-8 md:mb-0 text-center md:text-left">   
        </div>

        </div>
        </>
    )
  }
  
export default TopBar;

