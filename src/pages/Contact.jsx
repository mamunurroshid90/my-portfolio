import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className=" px-[10px]">
      <div className="max-w-container mx-auto py-12 px-10 h-[80vh]">
        <h1 className="text-[50px] text-center font-roboto font-bold uppercase text-white leading-normal">
          get in <span className=" text-yellow-400">touch</span>
        </h1>
        <div className=" mt-10 flex items-start gap-10 justify-between">
          <div className=" w-[400px]">
            <h2 className=" text-3xl text-white font-roboto uppercase font-bold">
              DON'T BE SHY !
            </h2>
            <p className=" text-lg font-roboto font-medium text-white mt-5 w-full">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className=" mt-5">
              <div className="flex items-start gap-5">
                <FaMapLocation className="text-yellow-400 text-3xl" />
                <div>
                  <p className=" text-base font-roboto uppercase text-[#D4B787]">
                    address point
                  </p>
                  <p className=" text-base font-roboto text-white capitalize">
                    151 Fatema-Manjil, Nakhal Para, tejgaon, Dhaka-1215
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-5 mt-6">
                <IoMailUnread className="text-yellow-400 text-3xl" />
                <div>
                  <p className=" text-base font-roboto uppercase text-[#D4B787]">
                    mail me
                  </p>
                  <p className=" text-base font-roboto text-white">
                    nijummamun7@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 mt-6">
                <FaPhoneSquareAlt className="text-yellow-400 text-3xl" />
                <div>
                  <p className=" text-base font-roboto text-[#D4B787] uppercase">
                    call me
                  </p>
                  <p className="text-base font-roboto text-white">
                    +880 1761700244
                  </p>
                </div>
              </div>
              <div className=" mt-8 flex items-center gap-5">
                <Link
                  className="w-[50px] h-[50px] rounded-full bg-[#383838] flex hover:bg-yellow-400"
                  to="https://www.facebook.com/mamunroshid93"
                  target="_blank"
                >
                  <FaFacebook className=" text-white text-2xl m-auto" />
                </Link>
                <Link
                  className="w-[50px] h-[50px] rounded-full bg-[#383838] flex hover:bg-yellow-400"
                  to="https://twitter.com/roshidmamun9090"
                  target="_blank"
                >
                  <FaTwitter className=" text-white text-2xl m-auto" />
                </Link>
                <Link
                  className="w-[50px] h-[50px] rounded-full bg-[#383838] flex hover:bg-yellow-400"
                  to="https://www.linkedin.com/in/mamunroshid/"
                  target="_blank"
                >
                  <FaLinkedin className=" text-white text-2xl m-auto" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[800px] mx-auto">
            <form action="">
              <div>
                <div className="flex items-center justify-between gap-5">
                  <div className=" w-[350px]">
                    <input
                      type="text"
                      name="name"
                      placeholder="YOUR NAME"
                      className="w-full px-4 py-3 rounded-full text-white text-lg font-roboto bg-[#383838] placeholder:text-lg placeholder:font-roboto placeholder:text-[#757575] placeholder:font-semibold"
                    />
                  </div>
                  <div className="w-[350px]">
                    <input
                      type="email"
                      name="email"
                      placeholder="YOUR EMAIL"
                      className="w-full px-4 py-3 rounded-full text-white text-lg font-roboto bg-[#383838] placeholder:text-lg placeholder:font-roboto placeholder:text-[#757575] placeholder:font-semibold"
                    />
                  </div>
                </div>
                <div className="mt-9">
                  <input
                    type="text"
                    name="subject"
                    placeholder="YOUR SUBJECT"
                    className="w-full px-4 py-3 rounded-full text-white text-lg font-roboto bg-[#383838] placeholder:text-lg placeholder:font-roboto placeholder:text-[#757575] placeholder:font-semibold"
                  />
                </div>
                <div className="mt-9">
                  <textarea
                    name="message"
                    id=""
                    placeholder="YOUR MESSAGE"
                    className="w-full px-4 py-3 rounded-lg h-[200px] font-roboto text-white text-lg bg-[#383838] placeholder:text-lg placeholder:font-roboto placeholder:text-[#757575] placeholder:font-semibold"
                  ></textarea>
                  <div className="w-[220px] mt-9 h-[50px] ">
                    <Link className=" pl-6 h-full hover:bg-yellow-400 transition-all duration-300 text-white border border-yellow-400 rounded-full uppercase font-bold font-roboto flex items-center justify-between gap-4">
                      send message{" "}
                      <div>
                        <BsFillSendFill className=" text-2xl overflow-hidden font-bold bg-yellow-400 h-full w-[50px] inline-block rounded-full" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
