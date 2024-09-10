import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RenderNumber = (props) => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    alert("NOW WATCH THE MAGIC!");
    navigate(`/DisplayWordOrNumber/${value}`);
  };

  return (
    <div>
      <div className="container">
        <p className="pageTitle">SUBMIT A NUMBER AND WATCH THE MAGIC!</p>
        <form onSubmit={submitHandler}>
          <input
            id="number"
            type="text"
            placeholder="Enter a Number"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="submit">SUBMIT</button>
        </form>
      </div>
      <div>
        <Link to="/Choices">
          <button type="button" className="home">
            BACK
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RenderNumber;
