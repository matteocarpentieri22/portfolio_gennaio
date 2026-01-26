import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

export default function Contact() {
    return (
        <section id="contact" className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Get In <span className="gradient-text">Touch</span>
                </h2>

                <p className="text-lg text-slate-300 mb-12">
                    Interested in collaborating or have a question? Feel free to reach out!
                </p>

                {/* Contact Options */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {/* Email */}
                    <motion.a
                        href={`mailto:${personalInfo.email}`}
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group glass-card p-6 hover:neon-glow transition-all duration-300 w-full sm:w-auto min-w-[280px]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-gradient-to-r from-electric-blue to-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-slate-400 mb-1">Email me at</p>
                                <p className="font-semibold text-electric-blue group-hover:text-cyan-400 transition-colors">
                                    {personalInfo.email}
                                </p>
                            </div>
                        </div>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="group glass-card p-6 hover:neon-glow-violet transition-all duration-300 w-full sm:w-auto min-w-[280px]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-gradient-to-r from-neon-violet to-purple-400 group-hover:scale-110 transition-transform duration-300">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-slate-400 mb-1">Connect on</p>
                                <p className="font-semibold text-neon-violet group-hover:text-purple-400 transition-colors">
                                    LinkedIn
                                </p>
                            </div>
                        </div>
                    </motion.a>
                </div>

            </motion.div>
        </section>
    );
}
