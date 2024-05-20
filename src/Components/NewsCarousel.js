import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'
import CardPage from "./CardPage";



class NewsCarousel extends Component {


    state = {
        cardsPerSlide: 4, // Numero di card da visualizzare per ogni slide
        windowWidth: window.innerWidth, // Larghezza della finestra del browser
        cards: [
            {id: 0, immagine: "https://placehold.co/224x128", title: 'U.S. NEWS', desc: 'Lorem Ipsum'},
            {id: 1, immagine: "https://placehold.co/224x128", title: 'POLITICS', desc: "Lorem Ipsum"},
            {id: 2, immagine: "https://placehold.co/224x128", title: 'WORLD NEWS', desc: 'Lorem Ipsum'},
            {id: 3, immagine: "https://placehold.co/224x128", title: 'POLITICS', desc: "Lorem Ipsum"},
            {id: 4, immagine: "https://placehold.co/224x128", title: 'POLITICS', desc: "Lorem Ipsum"}
        ]
    };

    // Gestisce il ridimensionamento della finestra del browser
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
        const numCardsPerSlide = windowWidth >= 992 ? cardsPerSlide : 3; // Ad esempio, mostra 4 card se la finestra è larga >= 992px, altrimenti mostra 3 card

        // Divide le card in gruppi per ciascuna slide
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

