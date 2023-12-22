"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

export const ContactPreview = () => {
  const form = useRef();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // make sure all parts of form are completed, otherwise show error
    if (
      document.getElementById("name").value === "" ||
      document.getElementById("email").value === "" ||
      document.getElementById("message").value === ""
    ) {
      alert("Unable to submit. Please fill out all parts of the form.");
    } else {
      emailjs
        .sendForm("test", "template_yq6oa1j", form.current, "DJvHoVWDs8dtvq1j4")
        .then(
          () => {
            alert("Email successfully sent");
          },
          (error) => {
            alert("Email failed to send. " + error.text);
          }
        );

      setName("");
      setEmail("");
      setMessage("");
    }

    router.refresh();
  };

  return (
    <form ref={form} onSubmit={handleSubmit} id="contact-form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        name="user_name"
        id="name"
        type="text"
      ></input>
      <br></br>
      <br></br>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        name="user_email"
        id="email"
        type="email"
      ></input>
      <br></br>
      <br></br>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="ta"
        name="message"
        placeholder="Message"
      ></textarea>
      <br></br>
      <br></br>
      <input className="submit" type="submit" value="Send"></input>
    </form>
  );
};

export default ContactPreview;
