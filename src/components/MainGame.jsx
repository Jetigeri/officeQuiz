import "../App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

import Posts from "./Posts";
import Names from "./Names";
import Header from "./Header";

const MainGame = ({
  gameEnded,
  setGameEnded,
  setCurrentPost,
  currentPost,
  points,
  setPoints,
}) => {
  const [posts, setPosts] = useState([]);
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const serverResponse = axios.get("https://www.officeapi.dev/api/quotes/");
      const res = await serverResponse;
      serverResponse.catch((error) => console.log(error, "this is error"));
      setPosts(res.data.data.sort(() => Math.random() - 0.5).slice(0, 10));
      setIsLoading(false);
    };
    setGameEnded(false);
    fetchPosts();
  }, [gameEnded]);

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

  return (
    <div className="container">
        <Header></Header>
      <h6 className="mb-3">{`Question ${currentPost + 1} out of ${
        posts.length
      }`}</h6>
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
          points={points}
        ></Names>
      </div>
    </div>
  );
};

export default MainGame;
