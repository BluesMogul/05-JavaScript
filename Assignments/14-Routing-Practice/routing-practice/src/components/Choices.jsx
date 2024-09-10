import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Choices = () => {
  const SubmitHandler = () => {
    const onSubmit = (e) => {
      e.preventDefault();
    };
  };

  return (
    <div className="container">
      <p className="pageTitle">CLICK A BUTTON TO DO COOL STUFF</p>
      <Link to="/RenderNumber">
        <button className="number">NUMBER PLAY</button>
      </Link>
      <Link to="/RenderWord">
        <button className="word">WORD PLAY</button>
      </Link>
      <Link to="/RenderPrettyWords">
        <button className="pretty">PRETTY WORDS</button>
      </Link>
      <div>
        <Link to="/">
          <button type="button" className="home">
            RETURN HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Choices;
