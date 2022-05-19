import React from "react"

const GameEnd = ({resetPostsAndPoints, points}) => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle text-center">
        <h4>Congratulations you got </h4>
        <h2 className="mb-5">{points} points</h2>
        <div>
          <h4>Would you like to play again?</h4>
          <div className="btn-container">
            <button className="choice" onClick={() => resetPostsAndPoints()}>
              Yes.
            </button>
            <a href="http://google.com"><button className="choice">Nope.</button></a>
          </div>
        </div>
      </div>
    )
}

export default GameEnd