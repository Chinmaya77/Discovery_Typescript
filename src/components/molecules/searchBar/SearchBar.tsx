import React from "react";
import Image from "../../atoms/image/Image";
import Input from "../../atoms/input/Input";
import "./style.css";

function SearchBar() {
  return (
    <div className="searchbar-container">
      <Input
        placeHolder="Search for a Show, episodes, shorts etc."
        classType="search"
      ></Input>

      <Image source="icon_search_white.png" imgBorder="imgsearch"></Image>
    </div>
  );
}

export default SearchBar;
