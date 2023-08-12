// Thankyou.jsx
import React from "react";
import './index.css'
import PhoneImage from "./images/illustration-thank-you.svg";

function Thankyou({ rating }) {
  return (
    <div className="thank-you-box">
    <div >
        <img src={PhoneImage} alt="Star Icon" />
      </div>
      <div className="seperator"></div>
      <div className="rating-box-text">
        You selected {rating !== null ? rating : "______"} out of 5
      </div>
      <div className="seperator"></div>
      <div style={{
        fontSize: "24px"
      }}>Thank you!</div>
      <div className="seperator"></div>
      <div className="thank-you-subtext">
        We appreciate you taking the time to give a rating.<br></br>If you ever need more support,
        don’t hesitate to <br></br> get in touch!
      </div>
    </div>
  );
}

export default Thankyou;
