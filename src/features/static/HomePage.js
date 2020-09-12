import React from "react";
import logo from "../../logo.svg";

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Home Page</h1>
        <div>
          Check out the code{" "}
          <a href="https://github.com/TheNotary/edu-react-coding-ch-sept/blob/master/src/features/sectionA/SectionA.js#L4">
            here
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
