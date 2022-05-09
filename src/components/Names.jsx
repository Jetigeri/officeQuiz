import React, { useState, useEffect } from "react";

import Name from "./Name";

const Names = ({
  names,
  posts,
  currentPost,
  setCurrentPost,
  trueClicked,
  setTrueClicked,
  setPoints,
  falseClicked,
  setFalseClicked
}) => {

  return (
    <div>
      {names
        .map((choice) => (
          <Name
            key={Math.random()}
            choice={choice}
            setTrueClicked={setTrueClicked}
            trueClicked={trueClicked}
            setFalseClicked={setFalseClicked}
            falseClicked={falseClicked}
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
