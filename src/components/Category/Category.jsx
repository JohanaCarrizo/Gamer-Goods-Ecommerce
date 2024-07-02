import React from "react";
import { ButtonCategory, ButtonContainer } from "./CategoriesStyles";

const Category = ({ key, name }) => {
  console.log("Category rendered:", name);
  return (
    <div>
      <ButtonCategory type="button" key={key}>
        {name}
      </ButtonCategory>
    </div>
  );
};

export default Category;
