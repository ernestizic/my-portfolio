import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { ContactForm } from './ContactForm';

const Contact = () => {
	return (
		<div className='container-fluid' id='contactme'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 reach-out'>
						<h2>Reach Out</h2>
						<p>Need my services? Reach out to me and let's work together.</p>
						<p className='email'>
							{' '}
							<AiOutlineMail style={{ color: '#fcd201' }} />
							<a href='mailto:ieifeanyichukwu@gmail.com'>
								ieifeanyichukwu@gmail.com
							</a>
						</p>
						<p className='location'>
							{' '}
							<GoLocation style={{ color: '#fcd201' }} /> Lagos, Nigeria{' '}
						</p>
					</div>
					<div className='col-md-6'>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
