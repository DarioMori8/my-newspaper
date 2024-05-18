import React from "react";

function FrontPageTop(){
    return(
        <div className="top-container">
            <section className="splash js-cet-subunit">
                <div className="splash__content  js-card">
                    <a className="splash__headline__link js-card"
                       href="https://www.huffpost.com/entry/donald-trump-hush-money-trial-week-3-live-updates_n_662c149be4b0ab66ede49d55/">TRUMP
                        TRIAL: Texts Revealed In Court, Three New Witnesses Take The Stand...</a>
                </div>
                <div className="splash__content1  js-card">
                    <a className="splash__headline__link1 js-card"
                       href="https://www.huffpost.com/entry/donald-trump-hush-money-trial-week-3-live-updates_n_662c149be4b0ab66ede49d55/">COLUMBIA
                        SENDS IN THE COPS</a>
                </div>
                <div className="splash__content2  js-card">
                    <a className="splash__headline__link2 js-card"
                       href="https://www.huffpost.com/entry/donald-trump-hush-money-trial-week-3-live-updates_n_662c149be4b0ab66ede49d55/">HUNDREDS
                        SWARM CAMPUS</a>
                </div>
                <div className="splash__content3 ">
                    <picture>
                        <img className="headline-image__img img img--inline landscape" alt="Biden"
                             src="https://placehold.co/645x360"/>
                    </picture>
                </div>
            </section>
        </div>

    );
}

export default FrontPageTop;