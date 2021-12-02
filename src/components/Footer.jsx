import React from 'react';
import './Footer.css';
import {ReactComponent as InstaSVG} from '../svgs/instagram.svg';
import {ReactComponent as WhatsSVG} from '../svgs/whatsapp.svg';
import {ReactComponent as PawSVG} from '../svgs/pawprint.svg';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-contact">
                <h3 className="footer-contact-heading">
                    Gostou de algum dos nossos amigos? 
                </h3>
                <p>Entre em contato conosco!</p>
                <InstaSVG/>@sos_patinhaspoa
                <WhatsSVG/>51 998489044
            </section>  
            <section className='footer-donate'>
                <h3 className='footer-donate-heading'>
                    Você também pode nos ajudar com qualquer valor!
                </h3>
                <p>PIX: 64891046015</p>
            </section>
            <section className="rights">
            <PawSVG/>
            <p>©SOS Patinhas POA</p>
            </section>
        </div>
    )
}

export default Footer;
