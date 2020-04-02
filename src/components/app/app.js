import React from "react";
import "./app.styles.css";

import SearchBar from "../searchbar/searchbar";
import SearchResults from "../searchresults/searchresults";
import PlayList from "../playlist/playlist";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.state = {
            searchResults: [
                {
                    name: "The Persuit Of Vikings",
                    artist: "Amon Amarth",
                    album: "Fate of Norns",
                    id: "01"

                },
                {
                    name: "Arson",
                    artist: "Amon Amarth",
                    album: "Fate of Norns",
                    id: "02"

                },
                {
                    name: "Valkyries Ride",
                    artist: "Amon Amarth",
                    album: "Fate of Norns",
                    id: "03"

                }
            ],

            playlistName: "New Playlist",
            playlistTracks: [
                {
                    name: "Ragnarok",
                    artist: "Amon Amarth",
                    album: "Fate of Norns",
                    id: "04"

                },
                {
                    name: "Mjolnirs Thunder",
                    artist: "Amon Amarth",
                    album: "Fate of Norns",
                    id: "05"

                },
                {
                    name: "Death By SnuSnu",
                    artist: "Amon Amarth",
                    album: "Fate of Norns",
                    id: "06"

                }

            ]
        };

    }

    addTrack(track) {
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

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        let filteredTracks = tracks.filter(input => input.id != track.id);
        this.setState({ playlistTracks: filteredTracks });
    }

    updatePlaylistName = name => {
        this.setState({ playlistName: name });
    }

    savePlaylist = () => {
        let trackURIs = this.state.playlistTracks.map(track => track.uri);
    }

    search = searchTerm => {
        console.log(searchTerm);
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
                            playlistTracks={this.state.playlistTracks}
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
