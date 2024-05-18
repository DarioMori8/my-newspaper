import React, { useState, useEffect } from "react";

function SecondaryNavBar() {
    const [navbarLayout, setNavbarLayout] = useState('horizontal');
    const [isScrolled, setIsScrolled] = useState(false);

    // Definisci una funzione per gestire il ridimensionamento della finestra
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleResize = () => {
        if (window.innerWidth < 605) {
            setNavbarLayout('vertical');
        } else if(window.innerWidth < 768) {
            setNavbarLayout('partial-vertical');
        } else if(window.innerWidth < 1024)
            setNavbarLayout('partial-horizontal');
        else
            setNavbarLayout('horizontal');
    };

    // Funzione per gestire lo scroll
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        if (navbarLayout === 'horizontal' ) {
            if (window.scrollY > 380) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        } else {
            setIsScrolled(false);
        }
    }


    // Utilizza useEffect per aggiungere un listener all'evento di ridimensionamento della finestra
    useEffect(() => {
        // Aggiungi il listener all'evento di ridimensionamento della finestra
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        // Rimuovi il listener quando il componente viene smontato per evitare memory leak
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, handleResize]);

    return (
        <>
        <div className={`subnav ${isScrolled ? "fixed-subnav" : ""}`}>
            <div className="subnav" >
                {isScrolled ? (
                    <>
                        <div className="logo-and-button">
                            <div className="navbar-brand">
                                <button className="menu-button">
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </button>
                            </div>
                            <div className="title-symbol-container">
                                <img src="https://placehold.co/30x25" alt="Web page" className="title-symbol"/>
                            </div>
                        </div>
                    </>
                ) : (
                    <div></div>)}
                <div className="subnav__content js-cet-subunit align-items-center">
                    <div className="subnav-items js-cet-subunit">
                        <a className="subnav__item" href="/news/">
                            NEWS
                        </a>
                        <a className="subnav__item" href="/politics/">
                            POLITICS
                        </a>
                        <a className="subnav__item" href="/entertainment/">
                            ENTERTAINMENT
                        </a>
                        <a className="subnav__item" href="/life/">
                            LIFE
                        </a>
                        <a className="subnav__item" href="/personal/">
                            PERSONAL
                        </a>
                        <a className="subnav__item" href="/voices/">
                            VOICES
                        </a>
                        <a className="subnav__item" href="/shopping/">
                            SHOPPING
                        </a>
                        <a
                            className="subnav__item"
                            href="https://www.huffpost.com/pyramid-scheme"
                        >
                            🏆 PLAY PYRAMID SCHEME 🏆
                        </a>
                    </div>
                </div>

            <div className="subnav_button">
                {isScrolled ? (
                        <button className="right-aligned-btn ">Support us</button>
                ) : (
                    <button type="button" className="btn1">
                    U.S Edition
                    </button>
                )}
            </div>
        </div>
    </div>
        </>

    );
}

export default SecondaryNavBar;
