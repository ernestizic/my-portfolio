import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='socials'>
                <p> -------- <a href='https://github.com/ernestizic'><FaGithub /></a> </p>
                <p> <a href='http://twitter.com/ernestizic'><AiFillTwitterCircle /></a> </p>
                <p> <a href='https://www.linkedin.com/in/isaac-ifeanyichukwu-9b0039205/'><FaLinkedin /></a> -------- </p>
            </div>
            <p><code style={{color: '#f0f0f0', fontSize: '15px'}}>Designed & Built by Ernestizic</code></p>
            <p style={{color: '#f0f0f0'}}>&copy; {(new Date().getFullYear())} <code style={{color: '#f0f0f0', fontSize: '15px'}}> Ernestizic. All Rights Reserved</code></p>
        </div>
    )
}
