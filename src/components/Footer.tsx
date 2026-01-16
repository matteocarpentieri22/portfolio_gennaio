import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-electric-blue/20 bg-cyber-dark/50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    {/* Copyright */}
                    <p className="text-slate-400 text-sm">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>

                    {/* Contact Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-slate-400 hover:text-electric-blue transition-colors duration-300 group"
                            title={personalInfo.email}
                        >
                            <div className="p-2 rounded-lg bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors">
                                <Mail className="w-4 h-4" />
                            </div>
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-neon-violet transition-colors duration-300 group"
                            title="LinkedIn Profile"
                        >
                            <div className="p-2 rounded-lg bg-neon-violet/10 group-hover:bg-neon-violet/20 transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
