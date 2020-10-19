import React from 'react';
import './SearchBar.css';
import ReactDOM from 'react-dom';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
   }

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
    }
    
    renderSortByOptions() {
            Object.keys(sortByOptions).map(
                sortByOptionKey => {
                    let sortByOptionValue = sortByOptions.sortByOptionKey;
                  return <li key={sortByOptionValue}>{sortByOptionKey}</li>
                })
    }

    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                        <ul>
                            {this.renderSortByOptions()};
                        </ul>
                    </div>
                        <div className="SearchBar-fields">
                            <input placeholder="Search Businesses" />
                            <input placeholder="Where?" />
                        </div>
                    <div className="SearchBar-submit">
                        <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default Searchbar;
