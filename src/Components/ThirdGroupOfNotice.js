import HorizontalCard from "./HorizontalCard";
import {Component} from "react";
import CardNotice from "./CardNotice";
import  "../Style/ThirdGroupOfNotice.scss"
import "../Style/SecondaryNotice.scss"

class ThirdGroupOfNotice extends Component{

    state = {
        windowWidth: window.innerWidth, // Larghezza della finestra del browser
        cards_WH: [
            {id: 0, immagine: "https://placehold.co/182x102", title: 'ENTERTAINMENT', desc: "Lorem Ipsum"},
            {id: 1, immagine: "https://placehold.co/182x102", title: 'U.S. NEWS', desc: "Lorem Ipsum"},
            {id: 2, immagine: "https://placehold.co/182x102" , title: 'U.S. NEWS', desc: "Lorem Ipsum"},
            {id: 3, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Lorem Ipsum"},
            {id: 4, immagine: "https://placehold.co/182x102", title: 'ENTERTAINMENT', desc: "Lorem Ipsum"},
            {id: 5, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: " Lorem Ipsum"},
            {id: 6, immagine: "https://placehold.co/182x102", title: 'ENTERTAINMENT', desc: "Lorem Ipsum"},
            {id: 7, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Lorem Ipsum"}
        ],
        cards_S:[
           {id: 0, immagine: "https://placehold.co/117x113", title: "Lorem Ipsum"},
           {id: 1, immagine: "https://placehold.co/117x113", title: "Lorem Ipsum"},
           {id: 2, immagine: "https://placehold.co/117x113" , title: "Lorem Ipsum"},
           {id: 3, immagine: "https://placehold.co/117x113", title: "Lorem Ipsum"},
           {id: 4, immagine: "https://placehold.co/117x113", title: "Lorem Ipsum"},
        ],
        cards_O_P:[
            {id: 0, immagine: "https://placehold.co/117x113", title: "Lorem Ipsum"},
            {id: 1, immagine: "https://placehold.co/117x113", title: "Lorem Ipsum"},
            {id: 2, immagine: "https://placehold.co/117x113" , title: "Lorem Ipsum"},
            {id: 3, immagine: "https://placehold.co/117x113", title: "Lorem Ipsum"},
        ],

    }
    render() {
        return (
            <>
                <div className="container-all">
                    <div className="center-group1">
                        <div className="center-container">
                            <div className="zone-title">
                                <h1 className="title">👇 WHAT'S HAPPENING 👇</h1>
                            </div>
                            <div className="container-grid">
                                {this.state.cards_WH.map(card => (
                                    <CardNotice
                                        key={card.id}
                                        immagine={card.immagine}
                                        title={card.title}
                                        description={card.desc}/>
                                ))}
                            </div>
                        </div>
                        <div className="container_of_advertaising1">

                        </div>
                        <div className="video-container">
                            <div className="zone-title">
                                <h1 className="title">HUFFPOST VIDEO</h1>
                            </div>
                            <div className="video-zone">

                            </div>
                        </div>
                    </div>
                    <div className='advertaising-column'>
                        <div className="advertaising-zone">
                            <div className="zone-title">
                                <h1 className="title">SHOPPING</h1>
                            </div>
                            <div className="shopping_notice">
                                {this.state.cards_S.map(card => (
                                    <HorizontalCard
                                        key={card.id}
                                        immagine={card.immagine}
                                        title={card.title}
                                    />
                                ))}
                            </div>
                            <div className="space"></div>
                            <div className="zone-title">
                                <h1 className="title">FOUR OUR PARTNER</h1>
                            </div>
                            <div className="From-Our-Partner">
                                {this.state.cards_O_P.map(card => (
                                    <HorizontalCard
                                        key={card.id}
                                        immagine={card.immagine}
                                        title={card.title}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ThirdGroupOfNotice;