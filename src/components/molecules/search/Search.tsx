import React from "react";
import Button from "../../atoms/buttons/Button";
import SearchBar from "../searchBar/SearchBar";
import "./style.css";

function Search() {
  return (
    <div className="search-container">
      <SearchBar></SearchBar>
      <Button type="button" bgColor="primary" btnName="Sign In"></Button>
    </div>
  );
}

export default Search;
