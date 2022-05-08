import React, { useState, useEffect } from "react";

import Name from "./Name";

const Names = ({
  names,
  posts,
  currentPost,
  setCurrentPost,
  isClicked,
  setIsClicked,
  setPoints,
}) => {
  const choicesNotIncludingSolution = names
    .filter((name) => name._id !== posts[currentPost]?.character._id)
    .slice(0, 3);

  const possibleChoices = [
    ...choicesNotIncludingSolution,
    {
      _id: posts[currentPost]?.character._id,
      firstname: posts[currentPost]?.character.firstname,
      lastname: posts[currentPost]?.character.lastname,
      correct: false,
    },
  ];
  

  return (
    <div>
      {possibleChoices
        .sort(() => Math.random() - 0.5)
        .map((choice) => (
          <Name
            key={Math.random()}
            choice={choice}
            setIsClicked={setIsClicked}
            isClicked={isClicked}
            posts={posts}
            currentPost={currentPost}
            setCurrentPost={setCurrentPost}
            setPoints={setPoints}
          ></Name>
        ))}
    </div>
  );
};

export default Names;
