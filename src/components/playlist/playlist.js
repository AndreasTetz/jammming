import React from "react";
import "./playlist.styles.css";
import TrackList from "../tracklist/tracklist"


class PlayList extends React.Component {

    handleNameChange = (event) => {
        this.props.onNameChange(event.target.value)
    }


    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
                <TrackList
                    tracks={this.props.tracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                />
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList;