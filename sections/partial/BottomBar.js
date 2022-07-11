import React from 'react';

function BottomBar(props) {

    return (
        <>
        <div className="max-w-6xl mx-auto mt-8 pt-4 md:grid md:grid-cols-10 md:gap-12 lg:gap-20 items-center border-t border-white">
        <div className="md:col-span-10 lg:col-span-10 m-2">
            <div className='items-center text-center lg:flex lg:justify-center'>
            {/*<label className='text-white inline-block p-4 m-4'>Partners</label>*/}
            <label className='text-white block lg:inline-block p-4 m-4 whitespace-nowrap'>23032 Capitania Via Milano</label>
            <label className='text-white block lg:inline-block p-4 m-4 whitespace-nowrap'>Tel. 0342902319</label>
            <label className='text-white block lg:inline-block p-4 m-4 whitespace-nowrap'>Cell. 3498687975</label>
            <label className='text-white block lg:inline-block p-4 m-4 whitespace-nowrap'>e-mail: kartbormio@virgilio.it</label>
            </div>    
        </div>
        </div>
        </>
    )
  }
  
export default BottomBar;

