import React from "react";
import "./app.styles.css";

import SearchBar from "../searchbar/searchbar";
import SearchResults from "../searchresults/searchresults";
import PlayList from "../playlist/playlist";

class App extends React.Component {
    constructor(props) {
        super(props)
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
            ]
        };

    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults}/>
                        <PlayList />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
