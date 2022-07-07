import React from 'react';
import BottomBar from './partial/BottomBar'


function Footer() {

    return (
        <>
        <section className="footer-bg" id="contatti">
            <div className="mx-auto px-4 sm:px-6">
            <div className="py-5"></div>

            <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            </div>
            <BottomBar/>
            <div className="pb-10"></div>
            <p className="p-5 text-white font-bold text-center">&copy; Luca Pedranzini</p>
            </div>
        </section>
        </>
    );
  }
  
export default Footer;

