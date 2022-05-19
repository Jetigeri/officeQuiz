import "./App.css";

import React, { useState } from "react";

import Header from "./components/Header.jsx";
import LandingPage from "./components/LandingPage";
import GameEnd from "./components/GameEnd";
import MainGame from "./components/MainGame";

const GAME_OVER = 10;

function App() {
  const [currentPost, setCurrentPost] = useState(0);
  const [points, setPoints] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const resetPostsAndPoints = () => {
    setCurrentPost(0);
    setPoints(0);
    setGameEnded(true);
  };

  if (currentPost === GAME_OVER) {
    return (
      <GameEnd
        resetPostsAndPoints={resetPostsAndPoints}
        points={points}
      ></GameEnd>
    );
  }

  if (gameStarted) {
    return (
      <MainGame
        gameEnded={gameEnded}
        setGameEnded={setGameEnded}
        currentPost={currentPost}
        setCurrentPost={setCurrentPost}
        points={points}
        setPoints={setPoints}
      ></MainGame>
    );
  }

  return (
    <div className="container">
      <LandingPage setGameStarted={setGameStarted}></LandingPage>
      {/* <MainGame
        gameEnded={gameEnded}
        setGameEnded={setGameEnded}
        currentPost={currentPost}
        setCurrentPost={setCurrentPost}
        points={points}
        setPoints={setPoints}
      ></MainGame> */}
    </div>
  );
}

export default App;
