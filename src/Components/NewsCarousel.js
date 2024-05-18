import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'
import CardPage from "./CardPage";



class NewsCarousel extends Component {


    state = {
        cardsPerSlide: 4, // Numero di card da visualizzare per ogni slide
        windowWidth: window.innerWidth, // Larghezza della finestra del browser
        cards: [
            {id: 0, immagine: "https://placehold.co/224x128", title: 'U.S. NEWS', desc: 'Harvey Weinstein Hospitalized After His Return To New York From Upstate Prison'},
            {id: 1, immagine: "https://placehold.co/224x128", title: 'POLITICS', desc: "Bernie Sanders Unleashes Fiery Comeback To Netanyahu's Antisemitism Accusations"},
            {id: 2, immagine: "https://placehold.co/224x128", title: 'WORLD NEWS', desc: 'Hamas Is Reviewing An Israel Proposal For Gaza Cease-Fire, As Rafah Offensive Looms'},
            {id: 3, immagine: "https://placehold.co/224x128", title: 'POLITICS', desc: "Chants Of 'Shame On You' Greet Guests At WH Correspondents' Dinner Shadowed By War In Gaza"},
            {id: 4, immagine: "https://placehold.co/224x128", title: 'POLITICS', desc: "The Impeachment Inquiry Against Joe Biden Was Doomed From The Start"}
        ]
    };

    // Gestisci il ridimensionamento della finestra del browser
    handleResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const { cards, cardsPerSlide, windowWidth } = this.state;

        // Calcola il numero di card da visualizzare per ogni slide in base alla larghezza della finestra del browser
        const numCardsPerSlide = windowWidth >= 992 ? cardsPerSlide : 3; // Ad esempio, mostra 6 card se la finestra è larga >= 992px, altrimenti mostra 2 card

        // Dividi le card in gruppi per ciascuna slide
        const slides = [];
        for (let i = 0; i < cards.length; i += numCardsPerSlide) {
            slides.push(cards.slice(i, i + numCardsPerSlide));
        }

        return (
            <Carousel indicators={false} interval={null} className="custom-carousel">
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <div className="row">
                            {slide.map(card => (
                                <div key={card.id} className={`col-${12 / numCardsPerSlide}`}>
                                    <CardPage
                                        immagine={card.immagine}
                                        title={card.title}
                                        description={card.desc}
                                    />
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

export default NewsCarousel

