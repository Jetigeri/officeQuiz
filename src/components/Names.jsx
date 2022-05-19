import React, {useState} from "react";

import Name from "./Name";

const Names = ({
  names,
  currentPost,
  setCurrentPost,
  points,
  setPoints,
 

}) => {
  const [correctAnswer, setCorrectAnswer] = useState()


  const newNames = names.map((name) => {
    return { ...name, falseClicked: false };
  });



  return (
    <div>
      {newNames.map((choice) => (
        <Name
          key={Math.random()}
          choice={choice}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          setPoints={setPoints}
       
          points={points}
        
        ></Name>
      ))}
    </div>
  );
};

export default Names;
