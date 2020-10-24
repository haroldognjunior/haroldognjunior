import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faFacebook,
    faGithub,
    faMedium
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3 className = "heading">Find me</h3>
        <a href="https://www.linkedin.com/in/hgnjr/"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/haroldognjunior" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.facebook.com/haroldo.junior.359/" className="twitter social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://medium.com/@haroldognjunior" className="medium social">
            <FontAwesomeIcon icon={faMedium} size="2x" />
        </a>
    </div>
  );
}