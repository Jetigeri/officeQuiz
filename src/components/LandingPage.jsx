import React, { useState } from "react";
import Header from "./Header";

const LandingPage = ({setGameStarted}) => {
  const [style, setStyle] = useState({ transform: `rotate(0deg)` });
  let randomNr =
    Math.ceil(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);

  return (
    <div>
      <h3 className="display-5 mt-5">Welcome to the</h3>
      <Header />
      <div className="container">
        <h1 className="pt-5">These are the rules:</h1>
        <h5 className="mb-5">
          <ul>
            <li>You get 10 quotes from the show "The Office"</li>
            <li>You have to guess, who the quote is from</li>
            <li>You get to choose between 4 possible solutions</li>
            <li>For each correct answer you get 1 point</li>
          </ul>
        </h5>
        <div className="btn-container text-center">
          <h1>Got it?</h1>

          <button
            onMouseEnter={() =>
              setStyle({ transform: `rotate(${randomNr}deg)` })
            }
            onMouseLeave={() => setStyle({ transform: "rotate(0deg)" })}
            style={style}
            className="main-btn display-5"
            onClick={() => setGameStarted(true)}
          >
            Let's go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
