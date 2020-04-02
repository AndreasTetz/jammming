import React from "react";
import "./searchbar.styles.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ""
        }
    }

    search = () => {
        this.props.onSearch(this.state.term)
    }

    handleChange = event => {
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleChange} />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;