// Importing React modules
import React from "react";

// Creating the Skills Area container. Props lead to the LeftSide container. Skills object contains all the attributes and values.
function SkillsArea(props) {
  return (
    <div>
      <p className="large">
        <b>
          <i className="fa fa-asterisk fa-fw margin-right text-teal" />
          Skills
        </b>
      </p>
      {/* Mapping the skills into a new array with these elements as a base. */}
      {props.skills.map((skill) => {
        return (
          <div>
            <p>{skill.name}</p>
            <div className="light-grey round-xlarge small">
              <div
                className="container2 center round-xlarge teal"
                // Width value is tapping into the skill object where expPerc is the percentage of the width of the bar
                style={{ width: skill.expPerc }}
              >
              {/* This is the full experiences bar */}
                {skill.expPerc}
              </div>
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
};

// Exporting the SkillsArea container
export default SkillsArea;
