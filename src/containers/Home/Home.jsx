import { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    document.title = "Home | Medlar Media";
  }, []);

  const animationDuration = "5s";
  return (
    <div className="home animate__animated animate__fadeIn">
      <div className="home-maindiv">
        <h1
          className="home__heading animate__animated animate__fadeIn animate__slower"
          style={{ animationDuration }}
        >
          MEDIA
          <br /> MEDLAR
        </h1>
        <div className="home-maindiv-secondarydiv  animate__animated animate__fadeInDown">
          <h2 className="home__heading-small">PAKISTAN</h2>
          <p className="home__heading-paragraph">
            Giving your talent a medium and a voice to reach the maximum
            potential
          </p>
          <button className="home__btn">
            <NavLink className="navlinks-btn" to="/influencers">
              See Influencers
            </NavLink>
          </button>
        </div>
      </div>

      <div className="home-footer">
        <p>FOR GENERAL INQUIRIES 03195199331</p>
        <p> © 2021 by Medlar Media</p>
      </div>
    </div>
  );
};

export default Home;
