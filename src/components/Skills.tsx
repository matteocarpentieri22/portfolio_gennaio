import { motion } from 'framer-motion';
import { Code, Brain, Bot, Database, Globe } from 'lucide-react';
import { skills } from '../data/portfolio-data';

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code className="w-6 h-6" />,
            skills: skills.programming,
            color: "from-electric-blue to-cyan-400",
        },
        {
            title: "AI & Machine Learning",
            icon: <Brain className="w-6 h-6" />,
            skills: skills.ai,
            color: "from-neon-violet to-purple-400",
        },
        {
            title: "Robotics",
            icon: <Bot className="w-6 h-6" />,
            skills: skills.robotics,
            color: "from-electric-blue to-neon-violet",
        },
        {
            title: "Database & Big Data",
            icon: <Database className="w-6 h-6" />,
            skills: skills.database,
            color: "from-cyan-400 to-electric-blue",
        },
        {
            title: "Web Development",
            icon: <Globe className="w-6 h-6" />,
            skills: skills.web,
            color: "from-purple-400 to-neon-violet",
        },
    ];

    return (
        <section id="skills" className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Technical <span className="gradient-text">Skills</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.4,
                                delay: categoryIndex * 0.08,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className="glass-card p-6 hover:neon-glow transition-all duration-300"
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 text-sm rounded-full bg-cyber-gray/80 border border-electric-blue/30 hover:border-electric-blue hover:shadow-[0_0_10px_rgba(0,212,255,0.3)] transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
