import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


function Contact() {
  const handleSubmit = () => {};
  return (
    <div className="bg-primaryBg md:pb-20 pb-10">
      <h1 className="md:text-mdHeading text-phoneHeading font-bebas text-center text-primaryTextColor">Contact</h1>
      <div className="text-secondaryTextColor m-auto md:w-2/4 w-[90%]">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-y-3">
          <input className="bg-secondaryTextColor outline-none text-gray-800 placeholder:text-gray-700 placeholder:text-base font-semibold text-lg rounded-sm p-2" placeholder="Name" type="text"  required/>
          <input className="bg-secondaryTextColor outline-none text-gray-800 placeholder:text-gray-700 placeholder:text-base font-semibold text-lg rounded-sm p-2" placeholder="Email" type="email"  required/>
          <textarea className="bg-secondaryTextColor resize-none  outline-none text-gray-800 placeholder:text-gray-700 placeholder:text-base font-semibold text-lg rounded-sm p-2" rows="4" placeholder="Message" name="" id="" required></textarea>
          <Button className="px-20 py-1 m-auto text-xl flex justify-between gap-x-4">Send <FontAwesomeIcon color="#CB450C" icon={faPaperPlane} /></Button>
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default Contact;
