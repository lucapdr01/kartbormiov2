import React from 'react';
import Image from "next/image";

function Card(props) {
    
    return (
        <>
        <div className="p-8 p-5 my-5">
            <div className="h-72 relative">
            <Image class="w-48 h-48 rounded-xl mx-auto" src={props.asset} alt="" layout="fill" objectFit="fill"  width="900" height="900"/>
            </div>
            <h1 className="h1 text-left pt-4 text-2xl lg:text-3xl mb-4 font-red-hat-display" data-aos="fade-down">
                {props.title}
            </h1> 
            <p className='text-left text-gray-400'>
            {props.text}
            </p>
        </div>
        </>
    );
  }
  
export default Card;

