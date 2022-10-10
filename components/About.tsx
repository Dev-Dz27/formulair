import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col px-4 py-28 bg-[#1f2428] text-white ">
      <div className="my-8  mx-4 lg:flex ">
        <div className="mb-12  space-y-8 text-center lg:w-[45%] lg:pt-8">
        <h2 className="text-4xl font-bold uppercase  mb-2   ">HOW TO FIND US</h2>
        </div>
        <div className="lg:w-[45%] text-center">

        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio incidunt ex, facere neque eum aliquid similique veniam sint eveniet unde exercitationem architecto commodi excepturi voluptate officiis laboriosam temporibus dolore blanditiis cum corrupti amet vero mollitia? Tempora nostrum veniam odit expedita libero nesciunt odio suscipit aliquid impedit accusantium rerum, aut consequuntur.
        </p>
        </div>
        {/* <Image
          src="https://images.unsplash.com/photo-1592401807554-4a13cd4b3225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="/"
          layout="responsive"
          width="640"
          height="426"
        /> */}
      </div>

      <div id="map" className=" w-full px-4">
        <iframe
        className="border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7961549095876!2d-0.5592457498762299!3d35.70663358009118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58b688b74a099e3b!2zMzXCsDQyJzIzLjkiTiAwwrAzMycyNS40Ilc!5e0!3m2!1sen!2sdz!4v1665397488678!5m2!1sen!2sdz"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
