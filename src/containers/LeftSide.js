// Importing React modules
import React from "react";
// Importing the various containers needed for this section
import ContactArea from "../components/leftside/ContactArea";
import ImgLeft from "../components/leftside/ImgLeft";
import LangArea from "../components/leftside/LangArea";
import SkillsArea from "../components/leftside/SkillsArea";

// Creating a left side container that holds multiple objects.
function LeftSide() {
  const contact = {
    job: "Unemployed",
    CityCountry: "Johannesburg, RSA",
    email: "alankow11@gmail.com",
    phone: "060 878 6251",
  };
  const skills = [
    { name: "Adobe Photoshop", expPerc: "90%" },
    { name: "Sketchup", expPerc: "80%" },
    { name: "HTML", expPerc: "75%" },
    { name: "CSS", expPerc: "75%" },
    { name: "Javascript", expPerc: "50%" },
  ];
  const langs = [
    { langName: "English", levelPerc: "100%" },
    { langName: "Cantonese", levelPerc: "55%" },
    { langName: "Mandarin", levelPerc: "20%" },
    { langName: "Afrikaans", levelPerc: "15%" },
  ];
  return (
    <div className="third">
      <div className="white text-grey card2">
        <ImgLeft />
        <div style={{ padding: "10%", paddingTop: 0 }}>
        {/* Including the various left side containers here and giving them properties so that they are targetable */}
          <ContactArea contact={contact}  />
          <SkillsArea skills={skills} />
          <LangArea langs={langs} />
        </div>
      </div>
    </div>
  );
};

// Export the Left Side Container. This goes the the App container.
export default LeftSide;
