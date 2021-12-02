import React from 'react';
import '../App.css';
import './Main.css';

function Main() {
    return (
        <div className='main-container'>
           <video src='/video/sospatinhas.mp4' autoPlay loop muted />
           <h1>SOS Patinhas POA</h1>
           <p>Projeto criado em 2020 pela família Fogassi</p> 
            <p>para ajudar os animais de rua da região.</p>
        </div>
    )
}

export default Main;
