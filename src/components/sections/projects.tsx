'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
    {
        title: 'Leukemia Mortality Prediction',
        description: 'Survival analysis for leukemia patients. Ranked top 10 / 100+ teams in national data challenge. 75.45% IPCW C-index.',
        tech: ['Python', 'Random Survival Forest', 'CoxPH', 'SHAP'],
        github: 'https://github.com/IliassSjm/QRT-ENS-DataChallenge-',
    },
    {
        title: 'Options Market Maker',
        description: 'Real-time market making simulation with production-ready REST API. Sub-50ms P99 latency.',
        tech: ['Python', 'FastAPI', 'Docker', 'Pydantic'],
        github: 'https://github.com/IliassSjm/options-market-maker-sim',
    },
    {
        title: 'Log Anomaly Detection',
        description: 'LSTM-based sequence model for anomaly detection in event logs. FastAPI + Kafka streaming.',
        tech: ['PyTorch', 'LSTM', 'Kafka', 'FastAPI'],
        github: 'https://github.com/IliassSjm',
    },
]

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-sm text-neutral-500 mb-4">Projects</p>
                    <h2 className="text-3xl md:text-4xl font-light">
                        Featured Work
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group p-6 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/60 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-lg font-medium group-hover:text-neutral-300 transition-colors">
                                    {project.title}
                                </h3>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-500 hover:text-white transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <p className="text-neutral-400 text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 text-xs text-muted-foreground bg-secondary/50 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://github.com/IliassSjm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        See all projects on GitHub
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
