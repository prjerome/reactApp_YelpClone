import React from 'react';
import './SearchBar.css';



class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.getSortByClass = this.getSortByClass.bind(this);
        this.state = {
            term:"",
            location:"",
            sortBy: "best_match"
        };
         this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count",
           };
    }

    getSortByClass(sortByOption) {
      if(sortByOption) {
        return "SearchBar-sort-options li:hover";
      }
      else if (!sortByOption) {
          return "SearchBar-sort-options";
      }
    }

    
    renderSortByOptions() {
            Object.keys(this.sortByOptions).map(
                sortByOptionKey => {
                    let sortByOptionValue = this.sortByOptions.sortByOptionKey;
                  return <li key={sortByOptionValue}>{sortByOptionKey}</li>
                })
    }

    render() {
        return(
            <div className="SearchBar">
                <div className={this.getSortByClass()}>
                        <ul onMouseOver={this.getSortByClass}>
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
