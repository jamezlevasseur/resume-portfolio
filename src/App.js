import umobear from "./assets/umologo.png";
import aad from "./assets/aad.png";
import code from "./assets/code.png";
import rasp from "./assets/rasp.png";
import react from "./assets/react.png";
import ps from "./assets/ps.png";
import python from "./assets/python.png";
import html2pdf from "html2pdf.js";
import $ from "jquery";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faFileArrowDown,
  faGlobe,
  faLocationDot,
  faMobileButton,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function App(props) {
  const currentTime = new Date().getHours();

  const initialDayNightSetting =
    currentTime > 17 || currentTime < 9 ? "night" : "day";
  const [dayNight, setDayNight] = useState(initialDayNightSetting);
  const [bodyBG, setbodyBG] = useState(
    initialDayNightSetting === "day" ? "#fff" : "#222"
  );
  const [bodyColor, setbodyColor] = useState(
    initialDayNightSetting === "day" ? "#000" : "#fff"
  );
  const [h3BorderBottom, setH3BorderBottom] = useState({
    borderBottom: "3px solid #fff",
  });

  document.body.style.background = bodyBG;
  document.body.style.color = bodyColor;

  function dayNightSwitch() {
    if (dayNight === "night") {
      setbodyBG("#fff");
      setbodyColor("#000");
      setDayNight("day");
      setH3BorderBottom({ borderBottom: "3px solid #000" });
    } else {
      setbodyBG("#222");
      setbodyColor("#fff");
      setDayNight("night");
      setH3BorderBottom({ borderBottom: "3px solid #fff" });
    }
  }

  function DayNightButton() {
    if (dayNight === "day") {
      return (
        <FontAwesomeIcon
          data-html2canvas-ignore="true"
          icon={faSun}
          onClick={() => {
            dayNightSwitch();
          }}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          data-html2canvas-ignore="true"
          icon={faMoon}
          onClick={() => {
            dayNightSwitch();
          }}
        />
      );
    }
  }

  return (
    <div className="App container">
      <img src={aad} className="floating-img aad" />
      <img src={python} className="floating-img python" />
      <img src={code} className="floating-img code" />
      <img src={rasp} className="floating-img rasp" />
      <img src={ps} className="floating-img ps" />
      <img src={react} className="floating-img react" />

      <div className="row">
        <div className="title col-sm-12">
          <h1>James LeVasseur</h1>
          <h2>Developer, Sys Admin, Geek</h2>
          <div className="top-buttons">
            <DayNightButton />

            <FontAwesomeIcon
              data-html2canvas-ignore="true"
              icon={faFileArrowDown}
              onClick={() => {
                setTimeout(() => {
                  const printBackgroundColor =
                    dayNight === "day" ? "#fff" : "#222";
                  html2pdf()
                    .set({
                      filename: "James_LeVasseur_Resume.pdf",
                      html2canvas: {
                        onclone: (element) => {
                          const span = Array.from(
                            element.querySelectorAll("span")
                          );
                          const li = Array.from(element.querySelectorAll("li"));
                          const p = Array.from(element.querySelectorAll("p"));
                          const h1 = Array.from(element.querySelectorAll("h1"));
                          const h2 = Array.from(element.querySelectorAll("h2"));
                          const h3 = Array.from(element.querySelectorAll("h3"));
                          const h4 = Array.from(element.querySelectorAll("h4"));
                          const h5 = Array.from(element.querySelectorAll("h5"));
                          span.forEach((e) => {
                            e.style.color = "#000";
                          });
                          li.forEach((e) => {
                            e.style.color = "#000";
                          });
                          p.forEach((e) => {
                            e.style.color = "#000";
                          });
                          h1.forEach((e) => {
                            e.style.color = "#000";
                          });
                          h2.forEach((e) => {
                            e.style.color = "#000";
                          });
                          h3.forEach((e) => {
                            e.style.color = "#000";
                            e.style.borderBottom = "3px solid #000";
                          });
                          h4.forEach((e) => {
                            e.style.color = "#000";
                          });
                          h5.forEach((e) => {
                            e.style.color = "#000";
                          });

                          const divs = Array.from(
                            element.querySelectorAll("div")
                          );

                          divs.forEach((d) => {
                            if (d.classList.contains("App")) {
                              d.style.backgroundColor = "#fff";
                            }
                          });

                          const anchorElements = Array.from(
                            element.querySelectorAll("a")
                          );

                          anchorElements.forEach((a) => {
                            a.style.color = "#000";
                          });

                          const svgElements = Array.from(
                            element.querySelectorAll("svg")
                          );

                          svgElements.forEach((s) => {
                            const bBox = s.getBBox();

                            s.setAttribute("x", bBox.x);
                            s.setAttribute("y", bBox.y);
                            s.setAttribute(
                              "width",
                              (bBox.width / bBox.height) * 15
                            );
                            s.setAttribute("height", 15);
                          });
                        },
                        height: 1056,
                      },
                    })
                    .from($(".App")[0])
                    .save();
                }, 1000);
              }}
            />
          </div>
        </div>
        <div className="little-bits col-sm-12">
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:jlevdev@gmail.com" target="_blank">
              jlevdev@gmail.com
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faMobileButton} />
            <a>(207) 659-9328</a>
          </span>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
            <a>Portland, ME</a>
          </span>
          <span>
            <FontAwesomeIcon icon={faLinkedin} />
            <a
              href="https://www.linkedin.com/in/james-levasseur-7389aa168/"
              target="_blank"
            >
              LinkedIn
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/jamezlevasseur" target="_blank">
              Github
            </a>
          </span>
        </div>
        <div className="left-col col-sm-8">
          <div className="text-block career-obj" data-html2canvas-ignore="true">
            <h3 style={h3BorderBottom}>Career Objective</h3>
            <p>
              I got into tech and my current role as a System Administrator
              because I love problem solving. My current position has afforded
              me a plethora of opportunities to learn new things and work with
              great people. I still code for fun and continue to be fascinated
              with programming. My current passion project, Wrld Bldr, blends my
              love for Dungeons and Dragons with coding. During it I have
              learned about Django, React, and gave had to brush off my geometry
              skills to get the map generation process. I want to take this
              passion for learning new things and solving problems to new and
              interesting places.
            </p>
          </div>
          <div className="text-block work-exp">
            <h3 style={h3BorderBottom}>Work Experience</h3>
            <h4>Network Administrator</h4>
            <h5>Wayside Publishing</h5>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              <span>2018 - Present</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              <a>Freeport, ME</a>
            </span>

            <ul>
              <li>Maintained Linux servers on premises and in AWS</li>
              <li>Managed Azure Active Directory tenant</li>
              <li>
                Implemented and mainatained Unifi Wi-Fi system for multiple
                sites
              </li>
              <li>
                Managed over 100 endpoint devices with Automox, Intune,
                Pulseway, and JAMF
              </li>
              <li>Automated processes with PowerShell, Bash, and JavaScript</li>
              <li>
                Upgraded &amp; fortified infrastructure against cyber security
                incidents
              </li>
              <li>Managed IT help desk and helpdesk staff</li>
              <li>
                Removed redundant software and saved thousands of dollars per
                year
              </li>
              <li>Managed adjustments to COVID-19 remote work</li>
            </ul>

            <h4>IT Helpdesk Associate</h4>
            <h5>University of Maine IT Dept</h5>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              <span>2015-2016</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              <a>Orono, ME</a>
            </span>

            <ul>
              <li>
                Provided IT support for students and staff at in person help
                desk
              </li>
              <li>Maintained printers at two help desk locations</li>
              <li>
                Responded quickly to computer outages to notify and assist
                students
              </li>
            </ul>
            <h4>Developer</h4>
            <h5>ASAP Media Services</h5>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              <span>2014-2015</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              <a>Orono, ME</a>
            </span>

            <ul>
              <li>
                Front end and back end developer using PHP, JavaScript, CSS, and
                HTML.
              </li>
              <li>Developed user interfaces in Objective C for iOS</li>
              <li>Met with key stakeholders to document needs for projects</li>
              <li>Worked on 3+ projects simultaneously</li>
              <li>Designed and implemented complex user interfaces</li>
            </ul>
          </div>
          <div className="text-block projects" data-html2canvas-ignore="true">
            <h3 style={h3BorderBottom}>Projects</h3>
            <h4>WrldBldr</h4>
            <div className="project-link">
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/jamezlevasseur/WrldBldr">
                Check out the code.
              </a>
            </div>
            {/*
            <div className="project-link">
              <FontAwesomeIcon icon={faGlobe} />
              <a href="wb.jameslevasseur.com">Take a look.</a>
            </div>*/}
            <ul className="skill-list">
              <li>React.js</li>
              <li>Django</li>
              <li>MaterialUI</li>
              <li>Sass</li>
            </ul>
            <p>
              Over the pandemic I found Dungeons and Dragons to be a great hobby
              to connect with my friends remotely. Though as I created my own
              campaign I found the online tools for DMs (Dungeon Masters)
              lacking and decided to begin the creation of my own set of tools.
              Wrld Bldr (World Builder) is a work in progress with the goal
              being a tool that can create settlements, characters, maps,
              invetories and more for the DM. My goal is to take some of the
              tedium out of creating a world and generate a town or a region for
              the DM, then allow them to customize it to fit their vision.
            </p>
            <h4>Fab Lab Reservation System</h4>
            <div className="project-link">
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/jamezlevasseur/IMRC_AM_2k17">
                Check out the code.
              </a>
            </div>
            {/*
            <div className="project-link">
              <FontAwesomeIcon icon={faGlobe} />
              <a href="fablab.jameslevasseur.com">Take a look.</a>
            </div>*/}
            <ul className="skill-list">
              <li>PHP</li>
              <li>jQuery</li>
              <li>WordPress</li>
              <li>CSS</li>
            </ul>
            <p>
              My capstone project for college was a WordPress site with a custom
              plugin that created a reservation and inventory system for the
              University of Maine campus Fabrication Lab or "Fab Lab". The
              system, which was operational for 3 years, allowed patrons of the
              Fab Lab to reserve equipment like 3D printers, cameras, laser
              cutters and more. It kept track of costs for certain equipment
              like the 3D printers, which were charged by the amount of material
              used. The staff of the Fab Lab could enter in new equipment, mark
              the equipment as under unavailable for maintenance, keep track of
              the available materials for different pieces of equipment, manage
              reservation times and schedules, and more. The system also came
              with a custom page for tablets so that there could be an
              interactive reservation and checkout window on site.
            </p>
          </div>
        </div>
        <div className="right-col col-sm-3">
          <div className="text-block">
            <h3 style={h3BorderBottom}>Education</h3>
            <p>Bachelors in New Media</p>
            <p>Minor in Computer Science, Film &amp; Video</p>
            <p>
              <img src={umobear} width="15" alt="UMO logo" /> University of
              Maine
            </p>
            <p>
              <a>
                <FontAwesomeIcon icon={faLocationDot} /> <span> Orono, ME</span>
              </a>
            </p>
          </div>
          <div className="text-block skills">
            <h3 style={h3BorderBottom}>Skills</h3>
            <h4>Coding</h4>
            <ul className="clean-list">
              <li>Bash</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Java</li>
              <li>JavaScipt</li>
              <li>PHP</li>
              <li>PowerShell</li>
              <li>Python</li>
              <li>React.js</li>
              <li>jQuery</li>
            </ul>
            <h4>Databases</h4>
            <ul className="clean-list">
              <li>MongoDB</li>
              <li>Postgres</li>
            </ul>
            <h4>Dev Tools</h4>
            <ul className="clean-list">
              <li>AWS EC2</li>
              <li>AWS Patch Manager</li>
              <li>AWS Route 53</li>
              <li>Docker</li>
            </ul>
            <h4>Sys Admin</h4>
            <ul className="clean-list">
              <li>Automox</li>
              <li>Azure Active Directory</li>
              <li>Debian &amp; Ubuntu</li>
              <li>Intune</li>
              <li>SonicWall</li>
            </ul>
          </div>
          <div className="text-block hobbies" data-html2canvas-ignore="true">
            <h3 style={h3BorderBottom}>Hobbies</h3>
            <ul className="clean-list">
              <li>3D Printing</li>
              <li>Biking</li>
              <li>Board Games</li>
              <li>Dungeons &amp; Dragons</li>
              <li>Hiking</li>
              <li>Reading</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
