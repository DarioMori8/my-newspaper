import React, {Component} from "react";
import '../Style/CardNotice.scss'
class CardNotice extends Component {
    render() {
        return (

            <div className="col">
                <div className="card">
                    <img src={this.props.immagine} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{color: "#635f5f"}} > {this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardNotice