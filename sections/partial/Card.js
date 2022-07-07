import React from 'react';
import Image from "next/image";

function Card(props) {
    
    return (
        <>
        <div className="p-8 p-5 my-5">
            <div className="h-72 relative border-8 border-white rounded-3xl">
            <Image className="rounded-3xl mx-auto border-b-8 border-white" src={props.asset} alt="" layout="fill" objectFit="fill"/>
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

