import React, {Component} from "react";
class CardPage extends Component {
    render() {
        return (

            <div className="col">
                <div className="card" style={{width: '10rem', height:'auto', textAlign: 'center', background: 'black'}}>
                    <img src={this.props.immagine} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{color:'white'}}> {this.props.title}</h5>
                        <p className="card-text" style={{color:'white', fontSize:"0.6rem"}}>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardPage