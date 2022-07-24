import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';

const CarouselComponent = lazy(()=> import('./CarouselComponent'))
const Contact = lazy(()=> import('./Contact'))

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
			<Suspense fallback={<div />}>
				<CarouselComponent />
			</Suspense>

			{/** About me */}
			<About />

			{/** contact me  */}
			<Suspense fallback={<div />}>
            	<Contact />
			</Suspense>

			{isButtonVisible && (
				<div className='go-up' onClick={goToTop}>
					<AiOutlineArrowUp />
				</div>
			)}
		</div>
	);
};
