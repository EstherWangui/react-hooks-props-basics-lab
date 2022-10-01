import React from "react";
//import user from "../data/user";
import Link from "./Link";

//function About() {
function About(props) { 
  return (
    <div id="about">
       <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      { <Link
        linkedin={props.links.linkedin}
        github={props.links.github}
      />} 
    </div>
  );
}

export default About;
