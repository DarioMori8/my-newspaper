import HorizontalCard from "./HorizontalCard";
import {Component} from "react";
import CardNotice from "./CardNotice";
import  "../Style/ThirdGroupOfNotice.scss"
import "../Style/SecondaryNotice.scss"

class ThirdGroupOfNotice extends Component{

    state = {
        windowWidth: window.innerWidth, // Larghezza della finestra del browser
        cards_WH: [
            {id: 0, immagine: "https://placehold.co/182x102", title: 'ENTERTAINMENT', desc: "Drew Barrymore Accidentally Left A 'Sex List' Of People She Slept With At Danny DeVito's House"},
            {id: 1, immagine: "https://placehold.co/182x102", title: 'U.S. NEWS', desc: "A Second Boeing Whistleblower Has Died"},
            {id: 2, immagine: "https://placehold.co/182x102" , title: 'U.S. NEWS', desc: "Elon Musk Says He'll Reinstate Twitter Account Of Hitler-Loving White Supremacist"},
            {id: 3, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "The House Passed a Bill To Fight Antisemitism. Here's Why Critics Call It Misleading"},
            {id: 4, immagine: "https://placehold.co/182x102", title: 'ENTERTAINMENT', desc: "'We Are Part Of It!' Jimmy Kimmel Reacts To Being Officially Named In Trump Trial"},
            {id: 5, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: " Micheal Cohen's Tweets Mocking Donald Trump Draw Laughs From Courtroom"},
            {id: 6, immagine: "https://placehold.co/182x102", title: 'ENTERTAINMENT', desc: "'This Is Where We Are': Stephen Colbert Spots Trump's Weirdest 'Party Trick' Yet"},
            {id: 7, immagine: "https://placehold.co/182x102", title: 'POLITICS', desc: "Inside UCLA's Palestinian Solidarity Encampment -Before Police Tore It Apart"}
        ],
        cards_S:[
           {id: 0, immagine: "https://placehold.co/117x113", title: "The 'Unsexy' Beauty Products That My Algorithm Keeps Suggesting Are Actually Pretty Great"},
           {id: 1, immagine: "https://placehold.co/117x113", title: "37 Ways To Make Your Backyard Look Like An 'After' Shot On HGTV"},
           {id: 2, immagine: "https://placehold.co/117x113" , title: "Skin Care Gems Reviewers Say Save Them During Flights & Beyond"},
           {id: 3, immagine: "https://placehold.co/117x113", title: "This Skin Serum Is A Secret Weapon For Shrinking Large Pores- And It's On Sale"},
           {id: 4, immagine: "https://placehold.co/117x113", title: "Right Now, This Affordable Stanley Tumbler Look-A-Like Is On Sale For Even Less"},
        ],
        cards_O_P:[
            {id: 0, immagine: "https://placehold.co/117x113", title: "10 razze di cani da non scegliere se hai bambini"},
            {id: 1, immagine: "https://placehold.co/117x113", title: "Aggiungetelo al caffè per sciogliere la pancia"},
            {id: 2, immagine: "https://placehold.co/117x113" , title: "Barceló Hotel Group: 10% di sconto per i soci MeliáRewards"},
            {id: 3, immagine: "https://placehold.co/117x113", title: "Fornitori di energia: confronta le offerte e risparmia fino a 400€"},
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