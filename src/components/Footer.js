import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  FaCopy,
  FaHeart,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare
} from "react-icons/fa";
import { Typography } from "../theme";

const { Text } = Typography;

const TWITTER = "https://twitter.com/deepansh946";
const LINKEDIN = "https://linkedin.com/in/deepansh946";
const GITHUB = "https://github.com/deepansh946";

function Footer(props) {
  const linkRef = useRef(null);
  const location = useLocation();

  const baseUrl = window.location.origin;

  const copyToClipboard = () => {
    const el = linkRef.current;
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand("copy");
    sel.removeAllRanges();
  };

  return (
    <>
      <Text className="mb-2">
        Your Link:
        <span ref={linkRef}>{baseUrl + location.pathname}</span>
        <FaCopy size={24} className="ml-1" onClick={copyToClipboard} />
      </Text>
      <Text>
        Made with <FaHeart size={24} className="heart-icon" /> by Deepansh
      </Text>
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
