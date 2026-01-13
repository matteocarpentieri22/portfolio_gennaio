import { motion } from 'framer-motion';
import { Code2, Brain, Rocket } from 'lucide-react';

export default function About() {
    const highlights = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "AI & Robotics",
            description: "Specialized in Artificial Intelligence and Robotics",
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Full Stack",
            description: "From ML models to web applications",
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Innovation",
            description: "Always seeking innovative solutions",
        },
    ];

    return (
        <section id="about" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass-card p-6 hover:neon-glow transition-all duration-300 group"
                        >
                            <div className="text-electric-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
