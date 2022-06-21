import React from "react";
import "./Search.css";

const Search = ({
  searchYear,
  setSearchYear,
  searchCategory,
  setSearchCategory,
  searchPrice,
  setSearchPrice,

}) => {
  return (
    <div className="Search__page">
      <form className="Search__category_div">
        <label>Category filter</label>
        <input
          name="search"
          list="category"
          value={searchCategory}
          className="form-control me-sm-2"
          type="text"
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <datalist id="category">
          <option value="toyota" />
          <option value="mercedes" />
          <option value="bmw" />
          <option value="audi" />
          <option value="nissan" />
          <option value="fiat" />
          <option value="mitsubishi" />
          <option value="volkswagen" />
          <option value="Diğer" />
        </datalist>
      </form>
      <div className="Search__price_div">
        <label>Price</label>
        <input
          name="search"
          value={searchPrice}
          className="form-control me-sm-2"
          type="text"
          onChange={(e) => setSearchPrice(e.target.value)}
        />
      </div>
      <div className="Search__title_div">
        <label>Year</label>
        <input
          name="search"
          value={searchYear}
          className="form-control me-sm-2"
          type="text"
          onChange={(e) => setSearchYear(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
