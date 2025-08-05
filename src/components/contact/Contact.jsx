import React from "react";

function Contact() {
  return (
    <div className="contact-div">
      <div id="background-contact">
        <div className="contact-div-1">
          <h2>I need Support</h2>
          <p>
            We Are Here For You — Whatever you're facing, we talk about it. You
            can talk to us about anything.
          </p>
        </div>
        <div className="contact-div-2">
          <input className="input-field" placeholder="write your problems" />
          <button id="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
