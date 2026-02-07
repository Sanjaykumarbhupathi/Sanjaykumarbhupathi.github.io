'use client';
import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/Sanjaykumarbhupathi",
            color: "hover:text-gray-900 dark:hover:text-white"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/bhupathisanjaykumar",
            color: "hover:text-blue-600"
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://twitter.com/sanjay_bhupathi",
            color: "hover:text-blue-400"
        },
        {
            icon: Mail,
            label: "Email",
            href: "mailto:sanjaybhupathi@example.com",
            color: "hover:text-red-500"
        }
    ];

    return (
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                                Sanjay Kumar
                            </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Full Stack Developer crafting modern, scalable web applications with clean code and exceptional user experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>
                                <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Connect
                        </h4>
                        <div className="flex gap-3 flex-wrap">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                                        title={social.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-center md:text-left text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2">
                            Made with <Heart size={16} className="text-red-500" /> by Sanjay Kumar
                        </p>

                        <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
                            <span>© {currentYear} Sanjay Kumar. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}