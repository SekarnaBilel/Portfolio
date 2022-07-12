import React from "react";
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from "react";



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bo5n3im', 'template_aten9xg', form.current, 'ETgr6uQt3CI6yhYgP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesone">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blurl" style={{ background: "ABF1FF94" }}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user" placeholder="Name" />
            <input type="email" name="user_email" className="user" placeholder="Email" />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
