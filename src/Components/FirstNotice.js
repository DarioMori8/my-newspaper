
import React, {Component} from "react";
import NewsCarousel from "./NewsCarousel";
class FirstNotice extends Component {
    render() {

        return (
            <>
                <div className="container-fluid">
                    <div className="container text-center">
                        <NewsCarousel/>
                    </div>
                </div>

            </>

        );
    }
}
export default FirstNotice;