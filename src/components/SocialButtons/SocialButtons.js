import React from "react";
import "./SocialButtons.css"; // Make sure to import the CSS file

const SocialButtons = () => {
  return (
    <div id="workarea">
      <div className="position">
        <div className="svg-wrapper">
          <svg height="40" width="150" xmlns="/">
            <rect className="shape" height="40" width="150" />
            <div className="text">
              <span className="spot"></span>
            </div>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
