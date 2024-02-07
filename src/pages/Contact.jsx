import React, { useState } from "react";
import { FaMapLocation } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
const FORM_ENDPOINT = "https://herotofu.com/start";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <motion.section
      className=" px-[10px]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="max-w-container mx-auto py-5 px-10 h-[100vh]">
        <h2 className=" font-dancing text-3xl uppercase dark:text-white text-center">
          contact
        </h2>
        <div className=" mt-10 flex items-start gap-10 justify-between">
          <div className=" w-[400px]">
            <h2 className=" text-2xl dark:text-white font-roboto uppercase font-bold">
              contact info
            </h2>
            <div className=" mt-10">
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-5 rounded-lg">
                  <FaMapLocation className="text-yellow-400 text-3xl" />
                </div>
                <div>
                  <p className=" text-base font-roboto uppercase text-[#D4B787]">
                    address point
                  </p>
                  <p className=" text-base font-roboto dark:text-white capitalize">
                    151 Fatema-Manjil, Nakhal Para, tejgaon, Dhaka-1215
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-5 mt-6">
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-5 rounded-lg">
                  <IoMailUnread className="text-yellow-400 text-3xl" />
                </div>
                <div>
                  <p className=" text-base font-roboto uppercase text-[#D4B787]">
                    mail me
                  </p>
                  <p className=" text-base font-roboto dark:text-white">
                    nijummamun7@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 mt-6">
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-5 rounded-lg">
                  <FaPhoneSquareAlt className="text-yellow-400 text-3xl" />
                </div>
                <div>
                  <p className=" text-base font-roboto text-[#D4B787] uppercase">
                    call me
                  </p>
                  <p className="text-base font-roboto dark:text-white">
                    +880 1761700244
                  </p>
                </div>
              </div>
              <div className=" mt-10">
                <h2 className=" text-lg dark:text-white font-roboto uppercase font-medium">
                  social info
                </h2>
                <div className=" mt-4 flex items-center gap-10">
                  <div className="bg-gradient-to-bl from-gray-900 to-gray-600 hover:to-yellow-400 transition-all duration-700 p-6 rounded-full cursor-pointer">
                    <Link
                      className=" text-xl dark:text-white"
                      to="https://www.facebook.com/mamunroshid93"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="bg-gradient-to-bl from-gray-900 to-gray-600 hover:to-yellow-400 transition-all duration-700 p-6 rounded-full cursor-pointer">
                    <Link
                      className="text-xl dark:text-white"
                      to="https://twitter.com/roshidmamun9090"
                      target="_blank"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="bg-gradient-to-bl from-gray-900 to-gray-600 hover:to-yellow-400 transition-all duration-700 p-6 rounded-full cursor-pointer">
                    <Link
                      className="text-xl dark:text-white"
                      to="https://www.linkedin.com/in/mamunroshid/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[800px] mx-auto bg-gradient-to-r from-gray-700 via-gray-900 to-black pl-14 pt-4 pr-14 pb-10 rounded-lg">
            <SectionHeading heading={"Let's work"} span={"together."} />
            <form
              action={
                "https://herotofu.com/29029530-c0db-11ee-8a5f-35bf60ac4fde"
              }
              onSubmit={handleSubmit}
              method="POST"
            >
              <div className="pt-6 mb-3">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="focus:outline-none relative w-full px-4 py-4 text-md dark:text-white placeholder-gray-40 bg-inherit border border-gray-600 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="focus:outline-none relative w-full px-4 py-4 text-md dark:text-white placeholder-gray-40 bg-inherit border border-gray-600 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-3">
                <input
                  type="text"
                  placeholder="Your subject"
                  name="subject"
                  className="focus:outline-none relative w-full px-4 py-4 text-md dark:text-white placeholder-gray-40 bg-inherit border border-gray-600 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-3">
                <textarea
                  placeholder="Your message"
                  name="message"
                  className="focus:outline-none relative w-full px-4 py-4 text-md dark:text-white placeholder-gray-40 bg-inherit border border-gray-600 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="">
                <button type="submit">
                  <a
                    href="#_"
                    class="relative inline-flex items-center px-12 py-3 overflow-hidden text-md font-medium dark:text-white border border-gray-500 rounded hover:dark:text-white group hover:bg-gray-50"
                  >
                    <span class="absolute left-0 block w-full h-0 transition-all bg-yellow-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="relative uppercase">send message</span>
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

/* 

import React, { useState } from "react";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold dark:text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

*/

export default Contact;
