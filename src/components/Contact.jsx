import React, { useRef, useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useScrollAnimations} from "../custom_hooks/useScrollAnimations"

function Contact() {
  const form = useRef();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const clearFields=()=>{
    setName("");
    setEmail("");
    setMessage("");
  }

  const success = () => {
    toast.success("Successfully sent", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const failed = () => {
    toast.error("Failed to sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_ID
      )
      .then(
        (resut) => {
          // console.log("successfully sent email", resut.text);
          success();
          clearFields();
        },
        (error) => {
          console.log("Failed", error);
          failed();
        }
      );
  };

  useScrollAnimations();

  return (
    <div id="contact" className="bg-primaryBg md:pb-20 pb-10">
      <h1 className="animate-on-scroll md:text-mdHeading text-phoneHeading font-bebas text-center text-primaryTextColor">
        Contact
      </h1>
      <div className="animate-on-scroll text-secondaryTextColor m-auto md:w-2/4 w-[90%]">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col justify-between gap-y-3"
        >
          <input
            className="bg-secondaryTextColor outline-none text-gray-800 placeholder:text-gray-700 placeholder:text-base font-semibold text-lg rounded-sm p-2"
            placeholder="Name"
            value={name}
            type="text"
            name="user_name"
            required
          />
          <input
            className="bg-secondaryTextColor outline-none text-gray-800 placeholder:text-gray-700 placeholder:text-base font-semibold text-lg rounded-sm p-2"
            placeholder="Email"
            value={email}
            type="email"
            name="user_email"
            required
          />
          <textarea
            className="bg-secondaryTextColor resize-none  outline-none text-gray-800 placeholder:text-gray-700 placeholder:text-base font-semibold text-lg rounded-sm p-2"
            rows="4"
            placeholder="Message"
            value={message}
            name="message"
            id=""
            required
          ></textarea>
          <Button
            className="px-20 py-1 m-auto text-xl flex justify-between gap-x-4"
            type="submit"
            value="Send"
          >
            Send <FontAwesomeIcon color="#CB450C" icon={faPaperPlane} />
          </Button>
        </form>
      </div>
      {/* toast */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
