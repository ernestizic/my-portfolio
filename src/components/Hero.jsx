import React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
	return (
		<div className='container-fluid home'>
			<div className='ui-dot'></div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-7 m-auto'>
						<h2>Isaac Ifeanyichukwu Ernest</h2>
						<ReactTypingEffect
							text={['Fullstack Web Developer', 'Tech Ethusiast']}
							speed={100}
							typingDelay={1000}
							eraseDelay={1000}
							eraseSpeed={50}
							cursor={' '}
							className='job-title'
						/>
						<hr />
						<p className='animate__animated animate__fadeInUp' id='desc'>
							Frontend Web Developer with the skills to deliver fully responsive
							designs and web applications that meets accessibilty standards. Feel free to
							check out my previous works :)
						</p>
					</div>
					<div className='col-md-5'>
						<div className='email-phone animate__animated animate__fadeInRight'>
							<a
								href='http://twitter.com/ernestizic'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-twitter' />
							</a>
							<a
								href='https://github.com/ernestizic'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-github' />
							</a>
							<a
								href='https://www.linkedin.com/in/ernestizic'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-linkedin' />
							</a>
						</div>
					</div>
				</div>
			</div>
            <span className='indicator'>
                <FaArrowCircleDown />
            </span>
		</div>
	);
};

export default Hero;
