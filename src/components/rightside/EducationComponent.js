// Importing React modules
import React from "react";

// Creating the EducationComponent container/. Props point to the RightSide container. Object eds is a variable containing EDUCATION object. Attributes and values are within this object.
function EducationComponent(props) {
  // Mapping the education values to these new base elements.
  return props.eds.map((ed) => {
    return (
      <div className="container2">
        <h5 className="opacity">
          <b>{ed.title}</b>
        </h5>
        <h6 className="text-teal">
          <i className="fa fa-calendar fa-fw margin-right" />
          {ed.date}
        </h6>
        <p style={{ fontSize: 15 }}>{ed.desc}</p>
        <hr />
      </div>
    );
  });
};

// Exporting the EducationComponent container
export default EducationComponent;
