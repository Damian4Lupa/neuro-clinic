import React from "react";

function ContactForm() {
  return (
    <form id="contact-form" className="contactForm">
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control br-radius-zero"
          id="name"
          placeholder="Your Name"
         
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control br-radius-zero"
          name="email"
          id="email"
          placeholder="Your Email"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control br-radius-zero"
          name="subject"
          id="subject"
          placeholder="Subject"

        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control br-radius-zero"
          name="message"
          rows="7"
          data-rule="required"
          placeholder="Message"
        ></textarea>
      </div>

      <div className="form-action">
        <button className="btn blue-btn float-right">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;
