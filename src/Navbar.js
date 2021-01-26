import React from "react";
import "./REACT.css";

function Navbar(props) {
  return (
    <div className="top">
      <ol className="top-list">
        <li>
          <img
            alt=""
            className="top-icon"
            src="https://www.flaticon.com/premium-icon/icons/svg/3223/3223044.svg"
          />
        </li>
        <li className="search-bar">
          <input className="inputt" />
          <button className="btn">
            SEARCH
            <img
              alt=""
              src="https://www.flaticon.com/svg/vstatic/svg/639/639375.svg?token=exp=1611570745~hmac=d1f3f5edce623e46b58be9e415a64505"
            />
          </button>
        </li>
      </ol>
    </div>
  );
}
export default Navbar;
