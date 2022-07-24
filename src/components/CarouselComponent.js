import React from 'react';
import { Carousel } from '3d-react-carousal';

import { portfolioData } from '../data';

const CarouselComponent = () => {

	const gallery = portfolioData?.slice(0, 5).map((data, idx) => {
		return (
			<div className='card' key={data.id}>
				{data.projectImage}
				<div className='overlay'>
				<a
                  href={data.url}
                  target='_blank'
                  rel='noreferrer'
                >
					Visit site
				</a>
				</div>
			</div>
		);
	});
	const callback = function (index) {
		console.log('callback', index);
	};

	return (
		<div className='container-fluid' id='carousel-works'>
			<div className='header-text'>
				<h5> 
					<span></span>
					What I Do
				</h5>
				<p>I build UI/Softwares. Building frontend applications for web and sometimes I build mobile and backend applications</p>
			</div>
			<div className='carousel'>
				<Carousel
					slides={gallery}
					autoplay={true}
					interval={3000}
					onSlideChange={callback}
					arrows={true}
				/>
			</div>
		</div>
	);
};

export default CarouselComponent;
