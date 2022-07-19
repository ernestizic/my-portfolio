import React from 'react';
import Slider from "react-slick";
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { portfolioData } from '../data';


export const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
        <div className='slides'>
        <Slider {...settings}>
          {/** card */}
          {portfolioData?.slice(0, 6).map(data => (
            <div className='card container' >
              <div className='row card-row'>
                <div className='col-md-6'>
                  <img src={data.projectImage} alt={data.imgAlt} style={{width: '100%'}} />
                </div>
                <div className='col-md-6 card-detail-div'>
                  <h2>{data.title}</h2>
                  <p className='card-details'>{data.description}</p>
                  <p style={{fontSize: '17px'}}>{data.techStack}</p>
                </div>
              </div>
              
              <div className='project-view-type'>
                <p title='view code' >
                  <a href={data.githubUrl} target='_blank' rel="noreferrer"><FaGithub className='view-code' />
                  </a> 
                    <span style={{fontSize: '15px', color: 'black'}}>Code</span>
                </p>

                <p title='view site'>
                  <a href={data.url} target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' />
                  </a>
                    <span style={{fontSize: '15px', color: 'black'}}>Live</span>
                </p>    
              </div>
            </div>
          ))}
        </Slider>
        </div>
    )
}
