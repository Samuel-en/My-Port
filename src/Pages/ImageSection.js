import React from "react";
import about from "../Img/Samuel2.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt=""/>
      </div>
      <div className="about-info">
        <h4>I am<span> Full Stack Software Developer</span></h4> 
        <p className="about-text">
          Nulla consequat sint Lorem tempor deserunt ad officia. Nulla do irure
          ex eu commodo ut laborum exercitation amet minim in nulla ea
          voluptate. Qui nulla voluptate adipisicing nostrud culpa culpa
          cupidatat nostrud eiusmod aute.
        </p>
          <div className="about-details">
          <div className="left-section">
                 <p>Full Name</p>
                 <p>Pronoun</p>
                 <p>Nationality</p>
                 <p>Languages</p>
                 <p>Currently</p>
                 <p>Lived/visited</p>

            </div>
            <div className="right-section">
                 <p>: Samuel Endrias</p>
                 <p>: He/Him</p>
                 <p>: Eritrean-British-American</p>
                 <p>: English, Tigrigna </p>                 
                 <p>: Atlanta, Georgia USA </p>
                 <p>: Eritrea, Ethiopia, United Kingdom,
                      Germany, Netharlands, France</p>
            </div>
        </div>
        <button className="btn">Resume</button>
    </div>
</div>


);
}

export default ImageSection;
