import React from 'react';
import Slider from "react-slick";
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Calculator from '../images/ernest-calc.png';
import Bookstore from '../images/bookstore.png';
import Ernestshop from '../images/ernestshop.png';
import Githubusers from '../images/searchgit.png';
import randomusers from '../images/random-users.png';


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
          {/** First card */}
          <div className='card container' >
            <div className='row card-row'>
              <div className='col-md-6'>
                <img src={Calculator} alt="Pic of Calculator App" style={{width: '100%'}} />
              </div>
              <div className='col-md-6 card-detail-div'>
                <h2>Calculator App</h2>
                <p className='card-details'> Calculator app by frontendmentor.io to perform mathematical operations like addition, 
                  subtraction, multiplication, and division. Users would also be able to adjust the color theme based on their 
                  preference</p>
                <p style={{fontSize: '17px'}}>HTML, CSS, Js, React</p>
              </div>
            </div>
            
            <div className='project-view-type'>
              <p>
                <a href='https://github.com/ernestizic/calculator-app' target='_blank' rel="noreferrer"><FaGithub className='view-code' title='view code' /><p>Code</p></a> 
              </p>

              <p>
                <a href='https://ernest-calc.netlify.app/' target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' title='view site'/><p>Live</p></a>
              </p>    
            </div>
          </div>


          {/** Second card */}
          <div className='card container' >
            <div className='row card-row'>
              <div className='col-md-6'>
                <img src={randomusers} alt="Pic of random users App" style={{width: '100%'}} />
              </div>
              <div className='col-md-6 card-detail-div'>
                <h2>Random User Generator</h2>
                <p className='card-details'> Random User Generator generates random users using the randomuser.me api</p>
                <p style={{fontSize: '17px'}}>HTML, Sass, React</p>
              </div>
            </div>
            
            <div className='project-view-type'>
              <p>
                <a href='https://github.com/ernestizic/random-users' target='_blank' rel="noreferrer"><FaGithub className='view-code' title='view code' /><p>Code</p></a>
              </p>

              <p>
                <a href='https://random-users-g.netlify.app/' target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' title='view site'/><p>Live</p></a>
              </p>
            </div>
          </div>

          {/** Third card */}
          <div className='card container'>
            <div className='row card-row'>
              <div className='col-md-6'>
                <img src={Ernestshop} alt="Pic of Ernestshop App" style={{width: '100%'}} />
              </div>
              <div className='col-md-6 card-detail-div'>
                <h2>E-commerce App</h2>
                <p className='card-details'>A frontend e-commerce application. It was built using HTML5, CSS3, React JS, Bootstrap and 
                  jQuery.</p>
                <p style={{fontSize: '17px'}}>HTML, CSS, jQuery, React</p>
              </div>
            </div>

            <div className='project-view-type'>
              <p>
                <a href='https://github.com/ernestizic/e-shop' target='_blank' rel="noreferrer"><FaGithub className='view-code' title='view code'/><p>Code</p></a>
              </p>

              <p>
                <a href='https://ernestshop.netlify.app/' target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' title='view site'/><p>Live</p></a>
              </p>
            </div>
          </div>

          {/** Fourth card */}
          <div className='card container'>
            <div className='row card-row'>
              <div className='col-md-6'>
                <img src={Bookstore} alt="Pic of Bookstore App" style={{width: '100%'}} />
              </div>
              <div className='col-md-6 card-detail-div'>
                <h2>itbook.store</h2>
                <p className='card-details'>A react application that is built using itbook.store api (api.itbook.store). This frontend 
                  application uses Context API to manage state.</p>
                <p style={{fontSize: '17px'}}>HTML, CSS, Js, React</p>
              </div>
            </div>

            <div className='project-view-type'>
              <p>
                <a href='https://github.com/ernestizic/book-store' target='_blank' rel="noreferrer"><FaGithub className='view-code' title='view code'/><p>Code</p></a>
              </p>

              <p>
                <a href='https://ernestit-bookstore.netlify.app/' target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' title='view site'/><p>Live</p></a>
              </p>
            </div>
          </div>


          {/** Fifth card */}

          <div className='card container'>
            <div className='row card-row'>
              <div className='col-md-6'>
                <img src={Githubusers} alt="Pic of Github users App" style={{width: '100%'}} />
              </div>
              <div className='col-md-6 card-detail-div'>
                <h2>Github Users Search App</h2>
                <p className='card-details'>This is a small application that enables users to search for GitHub users with their 
                  usernames. This was implemented using React.</p>
                <p style={{fontSize: '17px'}}>HTML, CSS, Js, React</p>
              </div>
            </div>

            <div className='project-view-type'>
              <p>
                <a href='https://github.com/ernestizic/github-users' target='_blank' rel="noreferrer"><FaGithub className='view-code' title='view code' /><p>Code</p></a>
              </p>

              <p>
                <a href='https://searchgit-profile.netlify.app/' target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' title='view site' /><p>Live</p></a>
              </p>
            </div>
          </div>

        </Slider>
        </div>
    )
}
