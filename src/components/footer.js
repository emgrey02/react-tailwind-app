import * as React from "react";
import twitterIcon from "../images/twitter-icon.png";
import githubIcon from "../images/github-icon.png";

const Footer = (props) => {
  return (
    <footer class="bottom-0 inset-x-0 bg-purple-400 border-t-2 border-gray-600 text-center ">
      <div class="h-40 flex flex-col justify-around">
        <h3>follow me</h3>
        <ul class="flex flex-row justify-around md:justify-center md:space-x-40">
          <li>
            <p>on twitter</p>
            <div class="flex h-8 items-center space-x-1">
              <img class="w-6" src={twitterIcon} alt="twitter icon" />
              <a
                class="hover:underline hover:text-white"
                href="https://twitter.com/greyypse"
              >
                @greyypse
              </a>
            </div>
          </li>
          <li>
            <p>on github</p>
            <div class="flex h-8 items-center space-x-1">
              <img class="w-6" src={githubIcon} alt="github icon" />
              <a
                class="hover:underline hover:text-white"
                href="https://github.com/emgrey02"
              >
                @emgrey02
              </a>
            </div>
          </li>
        </ul>
        <p>&copy; copyright 2021 Emma Grey</p>
      </div>
    </footer>
  );
};

export default Footer;
