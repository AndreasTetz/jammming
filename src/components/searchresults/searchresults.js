import React from "react";
import "./searchresults.styles.css";
import TrackList from "../tracklist/tracklist";


class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} />
            </div>
        )
    }
}

export default SearchResults;