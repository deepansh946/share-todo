import React from "react";
import {
  FaHeart,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare
} from "react-icons/fa";

const TWITTER = "https://twitter.com/deepansh946";
const LINKEDIN = "https://linkedin.com/in/deepansh946";
const GITHUB = "https://github.com/deepansh946";

function Footer(props) {
  return (
    <>
      <div>
        Made with <FaHeart color="red" size={24} /> by Deepansh
      </div>
      <div className="mt-2">
        <a
          href={TWITTER}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <FaTwitterSquare color={"#192b4d"} size={24} />
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <FaLinkedin color={"#192b4d"} size={24} />
        </a>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <FaGithubSquare color={"#192b4d"} size={24} />
        </a>
      </div>
    </>
  );
}

export default Footer;
