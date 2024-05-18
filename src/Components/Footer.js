import "../Style/Footer.scss"

function Footer(){
    return(
        <>
            <div className="all-footer">
                <div className="footer">
                    <div className="footer_up">
                        <div className="footer_left">
                            <img src="https://placehold.co/105x20" alt="Title"/>
                        </div>

                        <div className="grid-container">
                            <a href="#" className="grid-item">NEWS </a>
                            <a href="#" className="grid-item">LIFE</a>
                            <a href="#" className="grid-item">SHOPPING</a>
                            <a href="#" className="grid-item">POLITICS</a>
                            <a href="#" className="grid-item">VOICES</a>
                            <a href="#" className="grid-item">NEWSLETTERS</a>
                            <a href="#" className="grid-item">ENTERTAINMENT</a>
                            <a href="#" className="grid-item">HUFFPOST PERSONAL</a>
                        </div>
                    </div>
                    <div className="secondary-grid-container">
                        <a href="#" className="grid-item1">ABOUT US </a>
                        <a href="#" className="grid-item1">CONTACT US</a>
                        <a href="#" className="grid-item1">FAQ</a>
                        <a href="#" className="grid-item1">USER AGREEMENT</a>
                        <a href="#" className="grid-item1">DMCA POLICY</a>
                        <a href="#" className="grid-item1">ACCESSIBILITY STATEMENT</a>
                        <a href="#" className="grid-item1">CONSENT PREFERENCES</a>
                        <a href="#" className="grid-item1">ADVERTISE</a>
                        <a href="#" className="grid-item1">RSS</a>
                        <a href="#" className="grid-item1">CAREERS</a>
                        <a href="#" className="grid-item1">COMMENT POLICY</a>
                        <a href="#" className="grid-item1">HUFFPOST PRESS ROOM</a>
                        <a href="#" className="grid-item1">PRIVACY POLICY</a>
                        <a href="#" className="grid-item1">MANAGE PREFERENCES</a>
                    </div>
                </div>
                <div className="last_items">
                    <div className="Copyright">Part of HuffPost News</div>
                    <div className="branding_legal align-right">The HuffPost</div>
                </div>
            </div>
        </>
    );
}

export default Footer;