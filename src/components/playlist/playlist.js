import React from "react";
import "./playlist.styles.css";
import TrackList from "../tracklist/tracklist"


class PlayList extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"} />
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList;