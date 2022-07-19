import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='socials'>
                <p> -------- <a href='https://github.com/ernestizic'><FaGithub /></a> </p>
                <p> <a href='http://twitter.com/ernestizic'><AiFillTwitterCircle /></a> </p>
                <p> <a href='https://www.linkedin.com/in/ernestizic'><FaLinkedin /></a> -------- </p>
            </div>
            <p><code style={{color: '#999', fontSize: '15px'}}>Designed & Built by Ernestizic</code></p>
            <p style={{color: '#999'}}>&copy; {(new Date().getFullYear())} <code style={{color: '#999', fontSize: '15px'}}> Ernestizic.tech, All Rights Reserved</code></p>
        </div>
    )
}
