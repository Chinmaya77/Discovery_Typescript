import React from "react";
import Image from "../../atoms/image/Image";
import Text from "../../atoms/text/Text";
import "./style.css";

interface CategoryInfoProps {
  source: string;
  content: string;
}

function CategoryInfo(props: CategoryInfoProps) {
  const { source, content } = props;
  return (
    <div className="category-info">
      <Image
        source={source}
        width="200"
        height="120"
        imgBorder="category-img"
      ></Image>
      <div className="category-text">
        <Text type="text-category" content={content}></Text>
      </div>
    </div>
  );
}

export default CategoryInfo;
