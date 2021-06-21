import React, {useState} from 'react';
import emailjs from 'emailjs-com';

export const ContactForm = () => {
    const [status, setStatus] = useState(undefined);

    const sendEmail =(e)=> {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            setStatus({type: 'success'});
        }, (error) => {
            console.log(error.text);
            setStatus({type: 'error', error})
        });
        e.target.reset()
    }
    return (
        <>
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
            <input type='submit' className='btn btn-primary' value='Submit' style={{padding: '3px 15px'}} id='submit-btn'/>
        </form>
        {status?.type ==='success' && (
            <div className="alert alert-success" role="alert" >
                Message sent
            </div>
        )}
        {status?.type ==='error' && (
            <div className="alert alert-danger" role="alert" >
                Message failed to send
            </div>
        )}
        </>
    )
}
