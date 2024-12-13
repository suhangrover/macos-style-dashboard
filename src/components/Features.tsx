import React from 'react';
import { Code, Users, Calendar, Laptop } from 'lucide-react';

const features = [
  {
    name: 'Coding Workshops',
    description: 'Learn programming through hands-on workshops led by experienced mentors.',
    icon: Code,
  },
  {
    name: 'Community Events',
    description: 'Connect with fellow tech enthusiasts in regular meetups and hackathons.',
    icon: Users,
  },
  {
    name: 'Tech Talks',
    description: 'Stay updated with the latest in technology through expert presentations.',
    icon: Calendar,
  },
  {
    name: 'Project Building',
    description: 'Work on real projects and build your portfolio with team collaboration.',
    icon: Laptop,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">What we offer</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to grow in tech
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}