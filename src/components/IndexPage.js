import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Carousel } from './Carousel';
import { Contact } from './Contact';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';

export const IndexPage = () => {
	const [isButtonVisible, setIsButtonVisible] = useState(false);

	useEffect(() => {
		const displayScrollBtn = () => {
			if (window.scrollY > 500) {
				setIsButtonVisible(true);
			} else {
				setIsButtonVisible(false);
			}
		};
		window.addEventListener('scroll', displayScrollBtn);

        return()=> {
            window.removeEventListener('scroll', displayScrollBtn)
        }
	}, []);


	const goToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className='index-page'>
			{/* Home */}
            <Hero />

			{/** Skills  */}
            <Skills />

			<Projects />

			{/** Recent works  */}
			<div className='container-fluid' id='recent-works'>
				<div className='container'>
					<Carousel />
				</div>
			</div>

			{/** About me */}
			<About />

			{/** contact me  */}
            <Contact />

			{isButtonVisible && (
				<div className='go-up' onClick={goToTop}>
					<AiOutlineArrowUp />
				</div>
			)}
		</div>
	);
};
