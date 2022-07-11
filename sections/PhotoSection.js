import React from 'react';
import Card from './partial/Card';
import Card1 from '../public/images/particolare-min.png'
import Card2 from '../public/images/inizio-pista-min.png'
import Card3 from '../public/images/fine-pista-min.jpg'


function PhotoSection() {
    const cardContent = [
        {
            title : "Un' Autentica Esperienza Di Guida",
            text : "Sperimenta l'emozione di stare alla guida del veicolo che ha permesso a molti piloti di scoprire il loro talento.",
        },
        {
            title : "Il Circuito",
            text: "Il Circuito di Bormio si estende per 650 mt di lunghezza e 6 mt di larghezza. Personale qualificato ed esperto sempre in pista, munito di tutto il necessario per rendere un semplice giro sul kart un' esperienza unica e sicura",
        },
        {
            title : "Ambiente Senza Eguali",
            text : "Prova l' emozione del karting immerso nel verde del paesaggio alpino",
        }
    ];

    return (
        <>
        <section className="splash-bg pb-10 pt-4 px-6 md:px-8 lg:px-0" id='vision'>
            <div className="text-white mx-auto">

            <div className="md:grid md:grid-cols-11 md:gap-12 lg:gap-20 items-center lg:items-start">

            {/* Content */}
            <div className="text-center md:col-span-11">
            </div>
            {/* Three Cards */}
            <div className="text-center lg:col-span-1"></div>
            <div className="text-center md:col-span-11 lg:col-span-3">
            <Card asset={Card1} title={cardContent[0].title} text={cardContent[0].text}/>
            </div> 
            <div className="text-center md:col-span-11 lg:col-span-3">
            <Card asset={Card2} title={cardContent[1].title} text={cardContent[1].text}/>
            </div> 
            <div className="text-center md:col-span-11 lg:col-span-3">
            <Card asset={Card3} title={cardContent[2].title} text={cardContent[2].text}/>
            </div>
            <div className="text-center lg:col-span-1"></div>
            </div>
            </div>
        </section>
        </>
    );
  }
  
export default PhotoSection;

