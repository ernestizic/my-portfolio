import React from "react";
import { GiPentarrowsTornado } from "react-icons/gi";
import moment from "moment";
import {portfolioData} from '../data'

const Projects = () => {
  const formatDate = moment().format('dddd, Do MMMM YYYY');
  return (
    <div className='container-fluid' id='dream-works'>
      <div className='container' style={projectStyle}>
        <div className='ui-dot3'></div>
        <h2 style={projectStyleHead}>Recent Works</h2>
        <div className='date'> {formatDate} </div>
        <div className='project-container' data-aos="fade-up" data-aos-anchor-placement="top-center">
          {portfolioData?.slice(0, 3).map((data, idx) => (
            <div className='card' key={data.id}>
              {data.projectImage}
              <div className='card-body' style={cardBody}>
                <h5>{data.title}</h5>
                <p style={{ fontSize: "15px", marginTop: "20px" }}>{data.description}</p>
                <a
                  href={data.url}
                  target='_blank'
                  rel='noreferrer'
                  style={cardlink}
                >
                  View Project <GiPentarrowsTornado />
                </a>
              </div>
            </div>
          ))}
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

const cardBody = {
  color: "#fff",
};
const cardlink = {
  fontSize: "15px",
};

export default Projects;
