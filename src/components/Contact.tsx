import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              Feel free to email us for your queries.
            </p>
            <div className="mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🇺🇸 
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">For US Job opportunities</h3>
                  <p className="text-base text-gray-500">
                    uscareers@nasugroup.com
                    <p className="text-base text-gray-500">
                    📍 Newark, CA, USA
                    </p>
                  </p>
                </div>
                
              </div>
            </div>

            <div className="mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🇮🇳 
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">For  India Job opportunities</h3>
                  <p className="text-base text-gray-500">
                    careers@nasugroup.com
                    <p className="text-base text-gray-500">
                    📍 Bangalore,India
                    </p>
                  </p>
                </div>
             
              </div>
            </div>

          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;