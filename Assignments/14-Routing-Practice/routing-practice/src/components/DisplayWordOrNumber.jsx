import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const DisplayWordOrNumber = () => {
  const { value } = useParams();

  return (
    <>
      <div className="container">
        {isNaN(value) ? (
          <span>
            <p className="displayResults"> The Word You Entered Was </p>
            <p className="variableText">&#x2014; {value} &#x2014;</p>
            <p className="displayResults">ARE YOU NOT AMAZED?!!</p>
          </span>
        ) : (
          <span>
            <p className="displayResults"> The Number You Entered Was </p>
            <p className="variableText">&#x2014; {value} &#x2014;</p>
            <p className="displayResults">TA-DAAAAAAAAH!!</p>
          </span>
        )}
      </div>
      <div>
        <div>
          <Link to="/Choices">
            <button type="button" className="home">
              BACK
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DisplayWordOrNumber;
