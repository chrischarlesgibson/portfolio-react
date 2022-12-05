import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/contactMe.css";
import { init } from "@emailjs/browser";
init("REACT_APP_EMAILJS_USER_ID");

export default function ContactMe() {
  const form = useRef();

  const [contactFormData, setContactFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e) =>
    setContactFormData({ ...contactFormData, [e.target.id]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    // if (name && emailAddress && emailMessage) {

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setContactFormData({ email: "", name: "", message: "" });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="contact-form-container">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">From</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input
                className="input "
                type="text"
                placeholder="Your Name"
                onChange={handleChange}
                value={contactFormData.name}
              />
              <span className="help is-danger is-hidden">
                This field is required
              </span>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded has-icons-left has-icons-right">
              <input
                className="input "
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={contactFormData.email}
              />
              <span className="help is-danger is-hidden">
                Invalid email address
              </span>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Message</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Enter message..."
                onChange={handleChange}
                value={contactFormData.message}
              ></textarea>
              <span className="help is-danger is-hidden">
                This field is required
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <br />
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button
                id="message-button"
                className="button "
                type="submit"
                onClick={(e) => sendEmail(e)}
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </form>
  );
}
