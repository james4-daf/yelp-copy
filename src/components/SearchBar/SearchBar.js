import React from "react";
import "./SearchBar.css";
const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends React.Component {
  renderSortByOptions = () => {
    /* keys are is for e.g. Best Match
    Object.keys is an inbuilt js thing
    put the object you want as the parameter
    then map makes a new list of 
    */
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul> {this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
