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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden overflow-y-visible ${scrolled
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
            }`}>
            <nav className="w-screen max-w-full px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 flex justify-between items-center gap-1 sm:gap-2">
                {/* Logo */}
                <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm sm:text-base md:text-lg">S</span>
                    </div>
                    <span className="font-bold text-xs sm:text-sm md:text-base dark:text-white hidden sm:inline whitespace-nowrap">Sanjay</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-3 xl:gap-6 flex-1 justify-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs xl:text-sm font-medium whitespace-nowrap"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>


                {/* Right side actions */}
                <div className="flex items-center gap-3">
                    <DarkThemeToggle />
                    <button
                        onClick={() => window.open('/BhupathiSanjayKumar.pdf', '_blank')}
                        className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 lg:px-4 py-2 rounded-lg hover:shadow-lg transition-shadow text-xs lg:text-sm font-medium cursor-pointer"
                    >
                        <Download size={16} />
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
                <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 w-screen overflow-x-hidden">
                    <div className="px-2 sm:px-3 py-3 space-y-2 max-w-full">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 truncate"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                window.open('/Bhupathi_Sanjay_Kumar_Resume.pdf', '_blank');
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded font-medium mt-3 w-full text-xs sm:text-sm cursor-pointer justify-center"
                        >
                            <Download size={16} />
                            <span className="truncate">Download Resume</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
