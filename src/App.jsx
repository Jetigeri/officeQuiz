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
  const [isClicked, setIsClicked] = useState(false)
  const [points, setPoints] = useState(0)

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
      setNames(res.data.data.sort(() => Math.random() - 0.5));
      setIsLoading(false);
    };
    fetchNames();

    setIsClicked(false)
  }, [posts[currentPost]])

if(currentPost === 10) {
  return <div>congratulations you have {points} points</div>
}


  return (
    <div className="container">
      <h1 className="display-1 text-center gray mb-5" style={{ color: "grey" }}>
        The Office Quiz Game
      </h1>
      <h6>{`Question ${currentPost + 1} out of ${posts.length}`}</h6>
      <Posts
        posts={posts}
        isLoading={isLoading}
        currentPost={currentPost}
      ></Posts>
      <Names
        posts={posts}
        names={names}
        currentPost={currentPost}
        setCurrentPost={setCurrentPost}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        setPoints={setPoints}
      ></Names>
    </div>
  );
}

export default App;
