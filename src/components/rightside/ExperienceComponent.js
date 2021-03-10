// Importing React modules
import React from "react";

// Creating the experiences container. The props point to the RightSide container. exps is EXPERIENCES object. Attributes and values are contained within it.
function ExperienceComponent(props) {
  // Mapping the experiences into a new array with the elements as a base.
  return props.exps.map((ex) => {
    return (
      <div className="container2">
        <h5 className="opacity">
          <b>{ex.title}</b>
        </h5>
        <h6 className="text-teal">
          <i className="fa fa-calendar fa-fw margin-right" />
          {ex.date}
          <span className="tag teal round">
            {ex.isCurrent ? "Current" : null}
          </span>
        </h6>
        <p style={{ fontSize: 15 }}>{ex.desc}</p>
        <hr />
      </div>
    );
  });
};

// Exporting the experience container
export default ExperienceComponent;
