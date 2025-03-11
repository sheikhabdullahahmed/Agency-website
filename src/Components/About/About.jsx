import React from 'react';
import Back from "../../Back.jsx";
import img from "../../assets/image1.jpg";
import Heading from "../../Heading.jsx";
import Footer from '../Footer/Footer.jsx';

function About() {
  return ( 
    <>
      <section className="overflow-hidden ">
        <div className="relative w-full h-[400px] flex items-center justify-start text-left text-white px-5 md:px-10">
          <img
            src="https://real-estate-website-sepia.vercel.app/static/media/about.b7b4b35551e7763eebae.jpg"
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="relative px-8 z-30">  {/* Adjusted z-index */}
            <h1 className="text-2xl font-semibold">About Us</h1>
            <p className="text-4xl font-bold mt-2">About Us - Who We Are?</p>
          </div>

        </div>

        {/* Content Section */}
        <div className="container mx-auto flex flex-col lg:flex-row gap-8 md:gap-10 mt-10 px-5">
          <div className="lg:w-1/2">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />
            <p className="text-base text-gray-600 leading-7 mb-5">
              At <strong>Prime Real State</strong>, we are dedicated to transforming digital ideas into reality. With a passion for innovation and a commitment to excellence, we specialize in providing top-notch digital solutions, including web development, branding, and marketing strategies.
            </p>
            <p className="text-base text-gray-600 leading-7 mb-5">
              With a focus on creativity, efficiency, and cutting-edge technology, we strive to create impactful digital experiences that leave a lasting impression. Join us on this journey, and let's build something extraordinary together! 🚀
            </p>
            <button className="px-6 py-2 transition-all duration-300 transform hover:-translate-y-1 font-semibold sm:px-7 sm:py-3 bg-green-500 text-white rounded">
              More About us
            </button>
          </div>
          <div className="lg:w-1/2">
            <img src={img} alt="Our Agency" className="w-full h-[400px] object-cover rounded-md shadow-lg" />
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <Footer className="mt-auto" />
    </>
  );
}

export default About;
