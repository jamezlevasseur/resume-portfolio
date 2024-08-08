import umobear from "./assets/umologo.png";
import html2pdf from "html2pdf.js";
import $ from "jquery";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faFileArrowDown,
  faLocationDot,
  faMobileButton,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const DAY = "day";
const NIGHT = "night";

const WHITE = "#fff";
const BLACK = "#000";
const SLATE = "#222";

const DAY_BORDER = `3px solid ${BLACK}`;
const NIGHT_BORDER = `3px solid ${WHITE}`;

function App() {
  const currentTime = new Date().getHours();

  const initialDayNightSetting =
    currentTime > 17 || currentTime < 9 ? NIGHT : DAY;
  const [dayNight, setDayNight] = useState(initialDayNightSetting);
  const [bodyBG, setbodyBG] = useState(
    initialDayNightSetting === DAY ? WHITE : SLATE
  );
  const [bodyColor, setbodyColor] = useState(
    initialDayNightSetting === DAY ? BLACK : WHITE
  );
  const [h3BorderBottom, setH3BorderBottom] = useState({
    borderBottom: DAY_BORDER,
  });

  document.body.style.background = bodyBG;
  document.body.style.color = bodyColor;

  const dayNightSwitch = () => {
    if (dayNight === NIGHT) {
      setbodyBG(WHITE);
      setbodyColor(BLACK);
      setDayNight(DAY);
      setH3BorderBottom({ borderBottom: NIGHT_BORDER });
    } else {
      setbodyBG("#222");
      setbodyColor("#fff");
      setDayNight("night");
      setH3BorderBottom({ borderBottom: DAY_BORDER });
    }
  };

  const downloadPdfClick = () => {
    setTimeout(() => {
      html2pdf()
        .set({
          filename: "James_LeVasseur_Resume.pdf",
          html2canvas: {
            onclone: (element) => {
              const span = Array.from(element.querySelectorAll("span"));
              const li = Array.from(element.querySelectorAll("li"));
              const p = Array.from(element.querySelectorAll("p"));
              const h1 = Array.from(element.querySelectorAll("h1"));
              const h2 = Array.from(element.querySelectorAll("h2"));
              const h3 = Array.from(element.querySelectorAll("h3"));
              const h4 = Array.from(element.querySelectorAll("h4"));
              const h5 = Array.from(element.querySelectorAll("h5"));
              span.forEach((e) => {
                e.style.color = BLACK;
              });
              li.forEach((e) => {
                e.style.color = BLACK;
              });
              p.forEach((e) => {
                e.style.color = BLACK;
              });
              h1.forEach((e) => {
                e.style.color = BLACK;
              });
              h2.forEach((e) => {
                e.style.color = BLACK;
              });
              h3.forEach((e) => {
                e.style.color = BLACK;
                e.style.borderBottom = DAY_BORDER;
              });
              h4.forEach((e) => {
                e.style.color = BLACK;
              });
              h5.forEach((e) => {
                e.style.color = BLACK;
              });

              const divs = Array.from(element.querySelectorAll("div"));

              divs.forEach((d) => {
                if (d.classList.contains("App")) {
                  d.style.backgroundColor = "#fff";
                }
              });

              const anchorElements = Array.from(element.querySelectorAll("a"));

              anchorElements.forEach((a) => {
                a.style.color = BLACK;
              });

              const svgElements = Array.from(element.querySelectorAll("svg"));

              svgElements.forEach((s) => {
                console.log(s);
                console.log(s.firstChild);
                const bBox = s.getBBox();

                s.setAttribute("x", bBox.x);
                s.setAttribute("y", bBox.y);
                s.setAttribute("width", (bBox.width / bBox.height) * 15);
                s.setAttribute("height", 15);

                s.style.fill = BLACK;
                s.style.webkitTextFillColor = BLACK;

                s.firstChild.style.fill = BLACK;
                s.firstChild.style.webkitTextFillColor = BLACK;
              });
            },
            height: 1056,
          },
        })
        .from($(".App")[0])
        .save();
    }, 1000);
  };

  return (
    <div className="App container">
      <div className="row">
        <div className="title col-12">
          <h1>James LeVasseur</h1>
          <h2>Developer, Sys Admin, Geek</h2>
          <div className="top-buttons">
            <FontAwesomeIcon
              data-html2canvas-ignore="true"
              icon={dayNight === DAY ? faSun : faMoon}
              onClick={() => {
                dayNightSwitch();
              }}
            />
            <FontAwesomeIcon
              data-html2canvas-ignore="true"
              icon={faFileArrowDown}
              onClick={downloadPdfClick}
            />
          </div>
        </div>
        <div className="little-bits col-12">
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="mailto:jlevdev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                jlevdev@gmail.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMobileButton} />
              <span className="padded">(207) 659-9328</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="padded">Portland, ME</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
              <a
                href="https://www.linkedin.com/in/james-levasseur-7389aa168/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <a
                href="https://github.com/jlevdev"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="left-col col-8">
          <div className="text-block career-obj" data-html2canvas-ignore="true">
            <h3 style={h3BorderBottom}>Career Objective</h3>
            <p>
              Hi, I'm James and welcome to my site/resume. I'm a tech enthusiast
              who's gone from IT Support to System Administrator and now
              Fullstack Developer. If I had to encapsulate my career into a
              phrase it would be "learn on the go" (disclaimer I have not used
              much of GO). I have been coding since high school and have taken
              on a variety of projects both professional and personal. From
              websites, to microcontrollers, 3D printing, and homelab setups. I
              learn by doing on the regular and would be happy to help with your
              next project.
            </p>
          </div>
          <div className="text-block work-exp">
            <h3 style={h3BorderBottom}>Work Experience</h3>
            <h4>Fullstack Developer</h4>
            <h5>Wayside Publishing</h5>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              <span>2017 - Present</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Freeport, ME</span>
            </span>

            <ul>
              <li>
                Identified and lead overhaul of ADA issues in React front-end
              </li>
              <li>
                Developed new Power BI connector for highly customized CMS
              </li>
              <li>
                Upgraded user analytics capture using MongoDB and SQL databases
              </li>
              <li>Assisted in major upgrade of back-end framework and CMS</li>
              <li>
                Routinely developed new features using React for front-end
                application
              </li>
            </ul>

            <h4>Network Administrator</h4>
            <h5>Wayside Publishing</h5>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              <span>2017 - Present</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Freeport, ME</span>
            </span>

            <ul>
              <li>Maintained Linux servers on premises and in AWS</li>
              <li>
                Maintained, upgraded, and archived applications with SQL
                databases
              </li>
              <li>Managed software & inventory budget</li>
              <li>Managed IT help desk and help desk staff</li>
              <li>
                Implemented MDM, AzureAD, and patch management systems for all
                endpoints
              </li>
              <li>
                Managed adjustments to COVID-19 remote work for entire 100
                employee staff
              </li>
              <li>
                Upgraded & fortified LAN infrastructure against cyber security
                incidents
              </li>
            </ul>

            <h4>Technical Support Rep</h4>
            <h5>Wayside Publishing</h5>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              <span>2017-2018</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Freeport, ME</span>
            </span>
            <ul>
              <li>
                Provided support for Wayside Publishing customers via phone and
                email
              </li>
              <li>
                Created custom data connector between Salesforce, production web
                app, and other proprietary systems
              </li>
              <li>
                Worked with Dev Team and client IT admins to automate user
                onboarding
              </li>
              <li>
                Automated data entry for major projects to meet strict deadlines
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
              <span>Orono, ME</span>
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
              <a href="https://github.com/jlevdev/WrldBldr">
                Check out the code.
              </a>
            </div>
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
              <a href="https://github.com/jlevdev/IMRC_AM_2k17">
                Check out the code.
              </a>
            </div>
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
        <div className="right-col col-4">
          <div className="text-block">
            <h3 style={h3BorderBottom}>Education</h3>
            <p>Bachelors in New Media</p>
            <p>Minor in Computer Science, Film &amp; Video</p>
            <p>
              <img src={umobear} width="15" alt="UMO logo" /> University of
              Maine
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faLocationDot} /> <span> Orono, ME</span>
              </span>
            </p>
          </div>
          <div className="text-block skills">
            <h3 style={h3BorderBottom}>Skills</h3>
            <h4>Coding</h4>
            <ul className="clean-list">
              <li>Bash</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScipt</li>
              <li>jQuery</li>
              <li>PHP</li>
              <li>PowerShell</li>
              <li>Python</li>
              <li>React</li>
            </ul>
            <h4>Databases</h4>
            <ul className="clean-list">
              <li>MongoDB</li>
              <li>Postgres</li>
              <li>SQL</li>
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
