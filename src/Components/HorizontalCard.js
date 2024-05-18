import React, {Component} from "react";
import "../Style/HorizontalCard.scss"
class HorizontalCard extends Component {
    render() {
        return (
            <div className="article-card">
                <div className="art_img">
                    <img src={this.props.immagine} alt="card-img"/>
                </div>
                <div className="article-details">
                    <h5 className="card-title">{this.props.title}</h5>
                </div>
            </div>
        );
    }
}
export default HorizontalCard