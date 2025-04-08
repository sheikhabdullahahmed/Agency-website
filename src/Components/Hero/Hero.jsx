import React from 'react';
import { Carousel } from 'flowbite-react';
import pic5 from '../../assets/pic5.svg';
import pic3 from '../../assets/pic3.svg';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <>
      <div className='overflow-hidden'>
        <div className="px-5 lg:px-14 max-w-screen-xl mx-auto min-h-screen h-screen">
          <Carousel className="w-full mx-auto">
            {/* Slide 1 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
              <div className="w-full md:w-full flex justify-center">
                <img
                  src={pic5}
                  alt="Learn and Earn"
                  className="w-full max-w-md h-auto object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl text-blue-950 font-bold mb-4 leading-tight 
                dark:text-white">
                  Master Real Estate: Learn and Earn
                  <span className="text-lime-500 block sm:inline dark:text-lime-400"> from 8 Years</span>
                </h1>
                <p className="text-base md:text-xl text-gray-600 mb-7 md:mb-6 dark:text-gray-300">
                  Unlock The Potential Of Real Estate By Learning The Market And Investment Strategies.
                </p>
                <button
                  className="px-6 py-2 font-semibold sm:px-7 sm:py-3 bg-green-500 text-white rounded 
                  transition-all duration-300 transform hover:-translate-y-1"
                  onClick={handleNavigate}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-5 md:gap-12">
              <div className="w-full md:w-full flex justify-center">
                <img
                  src={pic3}
                  alt="Learn and Earn"
                  className="w-full max-w-md h-auto object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/2 lg:w-2/2 text-center md:text-left">
                <h1 className="text-4xl text-blue-950 sm:text-4xl md:text-5xl font-bold mb-3 leading-tight 
                dark:text-white">
                  Learn, Invest with Real Estate
                  <span className="text-lime-500 block sm:inline dark:text-lime-400"> In 4 Months</span>
                </h1>
                <p className="text-base text-gray-600 md:text-xl mb-7 md:mb-5 dark:text-gray-300">
                  Real estate offers a powerful way to grow your wealth. By learning the basics of the market.
                </p>
                <button
                  className="px-6 py-2 font-semibold sm:px-7 sm:py-3 bg-green-500 text-white rounded 
                  transition-all duration-300 transform hover:-translate-y-1"
                  onClick={handleNavigate}
                >
                  Learn More
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}








































