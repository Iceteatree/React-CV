// Importing React modules
import React from "react";

// Creating a right side Card container. Just creating a space where it can hold the values of the Right Card
function RCard(props) {
  return (
    <div className="container2 card white margin-bottom">
      {/* children is the predefined value that holds the children values within this div */}
      {props.children}
    </div>
  );
};

// Exporting the RCard container
export default RCard;
