import React from 'react';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='socials'>
                <a href='https://github.com/ernestizic'><i className='fa fa-github' /></a>
                <a href='http://twitter.com/ernestizic'><i className='fa fa-twitter' /></a>
                <a href='https://www.linkedin.com/in/ernestizic'><i className='fa fa-linkedin' /></a>
            </div>
            <p><code style={{color: '#999', fontSize: '15px'}}>Designed & Built by Ernestizic</code></p>
            <p style={{color: '#999'}}>&copy; {(new Date().getFullYear())} <code style={{color: '#999', fontSize: '15px'}}> Ernestizic.tech, All Rights Reserved</code></p>
        </div>
    )
}
