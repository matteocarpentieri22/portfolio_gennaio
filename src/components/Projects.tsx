import { motion } from 'framer-motion';
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
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
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            className="glass-card overflow-hidden group hover:neon-glow transition-all duration-300"
                            style={{ willChange: 'transform, opacity' }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={projectImages[index]}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
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
                                <h3 className="text-xl font-bold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs font-mono rounded bg-cyber-dark border border-electric-blue/30 text-electric-blue"
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
