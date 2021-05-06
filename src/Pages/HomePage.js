import React from "react";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
// import {falinkdin} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Samuel 
          <span> Full Stack Developer </span>
        </h1>
        <p className="h-sub-text">
          designs and develops software, browse through portfolio
          for some awesome projects!
        </p>
        <div className="Icons">
        <Link className ="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="gh"/>
        </Link>
      </div>
      </header>
    </div>
  );
}

export default HomePage;
