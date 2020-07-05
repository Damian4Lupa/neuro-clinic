import React from "react";

function ContactForm() {
  return (
    <form id="contact-form" action="" method="post" role="form" className="contactForm">
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control br-radius-zero"
          id="name"
          placeholder="Your Name"
          data-rule="minlen:4"
          // data-msg="Please enter at least 4 chars"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control br-radius-zero"
          name="email"
          id="email"
          placeholder="Your Email"
          data-rule="email"
          // data-msg="Please enter a valid email"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control br-radius-zero"
          name="subject"
          id="subject"
          placeholder="Subject"
          data-rule="minlen:4"
          // data-msg="Please enter at least 8 chars of subject"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control br-radius-zero"
          name="message"
          rows="7"
          data-rule="required"
          // data-msg="Please write something for us"
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
