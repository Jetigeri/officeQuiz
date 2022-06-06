import React, { useRef, useState } from "react";
import "./Name.css";

const Name = ({ choice, setCurrentPost, setPoints, points, pointsHandler }) => {
  const [style, setStyle] = useState({ transform: `rotate(0deg)` });
  const [choiceClass, setChoiceClass] = useState(null);

  const answer = useRef();

  let randomNr =
    Math.ceil(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);

  const clickHandler = (e) => {
    if (choice.isCorrect) {
      setChoiceClass("correct"); //sets class on chosen answer (works perfectly if setPoints is commented out 😡)
    }
    if (!choice.isCorrect) {
      setChoiceClass("incorrect");
      answer.current.style.pointerEvents = "none";
    }
    setTimeout(() => {
      if (choice.isCorrect) {
        setPoints((prevPoints) => prevPoints + 1); //so if i put setPoints here its working, somehow it interferes with the class
        answer.current.style.pointerEvents = "none";
      }
    }, 1000);

    setTimeout(() => {
      setCurrentPost((prevPost) => prevPost + 1);
    }, 2000);
    answer.current.style.pointerEvents = "none";
  };

  return (
    <div>
      <p
        onMouseEnter={() => setStyle({ transform: `rotate(${randomNr}deg)` })}
        onMouseLeave={() => setStyle({ transform: "rotate(0deg)" })}
        style={style}
        onClick={(e) => clickHandler(e)}
        ref={answer}
        className={`choice ${choiceClass}`}
      >
        {choice.firstname} {choice.lastname}
      </p>
    </div>
  );
};

export default Name;
