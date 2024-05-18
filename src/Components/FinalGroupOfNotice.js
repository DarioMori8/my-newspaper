import {Component} from "react";
import FinalNoticeCard from "./FinalNoticeCard";
import '../Style/FinalGroupOfNotice.scss'
class FinalGroupOfNotice extends Component{

    state = {
        windowWidth: window.innerWidth, // Larghezza della finestra del browser
        cards: [
            {id: 0, immagine:"https://placehold.co/370x212",argument:"POLITICS", title: "Newsmax Host Concocts Absurd Excuses For Kristi Noem Book That Even She Rejects", desc: "Eric Bolling really really reached on this one in trying to defend the South Dakota governor."},
            {id: 1, immagine: "https://placehold.co/370x212", argument: 'POLITICS', title:"Former Aide Offers Blistering Assessment Of Trump 2024 Veepstakes", desc: "Alyssa Farah Griffin hit Republicans competing to become Trump’s running mate with a damning question."},
            {id: 2, immagine: "https://placehold.co/370x212", argument:"WORLD NEWS",title: 'American Soldier Arrested In Russia, Accused Of Stealing From Girlfriend', desc: "An American soldier has been arrested in Russia's port city of Vladivostok and accused of stealing from a Russian girlfriend, U.S. officials said."},
            {id: 3, immagine: "https://placehold.co/370x212", argument:"POLITICS", title: "After Hamas Accepts Cease-fire Proposal For Gaza War, Israel Expands Fighting", desc: "The move dashed hopes that diplomacy would stop Israel from carrying out its deeply controversial attack on Rafah, the last refuge for 1.5 million Palestinians."},
            {id: 4, immagine: "https://placehold.co/370x212", argument:"POLITICS", title:"Ex-Aide Exposes Meaning Of Trump’s Courtroom Scowl: ‘Scares Me A Bit", desc: "Omarosa Manigault Newman also suggested why the former president is almost pushing Judge Juan Merchan to lock him up in his hush money trial."},
            {id: 5, immagine: "https://placehold.co/370x212",argument:"POLITICS", title: "Ex-Trump Official Flags ‘Very Chilling Signal’ About This Election Season", desc: "Miles Taylor said things are happening a little differently for Donald Trump during the 2024 campaign."},
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