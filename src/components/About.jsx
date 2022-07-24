import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className='container-fluid' id='about'>
			<h2>Who is <span className='focused-color'>Ernest Isaac?</span></h2>
			<div className='container' data-aos="zoom-in" style={{ padding: '20px 0' }}>
				<div className='row'>
					<div className='col-md-6 img-div'>
						<img
							src="https://res.cloudinary.com/ernestizic/image/upload/v1658688446/portfolio/isaac-ernest_gwbi67.webp"
							alt='ernestizic - Isaac Ernest'
							className='img-fluid'
						/>
					</div>

					<div className='col-md-6 aboutme-texts'>
						<p>
							I'm a self taught web developer living in Lagos, Nigeria. I have
							3 years of experience in writing maintainable and functional
							code following best practices, delivering robust and scalable solutions. 
							I'm also a highly motivated learner.
						</p>

						<Link
							className='btn'
							to='Resume-Isaac_Ernest_Ifeanyi.pdf'
							target='_blank'
							download
						>
							Download Resume
							<span></span>
						</Link>
					</div>
				</div>
				<div className='ui-dot2'></div>
			</div>
		</div>
	);
};

export default About;
