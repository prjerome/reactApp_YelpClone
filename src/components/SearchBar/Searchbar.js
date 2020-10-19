import React from 'react';
import './SearchBar.css';

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