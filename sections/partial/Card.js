import React, {useEffect, useState } from 'react';
import Image from "next/image";
import { Rings } from  'react-loader-spinner'

function Card(props) {
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        console.log(loaded);
    },[loaded]);
    
    return (
        <>
        <div className="p-2 my-5 splash-card-bg-ext rounded-3xl">
            
            
            {!loaded ?
            <>
            <div className="mx-auto tex-center grid justify-items-center ">
            <Rings className="mx-auto text-center "
            color="#00BFFF" height={100} width={100} />
            </div> 
            </> :
            <>
            </>
            }
            <div className="h-72 relative rounded-3xl">
            <Image className="rounded-3xl mx-auto" src={props.asset} alt=""  layout="fill" objectFit="cover" onLoad={()=>{setLoaded(true) }}/>
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

