import React, { useEffect } from "react";
import "./Contact.css";
import "animate.css";
import { Link } from "react-router-dom";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Medlar Media";
  }, []);

  return (
    <div className="contact_main animate__animated animate__fadeIn">
      <div className="contact_header">
        <h1 className="contact_Text">CONTACT US</h1>
      </div>

      <div class="contact_content1">
        <div className="contact_black_bg">
          <div class="contact_section contact_section_black">
            <h2 className="contact_text_pink">BOOK AN INFLUENCER</h2>
            <p>
              +92-319-5199331
              <br /> <span className="email_line">manager@medlarmedia.com</span>
            </p>
          </div>
          <div class="contact_section contact_section_black">
            <h2 className="contact_text_pink ">BECOME AN INFLUENCER</h2>
            <p>
              To apply for Medlar Talent
              <br />
              <span className="email_line">
                <Link to="/services" className="link_click">Click Here</Link>{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="contact_pink_bg">
          <div class="contact_section contact_section_pink ">
            <h2 className="contact_text_black">SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p className="form_p">
              to receive the latest news, editorials, campaigns and more
            </p>
          </div>
          <div className="contact_form">
            <div class="form__group field">
              <input
                type="email"
                class="form__field"
                placeholder="Email"
                required=""
              />
              <label for="name" class="form__label">
                Email
              </label>
            </div>
            <div className="contact_button_div">
              <button className="contact_button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_footer">
        <div className="contact_inquiry">
          <p>FOR GENERAL INQUIRIES 03195199331</p>
        </div>
        <div className="contact_copyright">
          <p>© 2021 by Medlar Media</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
