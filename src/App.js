//import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faFileArrowDown,
  faLocationDot,
  faLocationPin,
  faMobileButton,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="title col-sm-12">
          <h1>James LeVasseur</h1>
          <h2>Network Admin, Developer, Techie</h2>
        </div>
        <div className="">
          <FontAwesomeIcon icon={faMoon} />
          <FontAwesomeIcon icon={faFileArrowDown} />
        </div>
        <div className="little-bits col-sm-12">
          <a href="mailto:jlevdev@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>jlevdev@gmail.com</span>
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Portland, ME</span>
          </a>
          <a>
            <FontAwesomeIcon icon={faMobileButton} />
            <span>(207) 659-9328</span>
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
            <span>Github</span>
          </a>
        </div>
        <div className="left-col col-sm-8">
          <div className="text-block">
            <h3>Career Objective</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="text-block">
            <h3>Work Experience</h3>
            <h4>Network Administrator</h4>
            <h5>Wayside Publishing</h5>
            <a>
              <FontAwesomeIcon icon={faCalendar} />{" "}
              <span>June 2019 - Present</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faLocationPin} />{" "}
              <span> Freeport, ME</span>
            </a>
            <p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
              </ul>
            </p>
          </div>
          <div className="text-block">
            <h3>Projects</h3>
            <h4>Network Administrator</h4>
            <h5>Wayside Publishing</h5>
            <a>
              <FontAwesomeIcon icon={faCalendar} />{" "}
              <span>June 2019 - Present</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faLocationPin} />{" "}
              <span> Freeport, ME</span>
            </a>
            <p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="right-col col-sm-3">
          <div className="text-block">
            <h3>Education</h3>
            <p>BA in New Media</p>
            <p>Minor in Computer Science, Film &amp; Video</p>
            <p>University of Maine</p>
            <p>
              <a>
                <FontAwesomeIcon icon={faLocationPin} /> <span> Orono, ME</span>
              </a>
            </p>
          </div>
          <div className="text-block">
            <h3>Skills</h3>
            <p>
              <ul className="clean-list">
                <li>JavaScipt</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>Python</li>
                <li>React.js</li>
                <li>MaterialUI</li>
                <li>D3.js</li>
                <li>jQuery</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Java</li>
                <li>Docker</li>
                <li>Bash</li>
                <li>PowerShell</li>
              </ul>
            </p>
          </div>
          <div className="text-block">
            <h3>Hobbies</h3>
            <p>
              <ul className="clean-list">
                <li>JavaScipt</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>Python</li>
                <li>React.js</li>
                <li>MaterialUI</li>
                <li>D3.js</li>
                <li>jQuery</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Java</li>
                <li>Docker</li>
                <li>Bash</li>
                <li>PowerShell</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
