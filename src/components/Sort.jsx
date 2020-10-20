import React from "react";
import "./Sort.css";

function Sort(props) {
  const { sort, setSort } = props;
  const handleChange = (e) => {
    e.preventDefault();
    setSort(e.target.value);
    console.log(sort);
  };
  //  on submit in form call props.handleSubmit
  // being passed from products

  return (
    <form className="sort-container">
      <label htmlFor="sort">SORT BY:</label>
      <select className="sort" onChange={handleChange}>
        <option className="option" value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option className="option" value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
        <option className="option" value="price-ascending">
          &nbsp; Price, low to high &nbsp;
        </option>
        <option className="option" value="price-descending">
          &nbsp; Price, high to low &nbsp;
        </option>
      </select>
    </form>
  );
}

export default Sort;
