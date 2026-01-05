'use client'

import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

const papers = [
    {
        title: 'GMSK Modulation: Analysis and Implementation',
        description: 'Comprehensive study of Gaussian Minimum Shift Keying modulation, covering theoretical foundations, spectral efficiency analysis, and practical implementation considerations for modern communication systems.',
        file: '/GMSK.pdf',
        year: '2024',
        tags: ['Signal Processing', 'Digital Communications', 'Modulation'],
    },
]

export function PapersSection() {
    return (
        <section id="papers" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-sm text-neutral-500 mb-4">Research</p>
                    <h2 className="text-3xl md:text-4xl font-light">
                        Papers &amp; Publications
                    </h2>
                </motion.div>

                <div className="grid gap-6">
                    {papers.map((paper, i) => (
                        <motion.a
                            key={paper.title}
                            href={paper.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group block p-6 rounded-lg border border-border hover:border-muted-foreground transition-all duration-300 hover:bg-secondary/50"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors">
                                    <FileText className="w-6 h-6 text-neutral-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-lg group-hover:text-white transition-colors flex items-center gap-2">
                                            {paper.title}
                                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                        <span className="text-sm text-neutral-500">{paper.year}</span>
                                    </div>
                                    <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                                        {paper.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {paper.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {papers.length === 1 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center text-neutral-500 text-sm mt-8"
                    >
                        More papers coming soon...
                    </motion.p>
                )}
            </div>
        </section>
    )
}
