import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = personalInfo.roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < currentRole.length) {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, roleIndex]);

    return (
        <section id="home" className="min-h-[100svh] flex items-center justify-center relative overflow-hidden py-16 md:py-20">
            <div className="section-container text-center z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 15
                    }}
                    className="mb-4"
                    style={{ willChange: 'transform, opacity' }}
                >
                    {/* Profile Image with Neon Border */}
                    <div className="relative inline-block">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue via-neon-violet to-electric-blue animate-spin-slow blur-md opacity-75"
                            style={{ animation: 'spin 8s linear infinite' }} />
                        <img
                            src={profileImage}
                            alt="Matteo Carpentieri"
                            className="relative w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-cyber-dark"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="text-3xl md:text-5xl font-bold mb-3 tracking-tight"
                    style={{ willChange: 'transform, opacity' }}
                >
                    {personalInfo.name}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="mb-4"
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div className="text-xl md:text-3xl font-semibold gradient-text min-h-[2.5rem] flex items-center justify-center">
                        <span className="font-mono">&gt; {displayedText}</span>
                        <span className="inline-block w-1 h-6 md:h-8 bg-electric-blue ml-1 animate-pulse" />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed px-4"
                    style={{ willChange: 'transform, opacity' }}
                >
                    I am a young <span className="gradient-text font-bold">Computer Engineer</span> specializing in{' '}
                    <span className="gradient-text font-bold">Artificial Intelligence and Robotics</span>.
                    I enjoy solving complex themes and tackling complex challenges, always looking for innovative solutions.
                    My passions are football and fashion.
                </motion.p>

                {/* LinkedIn Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="flex justify-center gap-6 mb-8"
                    style={{ willChange: 'transform, opacity' }}
                >
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-electric-blue to-neon-violet hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] transition-all duration-300 transform hover:scale-105"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span className="font-semibold text-base">Connect on LinkedIn</span>
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-4 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        className="cursor-pointer"
                        style={{ willChange: 'transform' }}
                        onClick={() => {
                            const element = document.getElementById('skills');
                            if (element) {
                                const navbarHeight = 64;
                                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                const offsetPosition = elementPosition - navbarHeight;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                            }
                        }}
                    >
                        <ChevronDown className="w-8 h-8 text-electric-blue" />
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
