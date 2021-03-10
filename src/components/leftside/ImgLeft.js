// Importing React modules
import React from "react";

// creatin ImgLeft container
function ImgLeft(){
  return (
    <div className="display-container">
      <img
        src="./images/Alansface.jpg"
        className="alans-Face"
        alt="A picture of Alans face"
      />
      <div className="container">
        <h2>Alan Kow</h2>
      </div>
    </div>
  );
};

// Exporting ImgLeft container
export default ImgLeft;
