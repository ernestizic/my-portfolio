import React from 'react';
// import { IconContext } from 'react-icons';
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
						<p className='animate__animated animate__backInUp' id='desc'>
							Fullstack Web Developer with the skills to deliver Responsive
							designs and Web applications that meets standards. Feel free to
							check out my previous works :)
						</p>
					</div>
					<div className='col-md-5'>
						<div className='email-phone animate__animated animate__bounceInDown'>
							<a
								href='http://twitter.com/ernestizic'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa fa-twitter' />
							</a>
							{/* <IconContext.Provider
								value={{ className: 'global-class-name' }}
							>
								<a
									href='https://www.linkedin.com/in/ernestizic'
									target='_blank'
									rel='noreferrer'
								>
									<FaLinkedinIn />
								</a>
							</IconContext.Provider> */}
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
