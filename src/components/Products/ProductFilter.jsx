import React from "react";

import "./ProductFilter.css";

const ProductFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="category-filter">
      <div className="category-filter__control">
        <label>Filter by Category</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option selected value>
            -- select an option --
          </option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
