import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'Club President',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    bio: 'Computer Science enthusiast with a passion for AI and machine learning.',
  },
  {
    name: 'David Kumar',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    bio: 'Full-stack developer and competitive programming champion.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    bio: 'Organizing tech events and fostering community engagement.',
  },
];

export default function Team() {
  return (
    <div className="bg-gray-50 py-16" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-4 text-lg text-gray-500">
            Meet the passionate individuals leading Byte Club
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-56 object-cover" src={member.image} alt={member.name} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600">{member.role}</p>
                <p className="mt-3 text-gray-500">{member.bio}</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}