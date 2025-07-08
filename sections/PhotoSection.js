import React from 'react';
import Card from './partial/Card';

function PhotoSection() {
    const cardContent = [
        {
            title : "Un' Autentica Esperienza Di Guida",
            text : "Sperimenta l'emozione di stare alla guida del veicolo che ha permesso a molti piloti di scoprire il loro talento.",
            asset: "/images/particolare-min.png"
        },
        {
            title : "Il Circuito",
            text: "Il Circuito di Bormio si estende per 650 mt di lunghezza e 6 mt di larghezza. Personale qualificato ed esperto sempre in pista, munito di tutto il necessario per rendere un semplice giro sul kart un' esperienza unica e sicura",
            asset: "/images/inizio-pista-min.png"
        },
        {
            title : "Ambiente Senza Eguali",
            text : "Prova l' emozione del karting immerso nel verde del paesaggio alpino",
            asset: "/images/fine-pista-min.jpg"
        }
    ];

    return (
        <>
        <section className="splash-bg pb-10 pt-4 px-6 md:px-8 lg:px-0" id='vision'>
            <div className="text-white mx-auto">
                <div className="md:grid md:grid-cols-11 md:gap-12 lg:gap-20 items-center lg:items-start">

                    {/* Empty header row */}
                    <div className="text-center md:col-span-11" />

                    {/* Three Cards */}
                    <div className="text-center lg:col-span-1" />
                    
                    {cardContent.map((card, index) => (
                        <div key={index} className="text-center md:col-span-11 lg:col-span-3">
                            <Card asset={card.asset} title={card.title} text={card.text} />
                        </div>
                    ))}

                    <div className="text-center lg:col-span-1" />
                </div>
            </div>
        </section>
        </>
    );
}

export default PhotoSection;
