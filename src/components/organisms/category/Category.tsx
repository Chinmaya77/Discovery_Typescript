import React from "react";
import CategoryInfo from "../../molecules/categoryInfo/CategoryInfo";
import "./style.css";

interface CategoryProps {
  categoryData: { image: string; text: string }[];
}

function Category(props: CategoryProps) {
  const { categoryData } = props;
  return (
    <div className="category-container">
      {categoryData.map((item, index) => {
        return (
          <CategoryInfo source={item.image} content={item.text} key={index} />
        );
      })}
    </div>
  );
}

export default Category;
