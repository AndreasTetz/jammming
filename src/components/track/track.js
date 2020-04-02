import React from "react";
import "./track.styles.css";

class Track extends React.Component {
    constructor(props) {
        super(props)

        this.renderAction = this.renderAction.bind(this);
        this.addTrack = this.addTrack.bind(this);

    }

    renderAction() {
        let button = {};
        this.props.isRemoval ?
            button = { content: "-", action: this.removeTrack } :
            button = { content: "+", action: this.addTrack };
        return (
            <button className="Track-action" onClick={button.action}>{button.content}</button>
        )
    }

    addTrack = () => {
        this.props.onAdd(this.props.track);
    }

    removeTrack = () => {
        this.props.onRemove(this.props.track);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;