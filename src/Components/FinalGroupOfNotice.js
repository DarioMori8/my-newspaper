import {Component} from "react";
import FinalNoticeCard from "./FinalNoticeCard";
import '../Style/FinalGroupOfNotice.scss'
class FinalGroupOfNotice extends Component{

    state = {
        windowWidth: window.innerWidth, // Larghezza della finestra del browser
        cards: [
            {id: 0, immagine:"https://placehold.co/370x212",argument:"POLITICS", title: "Lorem Ipsum", desc: "Lorem Ipsum"},
            {id: 1, immagine: "https://placehold.co/370x212", argument: 'POLITICS',  title: "Lorem Ipsum", desc: "Lorem Ipsum"},
            {id: 2, immagine: "https://placehold.co/370x212", argument:"WORLD NEWS", title: "Lorem Ipsum", desc: "Lorem Ipsum"},
            {id: 3, immagine: "https://placehold.co/370x212", argument:"POLITICS",  title: "Lorem Ipsum", desc: "Lorem Ipsum"},
            {id: 4, immagine: "https://placehold.co/370x212", argument:"POLITICS", title: "Lorem Ipsum", desc: "Lorem Ipsum"},
            {id: 5, immagine: "https://placehold.co/370x212",argument:"POLITICS",  title: "Lorem Ipsum", desc: "Lorem Ipsum"},
        ]
    }
    render() {
        return (
            <>
                <div className="container-all">
                    <div className="center-group2">
                        <div className="center-container">
                            <div className="advertaising-zone">
                                    {this.state.cards.map(card => (
                                        <FinalNoticeCard
                                            key={card.id}
                                            immagine={card.immagine}
                                            argument={card.argument}
                                            title={card.title}
                                            desc={card.desc}
                                        />
                                    ))}
                            </div>
                            <div className="space"></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FinalGroupOfNotice;