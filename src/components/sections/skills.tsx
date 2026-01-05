'use client'

import { motion } from 'framer-motion'

const skills = {
    'Languages': ['Python', 'C++', 'Java', 'SQL', 'R', 'TypeScript'],
    'ML & Data': ['PyTorch', 'scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
    'Tools': ['Docker', 'Git', 'MLflow', 'FastAPI', 'Kafka'],
}

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-sm text-neutral-500 mb-4">Technical</p>
                    <h2 className="text-3xl md:text-4xl font-light">
                        Skills & Tools
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <h3 className="text-sm text-neutral-500 mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm border border-border rounded-full hover:bg-secondary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
