import React, {Component} from "react";
import "../Style/FinalNoticeCard.scss"
class HorizontalCard extends Component {
    render() {
        return (
            <div className="article-finalCard">
                <div className="art-img1">
                    <img className= "final-img" src={this.props.immagine} alt="card-img"/>
                </div>
                <div className="article-details">
                    <h2 className="card-argument">{this.props.argument}</h2>
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-desc">{this.props.desc}</p>
                </div>
            </div>
        );
    }
}
export default HorizontalCard