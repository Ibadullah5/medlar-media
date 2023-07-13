import React, { useEffect } from "react";
import "./About.css";
import Aboutimage from "../../assets/About.jpg";
import "animate.css";
function About() {
   useEffect(() => {
     document.title = "About | Medlar Media";
   }, []);
  const animationDuration = "1s";
  return (
    <div
      className="main_div animate__animated animate__fadeIn"
      style={{ animationDuration }}
    >
      <div className="header">
        <h1 className="about_Text">ABOUT US</h1>
      </div>

      <div className="container">
        <div class="text">
          <p className="animate__animated animate__fadeIn">
            Medlar Media is a leading talent marketing agency in Pakistan. We
            bring your brand story to life through harnessing the power of
            authentic connections with celebrated individuals and by developing
            captivating social engagement. We help brands engage and reach their
            target audiences across Pakistan through strategic and creative
            talent marketing <br />
            <br /> At Medlar Media we believe in purposeful connections between
            a brand and talent. By developing and executing tailor made campaign
            strategies we offer to enhance your outreach and amplify your brand
            across various social networks.
          </p>
        </div>
        <div class="image">
          <img src={Aboutimage} alt="Your Image" />
        </div>
      </div>
      <div className="footer">
        <div className="inquiry">
          <p>FOR GENERAL INQUIRIES 03195199331</p>
        </div>
        <div className="copyright">
          <p>© 2021 by Medlar Media</p>
        </div>
      </div>
    </div>
  );
}

export default About;
