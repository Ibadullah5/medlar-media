import "./SocialMedia.css";
import { facebook, instagram, message, upArrow } from "../../assets";
import { useState, useEffect } from "react";

const SocialMedia = () => {
  const [showButton, setShowButton] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) setShowButton(true);
      else setShowButton(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="socialmedia">
      <img className="facebook-img" src={facebook} />
      <img className="instagram-img" src={instagram} />
      {/* <div className="message-wrapper">
        <img className="message-img" src={message} />
      </div> */}
      {showButton && (
        <button className="up-btn" onClick={scrollUp}>
          <img src={upArrow} />
        </button>
      )}
    </div>
  );
};

export default SocialMedia;
