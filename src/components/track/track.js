import React from "react";
import "./track.styles.css";

class Track extends React.Component {
    renderArction() {
        let buttonContent
        /*isRemoval*/false ? buttonContent = "-" : buttonContent = "+";
        return (
            <button className="Track-action">{buttonContent}</button>
        )
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.track} | {this.props.album}</p>
                </div>
                <button className="Track-action">{/* + or - will go here */} </button>
            </div>
        )
    }
}

export default Track;