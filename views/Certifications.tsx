'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { Award, ExternalLink, Calendar, Trophy } from 'lucide-react';
// @ts-ignore - no type declarations for CSS side-effect import
import 'aos/dist/aos.css';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
  credentialUrl?: string;
  skills: string[];
  color: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Computer Communications',
    issuer: 'University of Colorado System',
    date: 'Feb 2023',
    description: 'Comprehensive certification in computer networking, communication protocols, and network architecture. Deep dive into TCP/IP, DNS, HTTP, and modern networking concepts.',
    icon: '🌐',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/U49LNGPR2542',
    skills: ['Networking', 'TCP/IP', 'Protocols', 'System Design'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Ethical Hacking Essentials',
    issuer: 'EC-Council',
    date: 'April 2023',
    description: 'Certification in ethical hacking fundamentals covering security testing, penetration testing, and cybersecurity best practices. Hands-on experience with security tools and vulnerability assessment.',
    icon: '🔒',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/NPHH7MQ8Y8K4',
    skills: ['Cybersecurity', 'Penetration Testing', 'Security', 'Network Security'],
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 3,
    title: 'Introduction to DevOps',
    issuer: 'IBM',
    date: 'April 2023',
    description: 'Introduction to DevOps principles, CI/CD pipelines, containerization, and infrastructure automation. Practical knowledge of deployment strategies and cloud technologies.',
    icon: '⚙️',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/D3DLZDHWMQ67',
    skills: ['DevOps', 'CI/CD', 'Docker', 'Automation'],
    color: 'from-orange-500 to-yellow-500'
  },
  {
    id: 4,
    title: 'Data Structures',
    issuer: 'University of California San Diego',
    date: 'Feb 2023',
    description: 'Comprehensive course on data structures including arrays, linked lists, trees, graphs, and hash tables. Problem-solving with optimal time and space complexity analysis.',
    icon: '🏗️',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/ATUL8LKLMYK3',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Complexity Analysis'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    title: 'Full-Stack Web Development',
    issuer: 'Multiple Online Platforms',
    date: 'Ongoing',
    description: 'Continuous learning in modern full-stack development including React, Node.js, Next.js, TypeScript, and cloud deployment on AWS and other platforms.',
    icon: '💻',
    credentialUrl: '#',
    skills: ['MERN Stack', 'Next.js', 'TypeScript', 'AWS'],
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 6,
    title: 'Grand Finalist - XR META Startup Program',
    issuer: 'Meta',
    date: '2023',
    description: 'Recognition as Grand Finalist in Meta\'s XR META Startup Program 2023. Showcased innovative ideas and technical execution in extended reality development.',
    icon: '🏆',
    credentialUrl: '#',
    skills: ['XR Development', 'Innovation', 'Startup', 'Meta Technologies'],
    color: 'from-indigo-500 to-blue-500'
  },
];

export function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100 });
  }, []);

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Certifications & Credentials
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Professional certifications and credentials demonstrating expertise across modern technologies and best practices
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-700 p-5 sm:p-6 md:p-7 rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} rounded-t-2xl`}></div>

              {/* Icon and Title */}
              <div className="mb-4">
                <div className="text-5xl mb-3">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                </p>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills/Topics */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Skills & Topics:
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${cert.color} text-white opacity-80`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 dark:border-gray-600 my-4"></div>

              {/* View Credential Button */}
              {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2 group/btn"
                >
                  View Credential
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="w-full py-2 px-3 bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg font-semibold text-sm text-center">
                  Credential Available Upon Request
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800" data-aos="fade-up">
          <div className="flex gap-4">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in continuous improvement and staying updated with the latest technologies. I regularly pursue certifications, complete online courses, and participate in tech communities to enhance my skills and knowledge in full-stack development.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more details about my qualifications?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
