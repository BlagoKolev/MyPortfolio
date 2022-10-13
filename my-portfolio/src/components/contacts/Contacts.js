import './contacts.css';
import { MdOutlineMail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contacts() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kws7z4r', 'template_4ue2zdj', form.current, '6Jq3f0zWtF94zo_-4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
            e.target.reset();
    };

    return <section id='contacts'>
        <h5>Get In Touch</h5>
        <h2> Contact Me</h2>

        <div className='container contact__container'>
            <div className="contact__options">

                <article className='contact__option'>
                    <MdOutlineMail className='contact__option-icon' />
                    <h4>Email</h4>
                    <h5>blagovest.kolev@gmail.com</h5>
                    <a href='mailto:blagovest.kolev@gmail.com'>Send me an E-mail</a>
                </article>

                <article className='contact__option'>
                    <BsMessenger className='contact__option-icon' />
                    <h4>Messenger</h4>
                    <h5>Blagovest Kolev</h5>
                    <a href='https://m.me/blagovest.kolev.7' target='_blank'>Send me a Message</a>
                </article>

            </div>
            {/* END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Your Name' required />
                <input type='email' name='email' placeholder='Your Email' required />
                <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
}


export default Contacts;