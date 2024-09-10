import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RenderWord = (props) => {
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
        <p className="pageTitle">SUBMIT A WORD AND BE AMAZED!</p>
        <form onSubmit={submitHandler}>
          <input
            id="word"
            type="text"
            placeholder="Enter a Word"
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

export default RenderWord;
