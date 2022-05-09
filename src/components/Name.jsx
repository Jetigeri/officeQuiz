import React from "react";
import "./Name.css";

const Name = ({
  choice,
  setTrueClicked,
  trueClicked,
  posts,
  currentPost,
  setCurrentPost,
  setPoints,
  falseClicked,
  setFalseClicked,
}) => {
  return (
    <div>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (choice._id === posts[currentPost]?.character._id) {
            setTrueClicked(true);
            setPoints((prevPoints) => prevPoints + 1);
            console.log(choice, "its true");
          } else {
            setFalseClicked(true);
            console.log("false");
          }
          setTimeout(() => {
            setCurrentPost((prevPost) => prevPost + 1);
          }, 3000);
        }}
        className={`${
          choice._id === posts[currentPost]?.character._id && trueClicked
            ? "correct"
            : ""
        } ${
          choice._id !== posts[currentPost]?.character._id && falseClicked
            ? "incorrect"
            : ""
        }`}
      >
        {choice.firstname} {choice.lastname}
      </p>
    </div>
  );
};

export default Name;
