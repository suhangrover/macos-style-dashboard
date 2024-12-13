import React from 'react';

const projects = [
  {
    title: 'AI Chat Bot',
    description: 'A machine learning powered chatbot that helps students with programming queries.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Smart Campus',
    description: 'IoT-based solution for monitoring and managing school resources efficiently.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Study Buddy',
    description: 'A collaborative learning platform for students to connect and study together.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-100 py-12" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Check out some of the amazing projects built by our members
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="bg-white overflow-hidden shadow-lg rounded-lg">
                <div className="relative h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <a href="#" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
                    Learn more
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}