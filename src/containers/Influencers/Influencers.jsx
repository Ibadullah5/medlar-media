import "./Influencers.css";
import {
  warisha,
  syed,
  aashir,
  areeba,
  jiya,
  maimoona,
  mustafa,
  nazeeha,
  reeja,
  roha,
  ayesha,
  daniya,
} from "../../assets";
import "animate.css";
import { useEffect } from "react";

const Influencers = () => {

   useEffect(() => {
     document.title = "Influencers | Medlar Media";
   }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="influencers">
        <h1 className="influencers__heading  animate__animated animate__fadeIn">
          INFLUENCERS
        </h1>
        <div className="influencers__grid animate__animated animate__fadeIn">
          <div className="influencers__pack">
            <div className="influencers__img">
              <img src={aashir} />
            </div>
            <div className="influencers__name">
              <p className="paragraph">AASHIR WAJAHAT</p>
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__img">
              <img src={areeba} />
            </div>
            <div className="influencers__name">
              <p className="paragraph">AREEBA NADEEM</p>
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__name">
              <p className="paragraph">AYESHA KHALID</p>
            </div>
            <div className="influencers__img">
              <img src={ayesha} />
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__name">
              <p className="paragraph">DANIYA KANWAL</p>
            </div>
            <div className="influencers__img">
              <img src={daniya} />
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__img">
              <img src={jiya} />
            </div>
            <div className="influencers__name">
              <p className="paragraph">JIYA KHURRAM</p>
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__img">
              <img src={maimoona} />
            </div>
            <div className="influencers__name">
              <p className="paragraph">MAIMOONA SHAH</p>
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__name">
              <p className="paragraph">MUSTAFA BABER</p>
            </div>
            <div className="influencers__img">
              <img src={mustafa} />
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__name">
              <p className="paragraph">NAZEEHA</p>
            </div>
            <div className="influencers__img">
              <img src={nazeeha} />
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__img">
              <img src={reeja} />
            </div>
            <div className="influencers__name">
              <p className="paragraph">REEJA JEELANI</p>
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__img">
              <img src={roha} />
            </div>
            <div className="influencers__name">
              <p className="paragraph">ROHA NADEEM</p>
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__name">
              <p className="paragraph">SYED ABDULA</p>
            </div>
            <div className="influencers__img">
              <img src={syed} />
            </div>
          </div>

          <div className="influencers__pack">
            <div className="influencers__name">
              <p className="paragraph">WARISHA JAVED KHAN</p>
            </div>
            <div className="influencers__img">
              <img src={warisha} />
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
    </>
  );
};

export default Influencers;
