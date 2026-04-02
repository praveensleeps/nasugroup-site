import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-50 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="Office background"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Building Your Future
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
        We connect exceptional talent to work on leading cutting edge technology and build innovative products to make the future fantastic helping organizations thrive and professionals advance their careers. 
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Contact US
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;