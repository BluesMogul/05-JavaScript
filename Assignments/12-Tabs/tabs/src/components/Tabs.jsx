import { useState } from "react";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            TAB 1
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            TAB 2
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            TAB 3
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h2>TAB 1 HEADER</h2>
            <p>This is the content for Tab 1.</p>
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <h2>TAB 2 HEADER</h2>
            <p>This is the content for Tab 2.</p>
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <h2>TAB 3 HEADER</h2>
            <p>This is the content for Tab 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
