import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SketchPicker } from "react-color";

const RenderPrettyWords = (props) => {
  const [word, setWord] = useState("");
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleTextColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    alert("AND NOW THE MAGIC HAPPENS!");
    navigate(`/PrettyText/${word}/${color}/${bgColor}`);
  };

  return (
    <>
      <div className="container">
        <p className="pageTitle">ENTER A WORD AND PICK SOME COLORS!</p>
        <form onSubmit={submitHandler}>
          <div className="input-row">
            <input
              id="word"
              value={word}
              type="text"
              placeholder="Enter a Word"
              onChange={(e) => setWord(e.target.value)}
            />
            <input
              value={color}
              id="textColor"
              type="text"
              placeholder="Select Text Color"
              onChange={handleTextColorChange}
              // onChange={(e) => setTextColor(e.target.value)}
            />
            <input
              value={bgColor}
              id="bgColor"
              type="text"
              placeholder="Select Background Color"
              onChange={handleBgColorChange}
              // onChange={(e) => setBgColor(e.target.value)}
            />
            <button className="submit">SUBMIT</button>
          </div>
        </form>
      </div>
      <div>
        <Link to="/CHOICES">
          <button type="button" className="home">
            BACK
          </button>
        </Link>
      </div>
    </>
  );
};

export default RenderPrettyWords;
