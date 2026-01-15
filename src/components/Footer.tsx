import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const navbarHeight = 64; // Height of navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="relative border-t border-electric-blue/20 bg-cyber-dark/50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold gradient-text mb-4">
                            {personalInfo.name}
                        </h3>
                        <p className="text-slate-400">
                            {personalInfo.title} specializing in Artificial Intelligence and Robotics
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-slate-400 hover:text-electric-blue transition-colors duration-300"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
                        <div className="space-y-3">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-3 text-slate-400 hover:text-electric-blue transition-colors duration-300 group"
                            >
                                <div className="p-2 rounded-lg bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-sm">{personalInfo.email}</span>
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-slate-400 hover:text-neon-violet transition-colors duration-300 group"
                            >
                                <div className="p-2 rounded-lg bg-neon-violet/10 group-hover:bg-neon-violet/20 transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </div>
                                <span className="text-sm">LinkedIn Profile</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="pt-8 border-t border-electric-blue/10"
                >
                    <div className="text-center">
                        <p className="text-slate-400 text-sm">
                            © {currentYear} {personalInfo.name}. All rights reserved.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
