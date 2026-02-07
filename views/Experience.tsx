'use client';

import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import React, { useEffect } from 'react';
import AOS from 'aos';
// @ts-ignore - no type declarations for CSS side-effect import
import 'aos/dist/aos.css';


export function Experience() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100 });
  }, []);

  const timelineItems = [
    {
      title: 'Software Development Engineer - I',
      date: 'Jun 2024 - Present',
      org: 'QuID Social Private Limited',
      location: 'Bengaluru, India',
      desc: 'Contributing to Supply Chain Financing BNPL System and Lender Management Platform. Led client integrations, developed full-stack features for operations dashboard, and optimized APIs for performance.',
      icon: <Briefcase className="w-6 h-6" />,
      type: 'work',
      responsibilities: [
        'Led and implemented client integrations enabling real-time data exchange',
        'Developed full-stack features for credit onboarding and underwriting modules',
        'Optimized back-end APIs and front-end components improving efficiency',
        'Participated in architecture discussions ensuring scalable designs'
      ]
    },
    {
      title: 'Web and App Development Intern',
      date: 'Jan 2024 - May 2024',
      org: 'Correct Steps Consultancy',
      location: 'Remote',
      desc: 'Engineered client-facing web and app solutions including Online Testing Platform and Employee Dashboard. Conducted end-to-end deployment on AWS and Hostinger.',
      icon: <Briefcase className="w-6 h-6" />,
      type: 'work',
      responsibilities: [
        'Developed Online Testing Platform and Internal Employee Dashboard',
        'Implemented WordPress-based websites reducing content management overhead',
        'Conducted end-to-end deployment on AWS and Hostinger VMs',
        'Tech Stack: Node.js, Express, MongoDB, React, Tailwind CSS'
      ]
    },
    {
      title: 'B.Tech in Computer Science',
      date: 'Jun 2020 - Apr 2024',
      org: 'JK Lakshmipat University',
      location: 'Jaipur, India',
      desc: 'Bachelor of Technology in Computer Science with focus on Software Development and System Design.',
      icon: <GraduationCap className="w-6 h-6" />,
      type: 'education',
      responsibilities: [
        'GPA: 7.796/10.0',
        'Specialized in Software Architecture and Development',
        'Active in coding competitions and technical projects',
        'Strong foundation in Data Structures, Algorithms, DBMS'
      ]
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Experience & Education
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            My professional journey building scalable solutions and growing as a developer
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isWork = item.type === 'work';

              return (
                <div key={index} className="relative" data-aos={isLeft ? "fade-right" : "fade-left"}>
                  {/* Timeline dot */}
                  <div
                    className={`hidden md:block absolute left-1/2 top-0 w-12 h-12 -translate-x-1/2 rounded-full border-4 border-white dark:border-gray-900 z-10 ${isWork
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'bg-gradient-to-r from-green-500 to-emerald-500'
                      }`}
                  >
                    <div className="flex items-center justify-center w-full h-full text-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                      }`}
                  >
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-700 p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-600 md:hidden mb-4">
                      <div className="flex gap-3 mb-3">
                        <div
                          className={`p-2 rounded-lg ${isWork
                              ? 'bg-blue-100 dark:bg-blue-900/30'
                              : 'bg-green-100 dark:bg-green-900/30'
                            }`}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className={`text-sm font-semibold ${isWork ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'
                            }`}>
                            {item.org}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.date}</p>
                      <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">{item.desc}</p>
                      <div className="space-y-2">
                        {item.responsibilities.map((resp, i) => (
                          <div key={i} className="flex gap-2 text-sm">
                            <ArrowRight size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Desktop card */}
                    <div className="hidden md:block">
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-600">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                              {item.title}
                            </h3>
                            <p className={`text-sm font-semibold mt-1 ${isWork ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'
                              }`}>
                              {item.org}
                            </p>
                          </div>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${isWork
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            }`}>
                            {item.type === 'work' ? 'Experience' : 'Education'}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <span className="font-semibold">{item.date}</span>
                          <span>•</span>
                          <span>{item.location}</span>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-5">
                          {item.desc}
                        </p>

                        <div className="space-y-2">
                          {item.responsibilities.map((resp, i) => (
                            <div key={i} className="flex gap-2 text-sm">
                              <ArrowRight size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
