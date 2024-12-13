import React from 'react';
import { Book, Code2, Video, FileText } from 'lucide-react';

const resources = [
  {
    title: 'Learning Materials',
    description: 'Access our curated collection of programming tutorials, documentation, and guides.',
    icon: Book,
    link: '#',
  },
  {
    title: 'Code Repository',
    description: 'Explore our GitHub repositories with project templates and examples.',
    icon: Code2,
    link: '#',
  },
  {
    title: 'Workshop Recordings',
    description: 'Watch recordings of our past workshops and technical sessions.',
    icon: Video,
    link: '#',
  },
  {
    title: 'Study Materials',
    description: 'Download presentation slides and practice problems.',
    icon: FileText,
    link: '#',
  },
];

export default function Resources() {
  return (
    <div className="bg-white py-16" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Club Resources</h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to excel in your tech journey
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                <resource.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
              <p className="mt-2 text-gray-500">{resource.description}</p>
              <a
                href={resource.link}
                className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
              >
                Access Resource
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}