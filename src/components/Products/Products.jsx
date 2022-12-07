import React, { Fragment, useState } from "react";
import jsonData from "../../utils/data.json";
import classes from "./Product.module.css";
import ProductFilter from "./ProductFilter";
import ProductItems from "./ProductItems";

function Products() {
  const [filteredCategory, setFilteredCategory] = useState("");
  const [showProducts, setShowProducts] = useState(true);

  const filterChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
    setShowProducts(false);
  };
  const filteredCategoryHandler = jsonData.filter((data) => {
    return data.category === filteredCategory;
  });

  return (
    <Fragment>
      <ProductFilter
        selected={filteredCategory}
        onChangeFilter={filterChangeHandler}
      />
      <div className={classes.products}>
        {showProducts &&
          jsonData.map((data) => (
            <div className={classes.product} key={data.id}>
              <ProductItems
                id={data.id}
                img={data.img}
                title={data.name}
                price={data.price}
                vendor={data.vendor}
                available={data.available}
              />
            </div>
          ))}

        {filteredCategoryHandler.map((data) => (
          <div className={classes.product} key={data.id}>
            <ProductItems
              id={data.id}
              img={data.img}
              title={data.name}
              price={data.price}
              vendor={data.vendor}
              available={data.available}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Products;
