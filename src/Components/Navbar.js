
import Icon_Profile from '../images/Icon_Profile.png'
import React, { useState, useEffect} from 'react';
import '../Style/NavBar.scss'

function NavBar() {

    // Definisce lo stato per gestire il layout della navbar
    const [navbarLayout, setNavbarLayout] = useState('horizontal');
    const [isScrolled, setIsScrolled] = useState(false);

    // Definisce una funzione per gestire il ridimensionamento della finestra
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
        if(navbarLayout ==='partial-horizontal'){
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }else if(navbarLayout === 'partial-vertical' || navbarLayout === 'vertical') {
            if (window.scrollY >= 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }else {
                setIsScrolled(false);
            }
        }



    // Utilizza useEffect per aggiungere un listener all'evento di ridimensionamento della finestra
    useEffect(() => {
        // Aggiunge il listener all'evento di ridimensionamento della finestra
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        handleResize();
        // Rimuove il listener quando il componente viene smontato per evitare memory leak
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, handleResize]);

    return (
        <>
        <nav className= {`navbar' ${isScrolled ? 'fixed-navbar' : ''}`}>
            {navbarLayout === 'horizontal' ? (
                <nav className="horizontal-navbar">
                    <div className="navbar-brand">
                        <button className="menu-button">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                    <div className="title-container">
                        <img src="https://placehold.co/224x40" alt="Web page" className="title-icon"/>
                    </div>
                    <div className="navbar-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                        </svg>
                        <button type="button" className="btn-dark"> Log in</button>
                        <button className="support-button">Support us</button>
                    </div>
                </nav>
            ) : navbarLayout === 'partial-vertical' ? (
                <nav className="partial-vertical-navbar d-flex">
                    <div className="navbar-brand">
                        <button className="menu-button">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                    <div className="title-container">
                        <img src="https://placehold.co/115x20" alt="Web page" className="title-icon"/>
                    </div>
                    <div className="navbar-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                             className="bi bi-bell" viewBox="0 0 16 16">
                            <path
                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                        </svg>
                        <img src={Icon_Profile} alt="Profile" className="profile-icon"/>
                        <button className="adapt-support-button">Support us</button>
                    </div>
                </nav>
            ) : navbarLayout === 'partial-horizontal' ? (
                <nav className="partial-horizontal-navbar d-flex">
                    <div className="navbar-brand">
                        <button className="menu-button">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                    <div className="title-container">
                        <img src="https://placehold.co/170x30" alt="Web page" className="title-icon"/>
                    </div>
                    <div className="navbar-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                             className="bi bi-bell" viewBox="0 0 16 16">
                            <path
                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                        </svg>
                        <button type="button" className="btn-dark"> Log in</button>
                        <button className="adapt-support-button">Support us</button>
                    </div>
                </nav>
            ) : (
                <nav className="vertical-navbar d-flex">
                    <div className="navbar-brand">
                        <button className="menu-button">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                    <div className="title-symbol-container">
                        <img src="https://placehold.co/25x20" alt="Web page" className="title-symbol"/>
                    </div>
                    <div className="navbar-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                             className="bi bi-bell" viewBox="0 0 16 16">
                            <path
                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                        </svg>
                        <img src={Icon_Profile} alt="Profile" className="profile-icon"/>
                        <button className="adapt-support-button">Support us</button>
                    </div>
                </nav>
            )}
        </nav>
        </>
    );

}

export default NavBar;


