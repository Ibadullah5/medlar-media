import React, { useEffect } from "react";
import "./Services.css";
import 'animate.css'
function Services() {
   useEffect(() => {
     document.title = "Services | Medlar Media";
   }, []);
  return (
    <div className="services_main animate__animated animate__fadeIn">
      <div className="header">
        <h1 className="about_Text">SERVICES AT MEDLAR MEDIA</h1>
      </div>

      <div class="content1">
        <div className="black_bg">
          <div class="section ">
            <h2 className="text_pink">PRE-VETTING</h2>
            <p>
              We support agencies and brands by pre-vetting social talent who
              will have the greatest impact for their campaign, narrowing the
              options for final approval.
            </p>
          </div>
          <div class="section">
            <h2 className="text_pink">CREATIVE CAMPAIGNS</h2>
            <p>
              We simplify the process, formulating creative social media
              campaigns that reinforce your brand strategy to drive outreach,
              engagement and impact. Let us handle your campaign from start to
              finish with one point of contact and one consolidated payment.
            </p>
          </div>

          <div class="section">
            <h2 className="text_pink">CROSS PLATFORM PARTNERSHIPS</h2>
            <p>
              We integrate campaigns across various social media networks like
              Instagram, TikTok, Twitter and others to enhance your campaign and
              help your brand seamlessly takeover the online space. Such a
              large-scale cross platform campaign maximises outreach and ensures
              brand impact.
            </p>
          </div>
        </div>
        <div className="pink_bg">
          <div class="section section_pink">
            <h2 className="text_black">TALENT</h2>
            <p className="para_pink">
              Medler Media works with renowned and emerging talent in all
              spheres. From Instagram beauty and fashion creators through to
              TikTok dancers and entertainers, we work with the best of the
              best. If you want to enhance your social media career and go from
              being an influencer to being a brand yourself then join our team.
              Our platform hosts talent with hundreds of thousands of followers
              and upwards of 1+ million in outreach.
            </p>
          </div>
          <div class="section section_pink">
            <h2 className="text_black">RECRUITEMENT BENEFITS</h2>
            <p className="para_pink">
              Once you’ve signed with Medler Media you work with better brands
              and make more money. Our talent on average makes more than other
              Pakistani influencers their size and has the opportunity to work
              with some of the best clothing, food and tech brands. Additionally
              by being represented by us you’ll be provided with the much needed
              guidance on your social media career to take it to the next level.
            </p>
          </div>
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

export default Services;
