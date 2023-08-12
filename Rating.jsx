// Rating.jsx
import React, { useState } from "react";
import "./index.css";
import starIcon from "./images/icon-star.svg";

function Rating({ handleChangeState, handleGetRating }) {
  const [rating, setRating] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    handleGetRating(rating);
    handleChangeState();
  }

  return (
    <div className="box-containner">
      <div className="star-component">
        <img src={starIcon} alt="Star Icon" />
      </div>
      <div className="seperator"></div>
      <div className="main-text">How did we do?</div>
      <p className="sub-text">
        Please let us know how we did with your support <br></br>request. All feedback is
        appreciated to help us <br></br> improve our offering!
      </p>

      <div className="rating">
        <button
          className={`star-button ${rating === 1 ? "active" : ""}`}
          onClick={() => setRating(1)}
        >
          1
        </button>
        <button
          className={`star-button ${rating === 2 ? "active" : ""}`}
          onClick={() => setRating(2)}
        >
          2
        </button>
        <button
          className={`star-button ${rating === 3 ? "active" : ""}`}
          onClick={() => setRating(3)}
        >
          3
        </button>
        <button
          className={`star-button ${rating === 4 ? "active" : ""}`}
          onClick={() => setRating(4)}
        >
          4
        </button>
        <button
          className={`star-button ${rating === 5 ? "active" : ""}`}
          onClick={() => setRating(5)}
        >
          5
        </button>
      </div>
        <div className="seperator"></div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Rating;
