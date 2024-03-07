import React, { useEffect } from "react";
import "./about.css";

const teamMembers = [
  {
    name: "J.Sriram",
    course: "CSE(H) - B.Tech. -2",
    location: "Vijayawada, AP, India",
    email: "jagusriram2004@gmail.com",
    phone: "+91 90329 51175",
    image:
      "https://images.unsplash.com/photo-1465321897912-c692b37a09a6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "K.Ritik Sai",
    course: "CSE(H) - B.Tech. -2",
    location: "Vijayawada, AP, India",
    email: "rithiksai27@gmail.com",
    phone: "+91 96769 93639",
    image:
      "https://images.unsplash.com/photo-1466938756653-5a5e21649e7f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function About() {
  useEffect(() => {
    // Add the fade-in class after the component mounts
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      element.classList.add("fade-in");
    });
  }, []);

  return (
    <>
      <div className="intro">
        <div className="aboutusdesign fade-in">
          <p>ABOUT US</p>
        </div>
        <div className="short-description fade-in">
          <div className="heading-line">Welcome to <b>SnapWrite</b>,</div>
          <div className="heading-line">Where Ideas Emerge, Pixels Ignite,</div>
          <div className="heading-line">Crafting Digital Narratives.</div>
        </div>
      </div>
      <h3 className="fade-in">Our Team:</h3>
      <div className="team fade-in">
        {teamMembers.map((member, index) => (
          <div className="team-Member fade-in" key={index}>
            <img src={member.image} alt={`Team Member ${index + 1}`} width="100%" />
            <br />
            <h5>{`NAME: ${member.name}`}</h5>
            <h6>{member.course}</h6>
            <address>{member.location}</address>
            <i>{member.email}</i>
            <br />
            <i>{member.phone}</i>
          </div>
        ))}
      </div>
    </>
  );
}
