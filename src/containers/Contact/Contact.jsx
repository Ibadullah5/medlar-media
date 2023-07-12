import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_main">
      <div className="contact_header">
        <h1 className="contact_Text">CONTACT US</h1>
      </div>

      <div class="contact_content1">
        <div className="contact_black_bg">
          <div class="contact_section contact_section_black">
            <h2 className="contact_text_pink">BOOK AN INFLUENCER</h2>
            <p>
              +92-324-0803628
              <br /> <span>manager@medlarmedia.com</span>
            </p>
          </div>
          <div class="contact_section contact_section_black">
            <h2 className="contact_text_pink ">BECOME AN INFLUENCER</h2>
            <p>
              To apply for Medlar Talent
              <br /> <span>Click Here</span>
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
    <input type="email" class="form__field" placeholder="Email" required=""/>
    <label for="name" class="form__label">Email</label>
</div>
            <div className="contact_button_div">
              <button className="contact_button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_footer">
        <div className="contact_inquiry">
          <p>FOR GENERAL INQUIRIES 03240803628</p>
        </div>
        <div className="contact_copyright">
          <p>© 2021 by Medlar Media</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
