import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PrettyText = () => {
  const { word, color, bgColor } = useParams();

  const style = {
    color: color,
    backgroundColor: bgColor,
    padding: "10px",
  };

  return (
    <>
      <div className="container">
        <p className="displayResults">Your Word/Color Combo Was</p>
        <p className="coloredText" style={style}>
          {word}
        </p>
        <p className="displayResults">Nice Choice!</p>
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

export default PrettyText;
