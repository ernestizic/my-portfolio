import React from 'react';
import { Link } from 'react-router-dom';
import Ernestpic from '../images/IMG_20220325_131338_3-min.jpg';

const About = () => {
	return (
		<div className='container-fluid' id='about'>
			<h2>Who is <span className='name'>Ernest Isaac?</span></h2>
			<div className='container' data-aos="zoom-in" style={{ padding: '20px 0' }}>
				<div className='row'>
					<div className='col-md-6 img-div'>
						<img
							src={Ernestpic}
							alt='ernestizic - Isaac Ernest'
							className='img-fluid'
						/>
					</div>

					<div className='col-md-6 aboutme-texts'>
						{/* <h2>
							<span>About</span> Me
						</h2> */}
						<p>
							I'm a self taught web developer living in Lagos, Nigeria. I have
							over 3 years of experience in writing maintainable and functional
							code following best practices, delivering responsive designs and
							applications that meets user's standard. I am an enthusiast and
							highly motivated learner.
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
