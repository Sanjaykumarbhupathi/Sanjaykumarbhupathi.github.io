'use client';
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { DarkThemeToggle } from "flowbite-react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <span className="font-bold text-lg dark:text-white hidden sm:inline">Sanjay</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>


                {/* Right side actions */}
                <div className="flex items-center gap-3">
                    <DarkThemeToggle />
                    <button
                        onClick={() => window.open('/Bhupathi_Sanjay_Kumar_Resume.pdf', '_blank')}
                        className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow text-sm font-medium cursor-pointer"
                    >
                        <Download size={18} />
                        <span>Resume</span>
                    </button>
                    
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 dark:text-gray-300"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                window.open('/Bhupathi_Sanjay_Kumar_Resume.pdf', '_blank');
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium mt-4 w-full cursor-pointer"
                        >
                            <Download size={18} />
                            Download Resume
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
