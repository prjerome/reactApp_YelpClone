import React from 'react';
import './SearchBar.css';
import ReactDOM from 'react-dom';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
   }

<<<<<<< HEAD
//API docs https://www.yelp.com/developers/documentation/v3/business_search

const searchBusinessInput = //optional. get value from user input into 'search Businesses' searchbar eg document.querySelector 'input[name="searchBusinessInput"']

const whereInput = //required. get value from user input into 'where' searchbar eg document.querySelector 'input[name="whereInput"']

const sortByClick = //optional. get value from user click on link 'best match', 'highest rated' or 'most reviewed'. Get value using event handler onclick. Then e.target.value.

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
   }

/*const queryString = `searchBusinessInput=${term}` + `location=${whereInput}` + `sort_By={sortByIOptions[0, 1 || 2]}`; */

const url = 'https://api.yelp.com/v3/businesses/search' + queryString;

const response = fetch (url, sortByOptions);

class Searchbar extends React.Component {
    renderSortByOptions() {
        return(
            <div>
                <li id="Best Match">{sortByOptions["Best Match"]}</li>        
                <li id="Highest Rated">{sortByOptions["Highest Rated"] }</li>
                <li id="Most Reviewed">{sortByOptions["Most Reviewed"] }</li>
            </div>
            
        
    }
}
=======
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
>>>>>>> codecademy_instructions
