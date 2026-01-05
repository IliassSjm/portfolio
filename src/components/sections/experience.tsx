'use client'

import { motion } from 'framer-motion'

const experiences = [
    {
        title: 'Data Scientist Intern',
        company: 'Crédit Agricole CIB',
        period: 'Mar 2025 – Sep 2025',
        description: 'Built audit risk prediction models (XGBoost) to forecast overdue internal audit actions on 200k+ historical records. Applied time-aware validation and SHAP for explainability.',
    },
    {
        title: 'Java Consultant Intern',
        company: 'Infosys – Renault',
        period: 'Mar 2023 – Oct 2023',
        description: 'Developed backend modules for supply-chain platforms (R3, EPO). Java, PostgreSQL, Oracle.',
    },
    {
        title: 'Software Developer Intern',
        company: "Kuyper's Auto",
        period: 'Jun 2022 – Aug 2022',
        description: 'Built web interface and online reservation system. Direct client collaboration.',
    },
]

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-sm text-neutral-500 mb-4">Experience</p>
                    <h2 className="text-3xl md:text-4xl font-light">
                        Where I&apos;ve Worked
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="grid md:grid-cols-4 gap-4 py-6 border-b border-border last:border-0 group"
                        >
                            <div className="text-sm text-neutral-500">
                                {exp.period}
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="font-medium mb-1">{exp.title}</h3>
                                <p className="text-neutral-500 mb-2">{exp.company}</p>
                                <p className="text-neutral-400 text-sm">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
