import React from 'react';
import './SearchBar.css';



class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.getSortByClass = this.getSortByClass.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            term:"",
            location:"",
            sortBy: "best_match",
            where: "Where?",
            searchBusinesses:"Search Businesses"
        };
         this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count",
           };
    }

    getSortByClass(sortByOption) {
      if(sortByOption===this.state.sortBy) {
        return "active";
      }
      else  {
          return "";
      }
    }

    handleSortByChange(sortByOptionValue) {
        this.setState({
            sortBy: sortByOptionValue
        })
    }

    handleTermChange(e) {
        this.setState({
            term: e.target.value
        })
    }

   handleLocationChange(e) {
        this.setState({
            location: e.target.value
        })
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    
    renderSortByOptions() {
            Object.keys(this.sortByOptions).map(
                sortByOptionKey => {
                    let sortByOptionValue = this.sortByOptions.sortByOptionKey;
                  return <li onClick={this.handleSortByChange.bind(this,sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOptionKey}</li>
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
                            <input onChange={this.handleTermChange} placeholder={this.state.searchBusinesses} />
                            <input onChange={this.handleLocationChange} placeholder={this.state.where} />
                        </div>
                    <div className="SearchBar-submit">
                        <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default Searchbar;
