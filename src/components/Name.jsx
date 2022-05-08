import React from "react";
import "./Name.css";

const Name = ({
  choice,
  setIsClicked,
  isClicked,
  posts,
  currentPost,
  setCurrentPost,
  setPoints,
}) => {
  return (
    <div>
      <p
        onClick={() => {
          if (choice._id === posts[currentPost]?.character._id) {
            setIsClicked(true);
            setPoints((prevPoints) => prevPoints + 1);
            console.log(choice, "its true");
            setTimeout(() => {
              setCurrentPost((prevPost) => prevPost + 1);
            }, 3000);
          } else alert("YOU ASS!!!😡");
        }}
        className={`${
          choice._id === posts[currentPost]?.character._id && isClicked
            ? "correct"
            : ""
        }`}
      >
        {choice.firstname} {choice.lastname}
      </p>
    </div>
  );
};

export default Name;
