import React from "react";
import GithubIcon from "../../assets/png/github.png";

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Team Oliver Minor Project</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.google.com">
          <img src={GithubIcon} alt="Github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
