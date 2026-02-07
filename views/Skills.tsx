'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
// @ts-ignore - no type declarations for CSS side-effect import
import 'aos/dist/aos.css';


const skillCategories = [
    {
        title: 'Programming Languages',
        icon: '💻',
        skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Go']
    },
    {
        title: 'Frontend',
        icon: '⚛️',
        skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Zustand', 'HTML5/CSS3']
    },
    {
        title: 'Backend',
        icon: '🔧',
        skills: ['Node.js', 'Express.js', 'Fastify', 'REST APIs']
    },
    {
        title: 'Database',
        icon: '🗄️',
        skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose']
    },
    {
        title: 'Cloud & DevOps',
        icon: '☁️',
        skills: ['AWS (EC2, ECS, S3, RDS)', 'Docker', 'Git', 'GitHub', 'Vercel', 'Netlify']
    },
    {
        title: 'Other Tools',
        icon: '⚙️',
        skills: ['Postman', 'Figma', 'Firebase', 'MERN Stack', 'Agile', 'System Design']
    }
];

export function Skills() {
    useEffect(() => {
        AOS.init({ duration: 800, offset: 100 });
    }, []);

    return (
        <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-14 md:mb-16" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
                        A comprehensive toolkit of modern technologies and practices I use to build exceptional digital experiences
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-7 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                {/* Icon and Title */}
                                <div className="flex items-center gap-3 mb-4 sm:mb-5 md:mb-6">
                                    <span className="text-3xl sm:text-4xl">{category.icon}</span>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Border animation on hover */}
                            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/50 dark:group-hover:border-purple-400/50 transition-colors duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center" data-aos="fade-up">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">25+</div>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Technologies</p>
                    </div>
                    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                        <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">4+</div>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Years Building</p>
                    </div>
                    <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-xl border border-pink-200 dark:border-pink-800">
                        <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400">100%</div>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Commitment</p>
                    </div>
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                        <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">10+</div>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Projects</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
