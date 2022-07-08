import React from 'react';
import Image from "next/image";

function Card(props) {
    
    return (
        <>
        <div className="p-2 my-5 splash-card-bg-ext rounded-3xl">
            <div className="h-72 relative rounded-3xl">
            <Image className="rounded-3xl mx-auto" src={props.asset} alt=""  layout="fill" objectFit="cover"/>
            </div>
            <div className='splash-card-bg-int rounded-xl px-4 py-4 my-4'>
            <h1 className="h1 text-left pt-4 text-2xl lg:text-3xl mb-4 font-red-hat-display" data-aos="fade-down">
                {props.title}
            </h1> 
            <p className='text-left text-gray-400'>
            {props.text}
            </p>
            </div>
        </div>
        </>
    );
  }
  
export default Card;

