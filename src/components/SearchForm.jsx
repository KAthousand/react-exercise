import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  const { search, setSearch } = props;

  return (
    <form className="search-form">
      <label htmlFor="Search"></label>
      <input
        className="search-input"
        name="Search"
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
