'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { ExternalLink, Github, Zap, Users, Code } from 'lucide-react';
// @ts-ignore - no type declarations for CSS side-effect import
import 'aos/dist/aos.css';


interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: React.ReactNode;
  demoLink: string;
  codeLink: string;
  stats: { label: string; value: string }[];
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NourishNet',
    description: 'Digital platform for streamlining food donation process for NGOs',
    longDescription: 'Developed a comprehensive digital platform to streamline food donation workflows for NGOs. Enabled management of donation requests, donors, and distribution efficiently. Implemented cloud-based backend and created user-friendly dashboards for donors and volunteers.',
    tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
    icon: '🍽️',
    demoLink: 'https://nourishnet.vercel.app',
    codeLink: 'https://github.com/Sanjaykumarbhupathi/nourishnet',
    stats: [
      { label: 'Timeline', value: 'Sept-Dec 2023' },
      { label: 'Type', value: 'NGO Platform' }
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 2,
    title: 'GrowConnect',
    description: 'Digital platform enabling farmers to sell crops directly to consumers',
    longDescription: 'Developed GrowConnect to enable direct crop sales between farmers and consumers, removing intermediaries and promoting fair pricing. Created intuitive interfaces for farmers and buyers with seamless crop listing and transaction management.',
    tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
    icon: '🌾',
    demoLink: 'https://github.com/Sanjaykumarbhupathi/mern-GrowConnect',
    codeLink: 'https://github.com/Sanjaykumarbhupathi/mern-GrowConnect',
    stats: [
      { label: 'Timeline', value: 'Jan-May 2023' },
      { label: 'Type', value: 'Marketplace' }
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Baby Suraksha',
    description: 'Smart Cradle System for enhanced baby safety and monitoring',
    longDescription: 'The Smart Cradle System is an IoT project that enhances the safety and comfort of traditional cradles by integrating sensors, mobile connectivity, and a user-friendly interface, allowing parents to monitor and control their baby s environment remotely.',
    tags: ['Raspberry pi', 'IOT', 'python', 'MQTT', 'Thingspeak', 'push bullet'],
    icon: '👶',
    demoLink: '#',
    codeLink: 'https://github.com/Sanjaykumarbhupathi',
    stats: [
      { label: 'Domain', value: 'IOT' },
      { label: 'Deployment', value: 'ThingSpeak' }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Recarnition of Dwaraka',
    description: 'a virtual land using unreal engine',
    longDescription: 'Developed a virtual land project "Dwaraka: A Virtual Land" using unreal engine to create an immersive 3D environment. Implemented interactive features and realistic landscapes to provide users with a captivating virtual experience.',
    tags: ['Unreal Engine 5', 'Blender'],
    icon: '🏝️',
    demoLink: 'https://github.com/Sanjaykumarbhupathi/Dwaraka_A_virtual_land',
    codeLink: 'https://github.com/Sanjaykumarbhupathi/Dwaraka_A_virtual_land',
    stats: [
      { label: 'Tech', value: 'Unreal Engine 5' },
      { label: 'Domain', value: 'Virtual reality' }
    ],
    color: 'from-green-500 to-teal-500'
  },
  // {
  //   id: 5,
  //   title: 'Employee Dashboard',
  //   description: 'Internal HRM dashboard for employee management',
  //   longDescription: 'Developed an Internal Employee Dashboard for tracking login/logout, managing employee data, and HRM features. Streamlined employee management processes with intuitive UI and real-time updates.',
  //   tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Redis'],
  //   icon: '👥',
  //   demoLink: '#',
  //   codeLink: 'https://github.com/Sanjaykumarbhupathi',
  //   stats: [
  //     { label: 'Features', value: 'HRM' },
  //     { label: 'Users', value: 'Enterprise' }
  //   ],
  //   color: 'from-purple-500 to-pink-500'
  // },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100 });
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Showcasing my best work across different technologies and domains. Each project represents clean code, innovative solutions, and real-world impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-0"
            >
              {/* Top gradient accent */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6 sm:p-7 md:p-8 h-full flex flex-col">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{project.icon}</div>
                  <div className="flex gap-2">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="View Demo">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="View Code">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 md:mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white opacity-80 hover:opacity-100 transition-opacity`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-gray-200 dark:border-gray-700">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Long description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {project.longDescription}
                </p>

                {/* Action Button */}
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 bg-gradient-to-r ${project.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group/btn`}
                >
                  Explore Project
                  <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more? Check out my complete portfolio on GitHub
          </p>
          <a
            href="https://github.com/Sanjaykumarbhupathi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
