import React, { Component } from "react";

class Links extends Component {
  render() {
    const { github, linkedin } = this.props;
    
    return (
      <div>
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
      </div>
    );
  }
}

export default Links;