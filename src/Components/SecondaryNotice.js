import  "../Style/SecondaryNotice.scss"
import {Component} from "react";

import CardNotice from "./CardNotice";


class SecondaryNotice extends Component {

    state = {
        cardsPerSlide: 8, // Numero di card da visualizzare per ogni slide
        windowWidth: window.innerWidth, // Larghezza della finestra del browser
        cards: [
            {id: 0, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: 'J.D. Vance Goes Full Memory Hole With Claim About Mike Pence On Jan.6'},
            {id: 1, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Ex-Aiden Warms Key Check On Trump Will Be Gone In Second Term"},
            {id: 2, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: 'Kristi Noem Bizarrely Doubles Down On "Tough Decisions" In Defense Of Dog Killing'},
            {id: 3, immagine: "https://placehold.co/182x102", title: 'U.S. NEWS', desc: "Police Start Crackdown On Pro-Palestinian Protesters At UCLA Campus"},
            {id: 4, immagine: "https://placehold.co/182x102", title: 'U.S. NEWS', desc: "Protest In Support Of Palestinians Are Spreading Far Beyond Coastal Universities"},
            {id: 5, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: " RFK Jr. to Biden: I'm Not The Spoiler, You're The Spoiler"},
            {id: 6, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Trump Appears To Reveal His Plan If He Loses Election To Biden"},
            {id: 7, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Trump Spends Day Off From Court Ranting About Judge:'He Gagged Me!'"}
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