import React, { useState } from "react";
import AutoItem from "./AutoItem"
import Search from "../Search/Search";
import "./AutoList.css"

const AutoList = (props) => {
  const [searchYear, setSearchYear] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  if (props.items.length === 0) {
    return <h2>No expenses found</h2>;
  }

  return (
    <div className="AutoList__page">
      <div className="AutoList__search">
        <Search
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
          searchYear={searchYear}
          setSearchYear={setSearchYear}
          searchPrice={searchPrice}
          setSearchPrice={setSearchPrice}
        />
      </div>
      <div>
        {props.items
          .filter((e) =>
            e.brand
              .toLocaleLowerCase()
              .includes(searchCategory.toLocaleLowerCase())
          )
          .filter((e) =>
            e.price
              .toLocaleLowerCase()
              .includes(searchPrice.toLocaleLowerCase())
          )
          .filter((p) =>
            p.year
              .toLocaleLowerCase()
              .includes(searchYear.toLocaleLowerCase())
          )
          .map((auto) => (
            <AutoItem
              key={auto.id}
              id={auto.id}
              title={auto.title}
              imageURL={auto.imageURL}
              brand = {auto.brand}
              model={auto.model}
              year={auto.year}
              price={auto.price}
              place={auto.place}
              kilometer= {auto.kilometer}
              gearType= {auto.gearType}
              fuelType= {auto.fuelType}
              caseType= {auto.caseType}
              engineCapacity= {auto.engineCapacity}
            />
          ))}
      </div>
    </div>
  );
};

export default AutoList;
