import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

import Posts from "./components/Posts";
import Names from "./components/Names";
import Modal from "./components/Modal.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const res = await axios.get("https://www.officeapi.dev/api/quotes/");
      setPosts(res.data.data.sort(() => Math.random() - 0.5).slice(0, 10));
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchNames = async () => {
      setIsLoading(true);
      const res = await axios.get("https://www.officeapi.dev/api/characters");

      const choicesNotIncludingSolution = res.data.data
        .filter((name) => name._id !== posts[currentPost]?.character._id)
        .map((choice) => {
          return { ...choice, isCorrect: false };
        })
        .slice(0, 3);

      const possibleChoices = [
        ...choicesNotIncludingSolution,
        {
          _id: posts[currentPost]?.character._id,
          firstname: posts[currentPost]?.character.firstname,
          lastname: posts[currentPost]?.character.lastname,
          isCorrect: true,
        },
      ];

      setNames(possibleChoices.sort(() => Math.random() - 0.5));
      setIsLoading(false);
    };
    fetchNames();


  }, [posts[currentPost]]);

  if (currentPost === 10) {
    return (
      <div>
        <h4>congratulations you have {points} points</h4>
        <div>
          <h4>Would you like to play again?</h4>
          <div>
            <button onClick={() => setCurrentPost(0)}>Yes.</button>
            <button>Nope.</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header-container">
        <h1 className="display-1 text-center mb-5">The Office Quiz Game</h1>
      </div>
      <h6 className="mb-3">{`Question ${currentPost + 1} out of ${posts.length}`}</h6>
      <div>
        <Posts
          posts={posts}
          isLoading={isLoading}
          currentPost={currentPost}
        ></Posts>
        <Names
          names={names}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          setPoints={setPoints}
        ></Names>
      </div>
    </div>
  );
}

export default App;
