import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faFacebook,
    faGithub,
    faMedium,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3 className = "heading">Find me</h3>
        <a href="https://www.linkedin.com/in/hgnjr/"
            className="linkedin social">
            <FontAwesomeIcon color="#824027" icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/haroldognjunior" className="github social">
            <FontAwesomeIcon color="#824027" icon={faGithub} size="2x" />
        </a>
        <a href="https://www.instagram.com/haroldognjunior/" className="instagram social">
            <FontAwesomeIcon color="#824027" icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/haroldo.junior.359/" className="facebook social">
            <FontAwesomeIcon color="#824027" icon={faFacebook} size="2x" />
        </a>
        <a href="https://medium.com/@haroldognjunior" className="medium social">
            <FontAwesomeIcon color="#824027" icon={faMedium} size="2x" />
        </a>
    </div>
  );
}