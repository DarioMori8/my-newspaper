import  "../Style/SecondaryNotice.scss"
import {Component} from "react";

import CardNotice from "./CardNotice";


class SecondaryNotice extends Component {

    state = {
        cardsPerSlide: 8, // Numero di card da visualizzare per ogni slide
        windowWidth: window.innerWidth, // Larghezza della finestra del browser
        cards: [
            {id: 0, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: 'Lorem Ipsum'},
            {id: 1, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Lorem Ipsum"},
            {id: 2, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: 'Lorem Ipsum'},
            {id: 3, immagine: "https://placehold.co/182x102", title: 'U.S. NEWS', desc: "Lorem Ipsum"},
            {id: 4, immagine: "https://placehold.co/182x102", title: 'U.S. NEWS', desc: "Lorem Ipsum"},
            {id: 5, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Lorem Ipsum"},
            {id: 6, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Lorem Ipsum"},
            {id: 7, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Lorem Ipsum"}
        ]
    };

    render() {
        return (
            <div className="container-all">
                <div className="center-group">
                    <div className="top-container1">
                        <div className="container-of-advertaising">
                            <img src="https://placehold.co/691x84" className="First_advertaising justify-content"/>
                        </div>
                    </div>
                    <div className="center-container">
                        <div className="zone-title">
                            <h1 className="title">
                                <p className="slash">/ LATEST NEWS /</p>
                            </h1>
                        </div>
                        <div className="container-grid">
                            {this.state.cards.map(card => (
                                <CardNotice
                                    key={card.id}
                                    immagine={card.immagine}
                                    title={card.title}
                                    description={card.desc}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='advertaising-column'>

                </div>

            </div>

        );
    }
}

export default SecondaryNotice;