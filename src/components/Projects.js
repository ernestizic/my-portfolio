import React from "react";
import iblogpic from "../images/iblognews-min.png";
import { GiPentarrowsTornado } from "react-icons/gi";
import shorturl from "../images/url-shortening.png";
import randomusers from "../images/random-users.png";

const Projects = () => {
  return (
    <div className='container-fluid' id='recent-works'>
      <div className='container' style={projectStyle}>
        <div className='ui-dot3'></div>
        <h2 style={projectStyleHead}>Recent Works</h2>
        <div className='row'>
          {/* One */}
          <div className='col-lg-4 card' style={projectStyleCol}>
            <img
              src={iblogpic}
              alt='iblognews.netlify.app - news app by ernstizic'
            />
            <div className='card-body' style={cardBody}>
              <h5>News App</h5>
              <p style={{ fontSize: "15px", marginTop: "20px" }}>
                iBlog is a news app for getting latest trends from Sport, Tech,
                Entertainment...
              </p>
              <a
                href='https://iblognews.netlify.app'
                target='_blank'
                rel='noreferrer'
                style={carda}
              >
                View Project <GiPentarrowsTornado />
              </a>
            </div>
          </div>
          {/* Two */}
          <div className='col-lg-4 card' style={projectStyleCol}>
            <img
              src={shorturl}
              alt='url-cropper.netlify.app - shorten url by ernestizic'
            />
            <div className='card-body' style={cardBody}>
              <h5>Shortly</h5>
              <p style={{ fontSize: "15px", marginTop: "20px" }}>
                Challenge by Frontendmentor to integrate with the shrtcode API
                to create shortened URLs and display them like in the given
                designs.
              </p>
              <a
                href='https://url-cropper.netlify.app'
                target='_blank'
                rel='noreferrer'
                style={carda}
              >
                View Project <GiPentarrowsTornado />
              </a>
            </div>
          </div>
          {/* Three */}
          <div className='col-lg-4 card' style={projectStyleCol}>
            <img
              src={randomusers}
              alt='random-users-g.netlify.app - random user generator by ernestizic'
            />
            <div className='card-body' style={cardBody}>
              <h5>Random User Generator</h5>
              <p style={{ fontSize: "15px", marginTop: "20px" }}>
                Random User Generator generates and searches for random users
                using the randomuser.me api
              </p>
              <a
                href='https://random-users-g.netlify.app'
                target='_blank'
                rel='noreferrer'
                style={carda}
              >
                View Project <GiPentarrowsTornado />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const projectStyleHead = {
  textAlign: "center",
  color: "#fff",
};
const projectStyle = {
  paddingTop: "20px",
  paddingBottom: "20px",
};
const projectStyleCol = {
  padding: "0",
  border: "8px solid #212121",
  background: "#333333",
};
const cardBody = {
  color: "#fff",
};
const carda = {
  color: "#fcd201",
  fontSize: "15px",
};

export default Projects;
