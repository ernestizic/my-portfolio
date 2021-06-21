import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='socials'>
                <p> <a href='https://github.com/ernestizic'><FaGithub /></a> </p>
                <p> <a href='http://twitter.com/ernestizic'><AiFillTwitterCircle /></a> </p>
                <p> <a href='https://www.linkedin.com/in/isaac-ifeanyichukwu-9b0039205/'><FaLinkedin /></a> </p>
            </div>

            <p>&copy; {(new Date().getFullYear())} by Ernestizic</p>
        </div>
    )
}
