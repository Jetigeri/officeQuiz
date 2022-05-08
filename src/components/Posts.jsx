import React from "react";

const Posts = ({ posts, isLoading, currentPost }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h4>{posts[currentPost]?.content}</h4>
    
    </div>
  );
};

export default Posts;
