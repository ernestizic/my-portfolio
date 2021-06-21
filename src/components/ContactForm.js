import React from 'react';
import emailjs from 'emailjs-com';

export const ContactForm = () => {

    const sendEmail =(e)=> {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <form onSubmit={sendEmail}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" name="name" />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" name="email" required/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Subject" name="subject" />
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder='Message' name='message' rows="5" required/>
            </div>
            <input type='submit' className='btn btn-primary' value='submit' style={{padding: '3px 15px'}}/>
        </form>
    )
}
