import Image from "next/image";
import React, {useState, FormEvent} from "react";
import Data from "../seeds/data.json";
import Email from "../public/email.png";
import mobile from "../public/mobile.png";

import moment from "moment";


const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");

const DateNow = moment().format("MMMM Do YYYY, h:mm:ss a");
  
  const [loading, setLoading] = useState(false);
//   const { username, email, message } = formData;

  const handleChangeInput = () => {
    
  }
//   const handleSubmit = () => {

//   }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
      message,
      DateNow,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    //when done
    const content = await response.json();
    alert(content.data.tableRange);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsFormSubmitted(true);
  };


  return (
    <div className="flex flex-col mx-auto text-center ">

    <div className="flex  items-center justify-center flex-wrap mt-24   w-full ">
      {/* <h2 className="text-4xl">Take a coffee & chat with me</h2> */}
      {/* <div className="absolute  top-0 left-0 right-0 bottom-0 bg-black/75 z-[2]" /> */}
      <div className="text-white lg:flex  lg:gap-16  md:flex md:gap-10  z-[2] ">
        <div className="min-w-[290px]  flex flex-row  justify-start items-center my-4 p-3 md:my-5 md:p-5 lg:my-5 lg:p-6 rounded-[10px] cursor-pointer ease-in-out duration-300 bg-red-300/80 hover:bg-red-400/80 ">
          <Image
            src={Email}
            width="35"
            height="35"
            className="mx-3"
            alt="email"
          />
          <a
            href="mailto:hello@micael.com"
            className="text-sm text-gray-800 ml-4"
          >
            dzignstore31@gmail.com
          </a>
          <div className=""></div>
        </div>
        <div className="min-w-[290px] flex flex-row justify-start items-center my-4 p-3 md:my-5 md:p-5  lg:my-5 lg:p-6 rounded-[10px] cursor-pointer ease-in-out duration-300 bg-slate-300/80 hover:bg-slate-400 ">
          <Image
            src={mobile}
            width="35"
            height="35"
            className="mx-3"
            alt="email"
          />
          <a
            href="mailto:hello@micael.com"
            className="text-sm text-gray-800 ml-4"
          >
            0672375429 / 0698477847
          </a>
        </div>
      </div>
     
      </div>

       {/* Form */}
       
      

    
    </div>
  );
};

export default Contact;
