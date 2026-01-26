import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, FileText } from 'lucide-react';
import { education } from '../data/portfolio-data';

export default function Education() {
    return (
        <section id="education" className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    <span className="gradient-text">Education</span>
                </h2>

                <div className="max-w-4xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className="glass-card p-6 hover:neon-glow transition-all duration-300 group"
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="p-3 rounded-xl bg-gradient-to-r from-electric-blue to-neon-violet group-hover:scale-110 transition-transform duration-300">
                                    <GraduationCap className="w-6 h-6" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-1 gradient-text">
                                        {edu.degree}
                                    </h3>

                                    {edu.specialization && (
                                        <p className="text-lg font-semibold text-slate-200 mb-2">
                                            Specialization: {edu.specialization}
                                        </p>
                                    )}

                                    <p className="text-lg text-slate-300 mb-3">{edu.institution}</p>

                                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>

                                    {edu.thesis && (
                                        <div className="flex items-start gap-2 mt-4 p-3 rounded-lg bg-cyber-dark/50 border border-electric-blue/20">
                                            <FileText className="w-4 h-4 text-electric-blue mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-slate-300">{edu.thesis}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
