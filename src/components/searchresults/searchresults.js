import React from "react";
import "./searchresults.styles.css";
import TrackList from "../tracklist/tracklist";


class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList
                    tracks={this.props.searchResults}
                    onAdd={this.props.onAdd}
                    isRemoval={false}
                />
            </div>
        )
    }
}

export default SearchResults;