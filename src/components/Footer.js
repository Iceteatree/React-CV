// Importing React modules
import React from "react";

// Creating the footer container
function Footer() {
  return (
    <footer className="container2 center social-area">
      <p>Find me on social media.</p>
      {/* Just your standard hyperlinking and icons */}
      <a href="https://www.facebook.com/alan.kow"><i className="fa fa-facebook-official hover-opacity" /></a>
      <a href="https://www.instagram.com/iceteatree/"><i className="fa fa-instagram hover-opacity" /></a>
      <a href="https://www.linkedin.com/in/alankow11/"><i className="fa fa-linkedin hover-opacity" /></a>
      <a href="https://github.com/Iceteatree"><i className="fa fa-github hover-opacity" /></a>
    </footer>
  );
};

// Exporting Footer container
export default Footer;
