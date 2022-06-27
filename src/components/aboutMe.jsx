import React from "react";
import Frank from "../img/Frank.jpeg";

const AboutMe = () => {
  return (
    <div className="container d-flex justify-content-between ">
      <div className="row">
        {/* <h2 style={{ fontSize: 20 }} className="text-center">
        Hello! My name is Frank Lugola. I am senior at Luther College. Studying
        for a Bachelor's degree in Computer Science and a History Minor
      </h2> */}
        <div>
          <img
            className=" col img-fluid"
            src={Frank}
            width={1600}
            height={700}
          />
        </div>

        <div id="Second" className="col m-4 justify-content-between">
          <h2 style={{ fontSize: 25 }} className="text-justify display-4">
            Hello! My name is Frank Lugola. I am senior at Luther College.
            Studying for a Bachelor's degree in Computer Science with a History
            Minor. I am an International student from Dar es Salaam, Tanzania.
            Studying for a Bachelor's degree in Computer Science with a History
            Minor. I am an International student from Dar es Salaam, Tanzania.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
