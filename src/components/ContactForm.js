import React, {useState} from 'react';
import emailjs from 'emailjs-com';

export const ContactForm = () => {
    const [status, setStatus] = useState(undefined);

    const sendEmail =(e)=> {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
            // console.log(result.text);
            setStatus({type: 'success'});
            setTimeout(() => {
                setStatus({type: 'success'});
                setStatus(undefined);
            }, 3000);
        }, (error) => {
            // console.log(error.text);
            setStatus({type: 'error', error})
            setTimeout(() => {
                setStatus({type: 'error', error});
                setStatus(undefined);
            }, 3000);
        });
        e.target.reset()
    }

    // const serviceID = process.env.REACT_APP_SERVICE_ID
    // const templateID = process.env.REACT_APP_TEMPLATE_ID
    // const userID = process.env.REACT_APP_USER_ID

    // const sendEmailSec =async(e)=> {
    //     e.preventDefault();
    //     try {
    //         const res = await emailjs.sendForm(serviceID, templateID, e.target, userID)
    //         console.log(res.text)
    //         setStatus({type: 'success'});
    //         setTimeout(() => {
    //             setStatus({type: 'success'});
    //             setStatus(undefined);
    //         }, 3000);
    //     } catch (err) {
    //         console.log(err.text)
    //         setStatus({type: 'error', err})
    //         setTimeout(() => {
    //             setStatus({type: 'error', err});
    //             setStatus(undefined);
    //         }, 3000);
    //     }
    //     e.target.reset()
    // }
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
            <input type='submit' className='btn' value='Submit' style={{padding: '3px 15px', fontSize: '20px', width: '100%'}} id='submit-btn'/>
        </form>
        {status?.type ==='success' && (
            <div className="alert alert-success" role="alert" >
                Message sent
            </div>
        )}
        {status?.type ==='error' && (
            <div className="alert alert-danger" role="alert" >
                Service temporary unavailable
            </div>
        )}
        </>
    )
}
