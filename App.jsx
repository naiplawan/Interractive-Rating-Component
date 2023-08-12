import React, { useState } from "react";
import Rating from "./Rating";
import Thankyou from "./Thankyou";
import "./index.css";

function App() {
  const [showThankyou, setShowThankyou] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);

  const handleChangeState = () => {
    setShowThankyou(true);
  };

  const handleGetRating = (rating) => {
    setRatingValue(rating);
  };

  return (
    <div className="box-containner"> 
    <div className="App">
      {showThankyou ? (
        <Thankyou rating={ratingValue} />
      ) : (
        <Rating
          handleChangeState={handleChangeState}
          handleGetRating={handleGetRating}
        />
      )}
    </div>
    <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Rachaphol Plookaom</a>.
    </div>
    </div>
  );
}

export default App;
