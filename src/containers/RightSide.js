// Importing React modules
import React from "react";

// Importing the various right side containers
import ExperienceComponent from "../components/rightside/ExperienceComponent";
import EducationComponent from "../components/rightside/EducationComponent";
import RCard from "../components/rightside/RCard";

// Creating the Right Side container. Holds multiple objects in an EXPERIENCES and EDUCATION array.
function RightSide(){
  const EXPERIENCES = [
    {
      title: "Unemployed",
      date: "Jan 2021 - ",
      isCurrent: true,
      desc:
        "Ah to be unemployed. I knew this fated day would come.",
    },
    {
      title: "English Program in Korea (EpiK) teacher",
      date: "Aug 2016 - Aug 2018",
      isCurrent: false,
      desc:
        "Got to experience another countries culture and people whilst imparting my knowledge on fresh young minds. Still one of the greatest decisions of my life.",
    },
    {
      title: "Peter Rich Architects",
      date: "Nov 2015 - Aug 2016",
      isCurrent: false,
      desc:
        "Worked with a great mentor and one of South Africa's greatest architects Mr Peter Rich.",
    },
    {
      title: "Google Student Ambassador for Wits University",
      date: "April 2014 - April 2015",
      isCurrent: false,
      desc:
        "Created opportunities for education and learning(as well as a bit of fun) by faciliating communication between the university and Google Africa.",
    }
  ];
  const EDUCATIONS = [
    {
      title: "Hyperion Dev",
      date: "Feb 2021 - May 2021",
      desc: "Learning how to be a web developer through this short but intense bootcamp.",
    },
    {
      title: "University of the Witwatersrand",
      date: "Jan 2020 - Dec 2020",
      desc: "Masters Degree in Architecture(Prof)",
    },
    {
      title: "University of the Witwatersrand",
      date: "Jan 2019 - Dec 2019",
      desc: "Honours Degree in Architecture",
    },
    {
      title: "English Access",
      date: "October 2015 - Dec 2015",
      desc: "TEFL certificate",
    },
    {
      title: "University of the Witwatersrand",
      date: "Jan 2013 - Dec 2015",
      desc: "Bachelors Degree in Architecture",
    },
    {
      title: "Jeppe High School for Boys",
      date: "Jan 2006 - Dec 2010",
      desc: "High School",
    },
  ];
  
  return (
    <div className="twothird">
    {/* Using RCard for formatting purposes*/}
      <RCard>
        <h2 className="text-grey padding-16">
          <i className="fa fa-suitcase fa-fw margin-right xxlarge text-teal" />
          Work Experience
        </h2>
        {/* Calling the experience component and giving it a property(props) exps so that it can be targeted. */}
        <ExperienceComponent exps={EXPERIENCES} />
      </RCard>
      <RCard>
        <h2 className="text-grey padding-16">
          <i className="fa fa-certificate fa-fw margin-right xxlarge text-teal" />
          Education
        </h2>
        {/* Calling the education component and giving it a property(props) eds so that it can be targeted. */}
        <EducationComponent eds={EDUCATIONS} />
      </RCard>
    </div>
  );
};

// Exporting the Right Side container. This will get imported into the app container
export default RightSide;
