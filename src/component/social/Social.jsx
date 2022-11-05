import React from "react";
import "./Social.css";
import Slack from "../../assets/slack-new.png";
import { BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div className="social">
      <a href="https://slack.com/" className="slack__link">
        <img src={Slack} alt="" className="slack__img" />
      </a>
      <a href="https://github.com/" className="git__link">
        <BsGithub className="git__icon" />
      </a>
    </div>
  );
};

export default Social;
