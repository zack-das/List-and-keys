import React, { Component } from "react";
import Links from "./Links";

class About extends Component {
  render() {
    const { bio, links } = this.props;
    
    return (
      <div id="about">
        <h2>About Me</h2>
        {bio && <p>{bio}</p>}
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={links.github} linkedin={links.linkedin} />
      </div>
    );
  }
}

export default About;