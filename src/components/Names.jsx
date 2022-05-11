import React, { useState, useEffect } from "react";

import Name from "./Name";

const Names = ({
  names,

  currentPost,
  setCurrentPost,
  isClicked,
  setIsClicked,
  setPoints,
  solution,
}) => {
  const newNames = names.map((name) => {
    return { ...name, falseClicked: false };
  });

  return (
    <div>
      {newNames.map((choice) => (
        <Name
          key={Math.random()}
          solution={solution}
          choice={choice}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          setPoints={setPoints}
        ></Name>
      ))}
    </div>
  );
};

export default Names;
