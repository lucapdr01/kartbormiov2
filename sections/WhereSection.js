import React from 'react';


function OurVision() {

    return (
        <>
        <section className="bottom-section-bg pb-10 pt-4 px-6 md:px-8 lg:px-0" id='dove'>
            <div className="text-white mx-auto">

            <div className="md:grid md:grid-cols-11 md:gap-12 lg:gap-20 items-center lg:items-start">

            {/* Content */}
            <div className="text-center md:col-span-11">
            <h1 className="h1 my-title text-4xl lg:text-4xl mb-4 font-red-hat-display" data-aos="fade-down">
                Dove Siamo?
            </h1>
            <p className="mx-auto max-w-4xl text-gray-400 pb-4" data-aos="fade-down" data-aos-delay="150">
            A 2 km da Bormio, località Capitania, in un ambiente sportivo immerso nel verde
             </p>
            <div className='mt-4 border-b border-gray-400 max-w-2xl mx-auto'></div>
            </div>
            {/* Maps */}
            <div className="text-center md:col-span-11 h-screen p-2">
                <iframe className="mx-auto h-full w-full max-w-5xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3551.917077594209!2d10.35735794650271!3d46.45251684670352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x99adf92b2fac5279!2sKartdromo+Mimo+Villoresi!5e0!3m2!1sit!2sit!4v1498047424638" frameborder="0" allowfullscreen></iframe>
            </div>
            </div>
            </div>
        </section>
        </>
    );
  }
  
export default OurVision;

