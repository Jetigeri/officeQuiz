import React from "react";

const Posts = ({ posts, isLoading, currentPost }) => {
  if (isLoading) {
    return (
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <h4 className="mb-5">{posts[currentPost]?.content}</h4>
    </div>
  );
};

export default Posts;
