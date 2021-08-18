import Typist from "react-typist";
import React, { useState } from "react";
import Resume from "./media/AnhMac_Resume.pdf";
import pl from "./media/placeholder.jpeg";
// import img1 from './media/project-1.png';
// import img2 from './media/project-2.png';
// import img3 from './media/project-3.png';
// import img4 from './media/project-4.gif';
// import img5 from './media/project-5.gif';
// import img6 from './media/project-6.gif';
import "./components/Cursor";
import "./App.css";

function App() {
  const projectsText = {
    0: "These are the projects that I'm most proud of and passionate about! Other professional experiences can be found on my resume 👈",
    1: "A smart scheduling Chrome extension, built in React, that helps users optimize their to-do list by planning tasks around existing events in their Google Calendar. Implemented additional endpoints and extended existing API to handle 'Edit' function when a Task is changed.",
    2: "A project for Saru Recyling, a startup at UCR. Led a team of 4 to developed a React web app and a React Native mobile app that allow the firm to measure bin telemetry and for customers to interact with smart recycling bins.",
    3: "A Digital Humanities project that analyzes the diversity, identity, and cultural sustainability of the Met collection using a dataset of the objects at the Met provided by Open Access. Collaborated with a team of 6 to research and write the narrative, told through data visualizations. Designed and implemented the entirety of the website.",
    4: "A realistic model of Royce Hall, a landmark at UCLA in changing seasons and weather built using OpenGL and tinygraphics.js library. Modeled the 3D-objects from scratch using Blender. Worked with a team of 4 to implement the idea, utilizing Scene Graphs and Collision Detection to animate objects and particles in the scene.",
    5: "A social media web app that showcases the importance of design using visually aesthetic yet purposefully unintuitive UI/UX elements. Spearheaded the design process to design wireframes, user flows, style guides, and mockups. The app is intended to highlight that any app can have beautiful UI but distinctively horrible UX.",
    6: "A model of the solar system with planets styled by leveraging various shading techniques of Computer Graphics. The camera can attach to a planet in the scene's matrix to follow the movement of the object.",
  };
  const projectsTitle = {
    0: "Projects",
    1: "Twain 📅",
    2: "Saru Recyling ♻️",
    3: "The Met Explorer 🏛",
    4: "Royce Hall Model 🐻💙💛",
    5: "FLUX (FlippedUX) 🎨",
    6: "Solar System Graphics✨☄️",
  };

  const [infoText, setInfoText] = useState({
    title: projectsTitle[0],
    text: projectsText[0],
  });
  const changeText = (i) => {
    setInfoText({ title: projectsTitle[i], text: projectsText[i] });
  };

  return (
    <div className="App">
      <div id="home" className="header">
        <div className="title">
          <p>
            Hi, I'm <strong>Anh Mac 🧀</strong> <br></br>
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>
              and I <strong style={{ color: "#5FC330" }}>code</strong>,
              <Typist.Delay ms={300} />{" "}
              <strong style={{ color: "#F9AA35" }}>design</strong>,
              <Typist.Delay ms={300} /> and{" "}
              <strong style={{ color: "#AC81F2" }}> dance</strong>
              <Typist.Delay ms={400} /> (sometimes..)
              <Typist.Backspace count={14} delay={300} />
              <Typist.Delay ms={100} />!
            </Typist>
          </p>
        </div>
        <div class="links-container">
          <a className="link" href="https://www.linkedin.com/in/anhmvc/">
            linkedin
          </a>
          <a className="link" href="https://github.com/anhmvc">
            github
          </a>
          <a className="link" href={Resume} target="_blank" rel="noreferrer">
            resume
          </a>
        </div>
        <div class="top left logo-text">
          <a class="menu-link" href="#home">
            AM
          </a>
        </div>
        <div class="top right menu-text">
          <a class="menu-link" href="#coding">
            coding.
          </a>
        </div>
        <div class="bottom right menu-text">
          <a class="menu-link" href="#designing">
            designing.
          </a>
        </div>
      </div>
      <div id="coding">
        <div class="row">
          <div class="column image" style={{ textAlign: "center" }}>
            <a href="https://github.com/ucladevx/twain-extension">
              <img
                src={pl}
                alt="Twain"
                style={{
                  height: "100%",
                  position: "relative",
                  right: "50%",
                  top: "15%",
                }}
                onMouseOver={() => changeText(1)}
                onMouseOut={() => changeText(0)}
              />
            </a>
          </div>
          <div class="column image">
            <a href="https://www.sarurecycling.com/">
              <img
                src={pl}
                alt="Saru Recycling"
                style={{ height: "100%", position: "relative" }}
                onMouseOver={() => changeText(2)}
                onMouseOut={() => changeText(0)}
              />
            </a>
          </div>
        </div>
        <div className="infoText">
          <h1 className="projectTitle">{infoText["title"]}</h1>
          <div className="projectDescription">
            &nbsp; &nbsp; {infoText["text"]}
          </div>
        </div>
        <div class="row">
          <div class="column">
            <a href="https://dh101metexploration.humspace.ucla.edu/">
              <img
                src={pl}
                alt="The Met Explorer"
                class="image"
                onMouseOver={() => changeText(3)}
                onMouseOut={() => changeText(0)}
              />
            </a>
          </div>
          <div class="column">
            <a href="https://github.com/anhmvc/royce-hall">
              <img
                src={pl}
                alt="Royce Hall Model"
                class="image"
                onMouseOver={() => changeText(4)}
                onMouseOut={() => changeText(0)}
              />
            </a>
          </div>
          <div class="column">
            <a href="https://flux.rip/">
              <img
                src={pl}
                alt="FLUX"
                class="image"
                onMouseOver={() => changeText(5)}
                onMouseOut={() => changeText(0)}
              />
            </a>
          </div>
          <div class="column">
            <a href="https://github.com/anhmvc/solar-system">
              <img
                src={pl}
                alt="Solar System Graphics"
                class="image"
                onMouseOver={() => changeText(6)}
                onMouseOut={() => changeText(0)}
              />
            </a>
          </div>
        </div>
      </div>
      <div id="designing">
        <h1 class="designTitle">Design</h1>
        <p class="designSubtitle">
          <strong style={{ color: "#F9AA35" }}>Under Construction..</strong>{" "}
          Please pardon our dust 🚧🚜🦺
        </p>
        <p class="designSubtitle">
          In the meantime, you can get an *exclusive* 😉 sneak peek of my design
          portfolio{" "}
          <a href="https://anhmvc.wixsite.com/home/design" class="designLink">
            here
          </a>
          !
        </p>
      </div>
    </div>
  );
}

export default App;
