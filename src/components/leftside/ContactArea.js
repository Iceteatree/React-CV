// Importing React modules
import React from "react";

// Creating ContactArea container. The props links to an object on LeftSide container with the actual values.
function ContactArea(props){
  return (
    <div>
      <p>
        <i className="fa fa-briefcase fa-fw margin-right large text-teal" />
        {props.contact.job}
      </p>
      <p>
        <i className="fa fa-home fa-fw margin-right large text-teal" />
        {props.contact.CityCountry}
      </p>
      <p>
        <i className="fa fa-envelope fa-fw margin-right large text-teal" />
        {props.contact.email}
      </p>
      <p>
        <i className="fa fa-phone fa-fw margin-right large text-teal" />
        {props.contact.phone}
      </p>
      <hr />
    </div>
  );
};

// Exporting ContactArea container
export default ContactArea;
