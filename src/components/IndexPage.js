import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Ernestpic from '../images/IMG_20181028_124431_7.jpg'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaPython, FaSass } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { DiDjango } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { AiOutlineArrowUp } from 'react-icons/ai';
//import { SiTailwindcss } from 'react-icons/si';
import { Carousel } from './Carousel';
import { ContactForm } from './ContactForm';
import ReactTypingEffect from 'react-typing-effect';
import Projects from './Projects';
//import { motion } from 'framer-motion'; 


export const IndexPage = () => {

    useEffect(() => {
        const loader = document.querySelector('.loading');
        
        setTimeout(() => {
            loader.style.display = 'none'
        }, 2000);
    }, [])


    
    const goToTop =()=> {
        window.scrollTo(0, 0)
    }
    return (
        <div className='index-page'>
            {/* Home */}
            <div className='container-fluid home'>
                <div className='ui-dot'></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 m-auto'>
                            <ReactTypingEffect 
                                text={["Front-end web developer"]}
                                typingDelay={1000}
                                eraseDelay={10000}
                                className='job-title'
                            />
                            <h1 className="animate__animated animate__bounceInDown animate__fast">Isaac Ifeanyichukwu Ernest</h1><hr/>
                            <p className="animate__animated animate__backInUp">Fullstack Web Developer with the skills to deliver 
                            Responsive designs and Web applications that meets standards. Feel free to check out my previous works :)
                            </p>
                            <div className='email-phone animate__animated animate__bounceInDown'>
                                <p className='email'> <AiOutlineMail style={{color: '#cca114'}}/> <a href="mailto:ieifeanyichukwu@gmail.com">ieifeanyichukwu@gmail.com</a></p>
                            </div>
                        </div>
                        <div className='col-md-5 img-div'>
                            <img src={Ernestpic} alt='ernestizic - Isaac Ernest' className='img-fluid float-end'/>
                        </div>
                    </div>
                </div>
                
            </div>

            {/** About me */}
            <div className='container-fluid' id='about'>
                <div className='container' style={{borderBottom: '1px solid rgb(120, 120, 120)', padding: '20px 0'}}>
                    <h2>About Me</h2>
                    <p>I'm a self taught web developer living in Lagos, Nigeria. I have over a year of experience in writing maintainable 
                        and functional code following best practices, delivering responsive designs and applications that 
                        meets user's standard. I am an enthusiast and highly motivated learner.</p>

                        <Link className='btn' to="Isaac_Ernest_CV.docx" target="_blank" download>
                            Download Resume
                            <span></span>
                        </Link>
                    <div className='ui-dot2'></div>
                </div>
            </div>

            {/** Skills  */}
            <div className='container-fluid' id='skills'>
                <div className='container'>
                    <h2>Skills</h2>  
                    <div className='skill-list'>
                        <p><FaHtml5 style={{color: '#e34c26'}}/></p>
                        <p><FaCss3Alt style={{color: '#264de4'}}/></p>
                        <p><FaBootstrap style={{color: '#9B51E0'}}/></p>
                        <p><FaReact style={{color: '#61DBFB'}}/></p>
                        <p><FaPython style={{color: '#4B8BBE'}}/></p>
                        <p><DiDjango style={{color: '#092e20'}}/></p>
                        <p><FaNode style={{color: '#68a063'}}/></p>
                        <p><DiMongodb style={{color: '#68a063'}}/></p>
                        <p><FaSass style={{color: '#c69'}}/></p>
                        {/*<p><SiTailwindcss style={{color: '#60A5FA'}}/></p> */}
                    </div>
                </div>
            </div>

            <Projects />

            {/** Recent works  */}
            <div className='container-fluid' id='recent-works'>
                <div className='container'>
                    {/* <h2 style={{textAlign: 'center'}}>Recent Works</h2> */}
                    <Carousel />
                </div>
            </div>

            {/** Recent works  */}
            <div className='container-fluid' id='contactme'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 reach-out'>
                            <h2>Reach Out</h2>
                            <p>Need my services? Reach out to me and let's work together.</p>
                            <p className='email'> <AiOutlineMail style={{color: '#fcd201'}}/><a href="mailto:ieifeanyichukwu@gmail.com">ieifeanyichukwu@gmail.com</a></p>
                            <p className='location'> <GoLocation style={{color: '#fcd201'}}/> Lagos, Nigeria </p>
                        </div>
                        <div className='col-md-6'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <div className='go-up' onClick={goToTop}> 
                <AiOutlineArrowUp />
            </div>
            
        </div>
        
    )

}
