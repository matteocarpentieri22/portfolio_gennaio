import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio-data';

// Import project images
import foodWasteImg from '../assets/projects/project_food_waste_1768229721465.png';
import accidentImg from '../assets/projects/project_accident_analysis_1768229739244.png';
import sportVideoImg from '../assets/projects/project_sport_video_1768229756472.png';
import vision3dImg from '../assets/projects/project_3d_vision_1768229776977.png';
import robotNavImg from '../assets/projects/project_robot_navigation_1768229794154.png';
import robotManipImg from '../assets/projects/project_robot_manipulation_1768229814647.png';

const projectImages = [
    foodWasteImg,
    accidentImg,
    sportVideoImg,
    vision3dImg,
    robotNavImg,
    robotManipImg,
];

export default function Projects() {
    return (
        <section id="projects" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    Academic <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    A selection of research and academic projects showcasing AI, robotics, and computer vision applications
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className="glass-card overflow-hidden group hover:neon-glow transition-all duration-300"
                            style={{ willChange: 'transform, opacity' }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={projectImages[index]}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60" />

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-electric-blue to-neon-violet">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs font-mono rounded bg-cyber-dark border border-electric-blue/30 text-electric-blue"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 text-xs font-mono rounded bg-cyber-dark border border-neon-violet/30 text-neon-violet">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-gray/50 hover:bg-electric-blue/20 border border-electric-blue/30 hover:border-electric-blue transition-all duration-300 text-sm group/link"
                                    >
                                        <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                                        <span>GitHub</span>
                                    </a>
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-gray/50 hover:bg-neon-violet/20 border border-neon-violet/30 hover:border-neon-violet transition-all duration-300 text-sm group/link">
                                        <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                                        <span>Details</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
