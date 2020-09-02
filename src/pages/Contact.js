import React from "react";

import "../styles/pages/Contact.css";

import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <article className="home-section-top">
          <div className="row">
            <div className="col-6">
              <Map />
            </div>
            <div className="col-6">
              <ContactForm />
            </div>
          </div>
        </article>

        <article className="row">
          <div className="home-section">
            <ContactCard />
          </div>
        </article>
        
      </div>
    </section>
  );
}

export default Contact;
