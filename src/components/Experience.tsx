import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/portfolio-data';

export default function Experience() {
    return (
        <section id="experience" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Work <span className="gradient-text">Experience</span>
                </h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-neon-violet to-electric-blue -z-10 md:hidden" />

                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                                }`}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-electric-blue transform -translate-x-1/2 neon-glow z-10" />

                            <div className="ml-16 md:ml-0 p-6 hover:neon-glow transition-all duration-300 group relative z-10 bg-cyber-gray border border-white/10 rounded-2xl">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-electric-blue to-neon-violet group-hover:scale-110 transition-transform duration-300">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-1 gradient-text">{exp.role}</h3>
                                        <p className="text-lg font-semibold text-slate-200">{exp.company}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <p className="text-slate-300 mb-4">{exp.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs font-mono rounded-full bg-cyber-dark border border-electric-blue/30 text-electric-blue"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
