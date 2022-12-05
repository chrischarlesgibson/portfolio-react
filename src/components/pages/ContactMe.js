import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/contactMe.css";
import { init } from "@emailjs/browser";
init("REACT_APP_EMAILJS_USER_ID");

export default function ContactMe() {
  // const emailErrorMessage = document.querySelector("#invalid-email");
  // const nameErrorMessage = document.querySelector("#invalid-name");
  // const messageErrorMessage = document.querySelector("#invalid-message");
  const form = useRef();
  // const emailErrorMessage = useRef();
  // const nameErrorMessage = useRef();
  // const messageErrorMessage = useRef();

  const [contactFormData, setContactFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const { register, handleSubmit, errors } = useForm({
    defaultValues: contactFormData,
  });
  const handleChange = (e) =>
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  console.log("state changed", contactFormData);

  // if (contactFormData.name === "") {
  //   nameErrorMessage.classList.remove("is-hidden");
  // } else if (contactFormData.email === "") {
  //   emailErrorMessage.classList.remove("is-hidden");
  // } else if (contactFormData.message === "") {
  //   messageErrorMessage.classList.remove("is-hidden");
  // }

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
                name="name"
                className="input "
                type="text"
                placeholder="Your Name"
                onChange={handleChange}
                value={contactFormData.name}
                {...register("name", {
                  required: "name required.",
                  minLength: {
                    value: 2,
                    message: "name should be at-least 2 characters.",
                  },
                })}
              />
              {errors.name && <p className="errorMsg">{errors.name.message}</p>}
              <span id="invalid-name" className="help is-danger is-hidden">
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
                name="email"
                className="input "
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={contactFormData.email}
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}

              <span id="invalid-email" className="help is-danger is-hidden">
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
                name="message"
                className="textarea"
                placeholder="Enter message..."
                onChange={handleChange}
                value={contactFormData.message}
                {...register("message", {
                  required: "message required.",
                  minLength: {
                    value: 5,
                    message: "message must be at least 5 characters long.",
                  },
                })}
              >
                {errors.message && (
                  <p className="errorMsg">{errors.message.message}</p>
                )}
              </textarea>

              <span id="invalid-message" className="help is-danger is-hidden">
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
              <button id="message-button" className="button " type="submit">
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
