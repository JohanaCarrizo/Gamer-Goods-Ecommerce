import React from "react";
import { useState } from "react";
import Category from "./Category";
import { data } from "../../data/data";
import "./styles.css";

const Categories = () => {

  const allCategories = [
    "All",
    ...new Set(data.map((product) => product.category)),
  ];

  const [categories] = useState(allCategories);


  return (
    <div id="container">
      {categories.map((prod) => (
        <Category key={prod} name={prod} />
      ))}
    </div>
  );
};

export default Categories;
