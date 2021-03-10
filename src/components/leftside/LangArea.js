// Importing React modules
import React from "react";

// creating LangArea container. Props lead to LeftSide container in the languages object.
function LangArea(props){
  return (
    <div>
      <p className="large">
        <b>
          <i className="fa fa-globe fa-fw margin-right text-teal" />
          Languages
        </b>
      </p>
      {/* Mapping the languages into an array with these elements as a base*/}
      {props.langs.map((lang) => {
        return (
          <div>
            <p>{lang.langName}</p>
            <div className="light-grey round-xlarge">
              <div
                className="round-xlarge teal"
              // Width value is tapping into the language object where levelPerc is the percentage of the width of the bar
                style={{ height: "24px", width: lang.levelPerc }}
              />
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
};

// Exporting the LangArea container;
export default LangArea;
