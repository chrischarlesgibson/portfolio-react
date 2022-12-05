import React from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/contactMe.css";

export default function ContactMe() {
  return (
    <div id="contact-form-container">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">From</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input className="input " type="text" placeholder="Name" />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="email"
                placeholder="Email"
              />
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
          <label className="label">Subject</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input is-danger"
                type="text"
                placeholder="e.g. Partnership opportunity"
              />
            </div>
            <p className="help is-danger">This field is required</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Question</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Explain how we can help you"
              ></textarea>
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
              <button id="message-button" className="button ">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
