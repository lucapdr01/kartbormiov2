import React, {useEffect, useState } from 'react';

function PriceSection() {

    return (
        <>
        <section className="splash-bg pt-8 pb-32 px-6 md:px-8 lg:px-0" id="tariffe">
            <div className="mx-auto">

            <div className="md:grid md:grid-cols-12 md:gap-5 lg:gap-5 items-center">

            {/* Content */}
            <div className="text-center md:col-span-12">
            <h1 className="h1 my-title text-white text-4xl lg:text-4xl font-red-hat-display pb-8" data-aos="fade-down">
                Tariffe e Orari 
            </h1>
            <div className='mt-4 border-b border-gray-400 max-w-2xl mx-auto'></div>
            </div>

            {/* Table */}
            <div className="text-center md:col-span-12 lg:col-span-12 mt-4">
            </div> 
            <div className="text-center md:col-span-1 lg:col-span-1"></div>
            <div className="text-center text-white table-bg md:col-span-10 lg:col-span-10 p-5 rounded-3xl border border-white">
                <div className="md:grid md:grid-cols-12 md:gap-4 lg:gap-4 items-center">
                    
                    <div className="md:col-span-6 lg:col-span-6 px-2 md:pl-2 md:pr-12 md:border-r border-white">
                        <div className="md:grid md:grid-cols-2 items-left text-white">
                        
                        <div className="col-span-2 px-2 text-center">
                            <div className='text-lg uppercase font-bold text-center py-2 px-4 mb-4 text-gray-400'> Tariffe</div>
                        </div>

                            {/* Noleggio */}
                            <div className="col-span-2 px-2 text-center mt-4">
                                <div className='text-sm uppercase font-bold text-center mx-auto md:mx-1 w-fit py-2 px-4 mb-4 orange-bt text-white rounded-xl'> Kart da noleggio</div>
                            </div>
                            <div className="col-span-1 px-2 ">
                                <div className="text-center border-b border-white border-opacity-50 mb-2">
                                    <label className="uppercase font-bold text-sm">Durata Corsa</label>
                                </div>
                                <div className="text-center block text-opacity-50 mb-4">
                                    <label className="uppercase text-sm">10 minuti</label>
                                </div>
                            </div>
                            <div className="col-span-1 px-2 mb-8">
                                <div className="text-center border-b border-white border-opacity-50 mb-2">
                                    <label className="uppercase font-bold text-sm">Prezzo</label>
                                </div>
                                <div className="text-center block text-opacity-50 mb-4">
                                    <label className="uppercase text-sm">19€</label>
                                </div>
                            </div>
                            
                            {/* Kart Private */}
                            <div className="col-span-2 px-2 mt-4">
                                <div className='text-sm uppercase font-bold text-left w-fit mx-auto md:mx-1 py-2 px-4 mb-4 orange-bt text-white rounded-xl'> Kart Privato</div>
                            </div>
                            <div className="col-span-1 px-2 ">
                                <div className="text-center border-b border-white border-opacity-50 mb-2">
                                    <label className="uppercase font-bold text-sm">Giugno, Luglio, Settembre</label>
                                </div>
                                <div className="text-center block text-opacity-50 mb-4">
                                    <label className="uppercase text-sm">35€</label>
                                </div>
                            </div>
                            <div className="col-span-1 px-2 ">
                                <div className="text-center border-b border-white border-opacity-50 mb-2">
                                    <label className="uppercase font-bold text-sm">Agosto</label>
                                </div>
                                <div className="text-center block text-opacity-50 mb-4">
                                    <label className="uppercase text-sm">45€</label>
                                </div>
                            </div>
                            
                            {/* Condeucente Aggregato */}
                            <div className="col-span-2 px-2 mt-4">
                                <div className='text-sm uppercase font-bold text-left w-fit mx-auto md:mx-1 py-2 px-4 mb-4 orange-bt text-white rounded-xl'> Conducente Aggregato</div>
                            </div>
                            <div className="col-span-1 px-2 ">
                                <div className="text-center border-b border-white border-opacity-50 mb-2">
                                    <label className="uppercase font-bold text-sm">Giugno, Luglio, Settembre</label>
                                </div>
                                <div className="text-center block text-opacity-50 mb-4">
                                    <label className="uppercase text-sm">15€</label>
                                </div>
                            </div>
                            <div className="col-span-1 px-2 ">
                                <div className="text-center border-b border-white border-opacity-50 mb-2">
                                    <label className="uppercase font-bold text-sm">Agosto</label>
                                </div>
                                <div className="text-center block text-opacity-50 mb-4">
                                    <label className="uppercase text-sm">20€</label>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="md:col-span-6 lg:col-span-6 px-2">
                    <div className="md:grid md:grid-cols-2 items-left text-white">
                        <div className="col-span-2 px-2 text-center">
                            <div className='text-lg uppercase font-bold text-center py-2 px-4 mb-4 text-gray-400'> Orari </div>
                        </div>

                        {/* Luglio, Agosto*/}
                        <div className="col-span-2 px-2 mt-4">
                            <div className='text-sm uppercase font-bold text-left w-fit mx-auto md:mx-1 py-2 px-4 mb-4 orange-bt text-white rounded-xl'> Luglio e Agosto</div>
                        </div>
                        <div className="col-span-1 px-2 ">
                            <div className="text-center border-b border-white border-opacity-50 mb-2">
                                <label className="uppercase font-bold text-sm">Giorni</label>
                            </div>
                            <div className="text-center block text-opacity-50 mb-4">
                                <label className="uppercase text-sm">Tutti</label>
                            </div>
                        </div>
                        <div className="col-span-1 px-2 mb-8">
                            <div className="text-center border-b border-white border-opacity-50 mb-2">
                                <label className="uppercase font-bold text-sm">Orario</label>
                            </div>
                            <div className="text-center block text-opacity-50 mb-4">
                                <label className="uppercase text-sm">10:00 - 19:00 *</label>
                            </div>
                        </div>

                        {/* Kart Private */}
                        <div className="col-span-2 px-2 mt-4">
                            <div className='text-sm uppercase font-bold text-left w-fit mx-auto md:mx-1 py-2 px-4 mb-4 orange-bt text-white rounded-xl'> Giungo e Settembre</div>
                        </div>
                        <div className="col-span-1 px-2 ">
                            <div className="text-center border-b border-white border-opacity-50 mb-2">
                                <label className="uppercase font-bold text-sm">Giorni</label>
                            </div>
                            <div className="text-center block text-opacity-50">
                                <label className="uppercase text-sm">Sabato e Domenica</label>
                            </div>
                        </div>
                        <div className="col-span-1 px-2 mb-8">
                            <div className="text-center border-b border-white border-opacity-50 mb-2">
                                <label className="uppercase font-bold text-sm">Orario</label>
                            </div>
                            <div className="text-center block text-opacity-50">
                                <label className="uppercase text-sm">10:00 - 19:00 *</label>
                            </div>
                        </div>
                        <div className="col-span-2 px-2 text-center">
                            <div className='text-sm uppercase font-bold text-center py-2 px-4 mb-4 text-gray-400'> ( Giorni feriali aperto su prenotazione ) </div>
                        </div>
                        <div className="col-span-2 px-2 text-center">
                            <div className='text-sm uppercase font-bold text-center py-2 px-4 mb-4 text-gray-400'> * 10:00 - 15:00 per i Kart Privati </div>
                        </div>

                    </div>  
                    
                    </div>
                </div>
                
            </div>
            </div>

            </div>
        </section>
        </>
    );
}
  
export default PriceSection;

