import React from "react";
import Links from "./Links";
import PropTypes from 'prop-types';

function About({bio, links = {}}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <Links {...links} />
    </div>
  );
}

About.propTypes = {
  bio: PropTypes.string,
  links: PropTypes.shape({
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired
  }).isRequired
};


export default About;
