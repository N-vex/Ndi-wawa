import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className=" text-white min-h-screen py-12 px-6">
      {/* First Section: Contact Us */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
        <p className="text-gray-600 mb-8">
          We are here to meet any need of your choice!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-white text-black shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaPhone className="text-3xl text-blue-500 mb-3" />
            <h3 className="font-semibold">Call Us</h3>
            <p>+ (234) 803-758-629-7</p>
            <p>+ (234) --- ---</p>
          </div>

          {/* Location */}
          <div className="bg-white text-black shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl text-green-500 mb-3" />
            <h3 className="font-semibold">Location</h3>
            <p>Number 34 Olukole street Masha, Surulere, Lagos.</p>
            <p>We await your arrival</p>
          </div>

          {/* Hours */}
          <div className="bg-white text-black shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaClock className="text-3xl text-orange-500 mb-3" />
            <h3 className="font-semibold">Hours</h3>
            <p>Every last Saturday of the month</p>
            <p>Time: 6 pm - 10 pm</p>
          </div>
        </div>
      </section>

      {/* Second Section: Social Platforms */}
      <section className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Where We Can Be Found On Social Platforms</h2>
        <p className="text-gray-600 mb-8">Follow us and stay updated!</p>

        <div className="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
          <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
          <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
          <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
