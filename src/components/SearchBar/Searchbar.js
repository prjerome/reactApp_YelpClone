import React from 'react';
import './SearchBar.css';

class Searchbar extends React.Component {
    render(
        return(
            <input name="whereInput" />
            <input name="searchBusinessInput" />
        )
    )
}

//API docs https://www.yelp.com/developers/documentation/v3/business_search

const searchBusinessInput = //optional. get value from user input into 'search Businesses' searchbar eg document.querySelector 'input[name="searchBusinessInput"']

const whereInput = //required. get value from user input into 'where' searchbar eg document.querySelector 'input[name="whereInput"']

const sortByClick = //optional. get value from user click on link 'best match', 'highest rated' or 'most reviewed'. Get value using event handler onclick. Then e.target.value.

const queryString = `searchBusinessInput=${term}` + `location=${whereInput}` + `sort_By=${sortByClick}`;

const url = 'https://api.yelp.com/v3/businesses/search' + queryString;


const sortByOptions = {
    method: 'GET',  
  }

const response = fetch (url, sortByOptions);
