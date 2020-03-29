import React from "react";
import "./tracklist.styles.css";

import Track from "../track/track";


class TrackList extends React.Component {
    render() {
        
        return (
            <div className="TrackList">
                {
                this.props.tracks.map(track => {
                       return <Track name={track.name} artist={track.artist} album={track.album} id={track.id} />
                })
                }
            </div>
        );
    }
};

export default TrackList;