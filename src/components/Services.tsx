import React from 'react';
import { Users, Briefcase, FileSearch, Building2 } from 'lucide-react';

const services = [
  // {
  //   title: 'Contract Hiring',
  //   description: 'We maintain a good pool of resources to cater to your dynamic needs and business uncertainty.',
  //   icon: Users,
  // },
  // {
  //   title: 'Permanent Hiring',
  //   description: 'Our executive team understands hiring needs better than anyone else, focusing on quality over quantity.',
  //   icon: Briefcase,
  // },
  {
    title: 'For Companies',
    description: 'We offer excellent technology solutions to leading companies. Backed by years of solutioning of complex applications our offerings includes business analysis,application engineering, testing, data engineering and full stack development.',
    icon: Building2,
  },
  {
    title: 'For Candidates  ',
    description: 'Confused about what path to take in your career? Confused about which company\'s offer to choose? With our deep industry expertise, we offer excellent career solutions to individuals. Send your  resume to careers@nasugroup.com',
    icon: Users,
  },
];

const Services = () => {
  return (
    <div className="py-24 bg-white" id="offerings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Offerings
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive recruitment solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;