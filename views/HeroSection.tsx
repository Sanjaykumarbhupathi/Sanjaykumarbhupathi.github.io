'use client';
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Code2 } from 'lucide-react';
// @ts-ignore - no type declarations for CSS side-effect import
import 'aos/dist/aos.css';


export function HeroSection() {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Full Stack Developer';

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
            <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-40 sm:w-72 h-40 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-7 md:space-y-8 animate-fadeInUp">
                        <div className="inline-block">
                            <div className="px-3 sm:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
                                <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold flex items-center gap-2">
                                    <Code2 size={14} className="sm:w-4 sm:h-4" />
                                    Welcome to my portfolio
                                </span>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-3 sm:mb-4">
                                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sanjay</span>
                            </h1>
                            <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                                {displayedText}
                                <span className="animate-pulse">|</span>
                            </div>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                            Software Development Engineer with 2+ years of experience building scalable web applications. Specializing in full-stack development with React, Node.js, and modern cloud technologies. Passionate about system design and clean code architecture.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <div className="flex gap-4">
                                <a href="https://github.com/Sanjaykumarbhupathi" target="_blank" rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-all hover:scale-110 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700">
                                    <Github className="w-6 h-6 text-gray-900 dark:text-white" />
                                </a>
                                <a href="https://linkedin.com/in/bhupathisanjaykumar" target="_blank" rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-all hover:scale-110 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700">
                                    <Linkedin className="w-6 h-6 text-gray-900 dark:text-white" />
                                </a>
                                <a href="https://twitter.com/sanjay_bhupathi" target="_blank" rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-all hover:scale-110 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700">
                                    <Twitter className="w-6 h-6 text-gray-900 dark:text-white" />
                                </a>
                                <a href="mailto:sanjaykumarbhupathi01@gmail.com"
                                    className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-all hover:scale-110 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700">
                                    <Mail className="w-6 h-6 text-gray-900 dark:text-white" />
                                </a>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                            <button onClick={() => scrollToSection('projects')}
                                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
                                View My Work
                                <ArrowRight size={18} className="hidden sm:block" />
                                <ArrowRight size={16} className="sm:hidden" />
                            </button>
                            <button onClick={() => scrollToSection('contact')}
                                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all">
                                Get in Touch
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Animated Graphic */}
                    <div className="hidden lg:flex items-center justify-center relative">
                        <div className="relative w-56 md:w-64 lg:w-72 h-56 md:h-64 lg:h-72">
                            {/* Animated circle background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

                            {/* Main card */}
                            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-8">
                                    {/* Floating code brackets */}
                                    <div className="absolute top-6 left-6 text-4xl font-bold text-blue-500 opacity-20">&lt;</div>
                                    <div className="absolute bottom-6 right-6 text-4xl font-bold text-purple-500 opacity-20">/&gt;</div>

                                    {/* Main content */}
                                    <div className="space-y-4 text-center">
                                        <div className="text-6xl">💻</div>
                                        <p className="text-sm font-mono text-gray-600 dark:text-gray-400">
                                            <span className="text-green-600 dark:text-green-400">const</span> {' '}
                                            <span className="text-blue-600 dark:text-blue-400">developer</span> {' '}
                                            = {' '}
                                            <span className="text-purple-600 dark:text-purple-400">'full-stack'</span>
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-8 space-y-2 text-xs text-gray-600 dark:text-gray-400">
                                        <div>React • Next.js • Node.js</div>
                                        <div>TypeScript • MongoDB • PostgreSQL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out;
                }
            `}</style>
        </section>
    );
}
