import React from "react";
import "./About.css";
import githubImage from "../../images/github.png";
import linkedinImage from "../../images/linkedin.png";

function About() {
  return (
    <div className="about_container">
      <p className="about_text1">
        <span className="highlighted_text">Hi,</span> my name is
      </p>
      <p className="about_text2">Reena Joshi</p>
      <p className="about_text3">
        I am a Web Developer.<span className="highlighted_text">somewhere</span>
      </p>
      <p className="about_description">
      The great pleasure introduce my self.

I’m Yourname , Im from a small village call Native, Since 3 years I’m working as web developer in Company name and location. have developed many website and apart from the I have been part of web design project, office work and as freelancer. .

Then introduce your family background after that introduce you education background.

Explore the you skills different way.

1. HTML5, CSS3, Bootstrap, Javascript, jquery and React JS.

after that I gonna developing jquery plugin and react js projects so as soon as possible I ll update all projects in my GitHub account.

If you got any awards please explain that also.

That’s all about and Thank you so much.

Note: Sorry my english language is not good. If you ll get an error and any modify the words please let me know because It helps to developing my communication skills and english language.
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/harshit-chopra-b98a94189/"
          target="_blank"
        >
          <img src={linkedinImage} alt="linkedinImage" />
        </a>
        <a href="https://github.com/harshitchopra7" target="_blank">
          <img src={githubImage} alt="githubImage" />
        </a>
      </div>
      <a href="mailto: harshit1@gmail.com">
        <button className="about_button">Get in Touch</button>
      </a>
    </div>
  );
}

export default About;
