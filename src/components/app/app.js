import React from "react";
import SearchBar from "../searchbar/searchbar";
import SearchResults from "../searchresults/searchresults";
import PlayList from "../playlist/playlist";
import Spotify from "../../util/Spotify";
import "./app.styles.css";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: [],
            playlistName: "New Playlist",
            playlistTracks: []
        }

    }

    addTrack = track => {
        let isNew = true;
        this.state.playlistTracks.forEach(playlistTrack => {
            if (track.id === playlistTrack.id) {
                isNew = false;
            };

        });
        if (isNew) {
            const updatedPlaylistTracks = this.state.playlistTracks;
            updatedPlaylistTracks.push(track);
            this.setState({ playlistTracks: updatedPlaylistTracks });
        }

    }

    removeTrack = track => {
        let tracks = this.state.playlistTracks;
        let filteredTracks = tracks.filter(input => input.id !== track.id);
        this.setState({ playlistTracks: filteredTracks });
    }

    updatePlaylistName = name => {
        this.setState({ playlistName: name });
    }

    savePlaylist = () => {
        const trackURIs = this.state.playlistTracks.map(track => track.uri);
        Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
            this.setState({
                playlistName: "New Playlist",
                playlistTracks: []
            })
        })
    }

    search = searchTerm => {
        Spotify.search(searchTerm).then(searchResults => {
            this.setState({ searchResults: searchResults })
        });
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar
                        onSearch={this.search}
                    />
                    <div className="App-playlist">
                        <SearchResults
                            searchResults={this.state.searchResults}
                            onAdd={this.addTrack}
                        />
                        <PlayList
                            playlistName={this.state.playlistName}
                            tracks={this.state.playlistTracks}
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                            onSave={this.savePlaylist}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
