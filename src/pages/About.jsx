import React, { useEffect, useRef } from "react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";

const About = () => {
  const logoRefs = useRef([]);

  useEffect(() => {
    logoRefs.current.forEach((el) => {
      if (!el) return;

   
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          y: -20,        
          duration: 1.5,
          repeat: -1,    
          yoyo: true,    
          ease: "power1.inOut"
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          y: 0,           
          duration: 0.6,
          repeat: 0
        });
      });
    });
  }, []);

  return (
    <>
      {/* About WAWA Cooperate Club */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            
            {/* Left: Image */}
            <div className="md:w-1/2">
       {/* <video 
          src="./src/assets/video3.mp4"
          className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          controls
          autoPlay
          muted
          loop
        ></video> */}
        <iframe 
        className="rounded-lg shadow-lg object-cover w-full h-[400px]"
        src="https://www.youtube.com/embed/7zrpTSk-iw0?si=HI8el7iDeDs88Fmn" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
            </div>

            {/* Right: Text */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
                About WAWA Cooperate Club
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-700 dark:text-gray-300">
                Over the past year, Wawa Cooperation Club has made significant strides in improving the lives of orphans 
                and supporting local communities. We have successfully organized over 10 community events, raising more 
                than $50,000 for healthcare and educational initiatives.
              </p>
              <p className="mb-8 text-lg font-normal text-gray-700 dark:text-gray-300">
                Our partnerships with local organizations have enabled us to share resources effectively, ensuring that 
                our efforts lead to sustainable change. Through our collective dedication, we have empowered numerous 
                orphans to pursue their dreams and contribute positively to society.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className=" bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-black text-3xl font-bold mb-12">Who We Serve</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 ">
            
            {/* Logo 1 */}
            <img 
              ref={(el) => (logoRefs.current[0] = el)}
              src="/assets/short1.png"
              alt="Mintly"
              className="h-24 cursor-pointer text-white"
            />

            {/* Logo 2 */}
            <img
              ref={(el) => (logoRefs.current[1] = el)}
              src="/assets/short3.png"
              alt="Snowflake"
              className="h-24 cursor-pointer"
            />

            {/* Logo 3 */}
            <img
              ref={(el) => (logoRefs.current[2] = el)}
              src="./assets/short5.png"
              alt="Recharge"
              className="h-24 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Leader */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center ">
             <a href="/Profile"> <img 
                src="/assets/profile7.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Ifeanyi Eze</h3>
              <p className="text-gray-600">President</p>
                       <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
               <a href="/Profile"> <img 
                src="/assets/profile1.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Okechukwu Ndubuisi</h3>
              <p className="text-gray-600">Vice president</p>  
               <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center"> 
                <a href="/Profile"> <img 
                src="/assets/profile5.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Chinedu Alumona</h3>
              <p className="text-gray-600"> Secretary</p>
               <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center"> 
                <a href="/Profile"> <img 
                src="/assets/profile2.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Ernest Asogwa</h3>
              <p className="text-gray-600">CFO Outreach</p>
                <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
             <div className="bg-white rounded-lg shadow-lg p-6 text-center"> 
               <a href="/Profile"> <img 
                src="/assets/profile8.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Ikechukwu Udechi</h3>
              <p className="text-gray-600"> Assistant Sec.</p>
               <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
             <div className="bg-white rounded-lg shadow-lg p-6 text-center"> 
              <a href="/Profile"><img
                src="/assets/Screenshot (280).png"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Fred Ekete</h3>
              <p className="text-gray-600"> Founder & Diaspora</p>
               <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
             <div className="bg-white rounded-lg shadow-lg p-6 text-center"> 
              <a href="/Profile"> <img 
                src="/assets/profile4.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Nzekwe Maxwell </h3>
              <p className="text-gray-600"> Digital </p>
               <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center"> 
              <a href="/Profile"> <img 
                src="/assets/pro3.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Obinna Okeke</h3>
              <p className="text-gray-600">  PRO</p>
               <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center"> 
              <a href="/Profile"> <img 
                src="/assets/profile1.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Ikechukwu Okolo</h3>
              <p className="text-gray-600">Member</p>
               <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center"> 
              <a href="/Profile"> <img 
                src="/assets/profile6.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2"> Felix Ogwudile  </h3>
              <p className="text-gray-600"> Diaspora</p>
               <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center"> 
             <a href="/Profile"> <img 
                src="/assets/profile9.jpg"
                alt="Leader"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
              /></a>
              <h3 className="text-xl font-semibold mb-2">Chukwuemeka Ude </h3>
              <p className="text-gray-600"> Member</p>
               <div class="flex mt-4 sm:justify-center  space-x-6  sm:mt-0">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
                        <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
