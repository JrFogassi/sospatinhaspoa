import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Ajude aqueles que precisam de um lar!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem
                         src="imgs/molly.jpeg"
                         text="Molly, 2 meses, mãe porte M/G"
                         path="/"
                        />
                         <CardItem
                         src="imgs/amora.jpeg"
                         text="Amora, tem em torno de 2 anos, porte M/P, castrada"
                         path="/"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem
                         src="imgs/preta.jpeg"
                         text="Preta, 8 meses, porte G"
                         path="/"
                        />
                        <CardItem
                         src="imgs/ravena.jpeg"
                         text="Ravena, 8 meses, porte G"
                         path="/"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem
                         src="imgs/sofia.jpeg"
                         text="Sofia, tem em torno de 7 meses, porte G, castrada"
                         path="/"
                        />
                        <CardItem
                         src="imgs/dante.jpeg"
                         text="Dante, porte G, cerca de 2 a 3 anos"
                         path="/"
                        />
                    </ul>
                    <ul className="cards__item">
                    <CardItem
                         src="imgs/vivi.jpeg"
                         text="Vivi, em torno de 4 meses, possível porte M"
                         path="/"
                        />
                        <CardItem
                         src="imgs/pandora.jpeg"
                         text="Pandora, foi resgatada depois de ser atropelada, perdeu uma pata. Porte M, castrada, em torno de 2 anos"
                         path="/"
                        />
                    </ul>      
                </div>
            </div>
        </div>
    )
}

export default Cards
