import React from 'react';
import Slider from "react-slick";
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Calculator from '../images/ernest-calc.png';
import Bookstore from '../images/bookstore.png';
import Ernestshop from '../images/ernestshop.png';
import Githubusers from '../images/searchgit.png';


export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div className='slides'>
        <Slider {...settings}>
          <div className='card'>
            <img src={Calculator} alt="Pic of Calculator App" style={{width: '100%'}} />
            <div className='project-view-type'>
                <a href='https://github.com/ernestizic/calculator-app' target='_blank' rel="noreferrer"><FaGithub className='view-code' title='view code' /></a>
                <a href='https://ernest-calc.netlify.app/' target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' title='view site'/></a>
            </div>
          </div>
          <div className='card'>
            <img src={Ernestshop} alt="Pic of Ernestshop App" style={{width: '100%'}} />
            <div className='project-view-type'>
                <a href='https://github.com/ernestizic/e-shop' target='_blank' rel="noreferrer"><FaGithub className='view-code' title='view code'/></a>
                <a href='https://ernestshop.netlify.app/' target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' title='view site'/></a>
            </div>
          </div>
          <div className='card'>
            <img src={Bookstore} alt="Pic of Bookstore App" style={{width: '100%'}} />
            <div className='project-view-type'>
                <a href='https://github.com/ernestizic/book-store' target='_blank' rel="noreferrer"><FaGithub className='view-code' title='view code'/></a>
                <a href='https://ernestit-bookstore.netlify.app/' target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' title='view site'/></a>
            </div>
          </div>
          <div className='card'>
            <img src={Githubusers} alt="Pic of Github users App" style={{width: '100%'}} />
            <div className='project-view-type'>
                <a href='https://github.com/ernestizic/github-users' target='_blank' rel="noreferrer"><FaGithub className='view-code' title='view code' /></a>
                <a href='https://searchgit-profile.netlify.app/' target='_blank' rel="noreferrer"><BsBoxArrowUpRight className='view-live' title='view site' /></a>
            </div>
          </div>
        </Slider>
        </div>
    )
}
