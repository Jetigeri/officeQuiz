import React, { useRef, useState } from "react";
import "./Name.css";

const Name = ({
  choice,
  setCurrentPost,
  setPoints,
}) => {
  const [style, setStyle] = useState({ transform: `rotate(0deg)` });
  const [choiceClass, setChoiceClass] = useState("choice")

  const answer = useRef();

  let randomNr =
    Math.ceil(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);

  const clickHandler = (e) => {
    if (choice.isCorrect) {
      console.log("correctomondo");
      // setPoints((prevPoints) => prevPoints + 1);
      setChoiceClass("choice correct")
      // answer.current.style.backgroundColor = "green";
    }
    if (!choice.isCorrect) {
      console.log("NEM KORREKT BAZMEG")
      setChoiceClass("choice incorrect")
      // answer.current.style.backgroundColor = "red";
    }
    setTimeout(() => {
      setCurrentPost((prevPost) => prevPost + 1);
    }, 2000);
  };

  return (
    <div>
      <p
        onMouseEnter={() => setStyle({ transform: `rotate(${randomNr}deg)` })}
        onMouseLeave={() => setStyle({ transform: "rotate(0deg)" })}
        style={style}
        onClick={(e) => clickHandler(e)}
        ref={answer}
        className={`${choiceClass}`}
      >
        {choice.firstname} {choice.lastname}
      </p>
    </div>
  );
};

export default Name;
