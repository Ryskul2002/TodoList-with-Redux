import React from "react";

// Local dependecies
import './search.css'

export default function Search() {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="search todo" />
      <div className="search__btns">
        <button className="search__btn btn btn-warning" type="button">
          All
        </button>
        <button className="search__btn" type="button">
          Avtive
        </button>
        <button className="search__btn" type="button">
          Done
        </button>
      </div>
    </div>
  );
}
