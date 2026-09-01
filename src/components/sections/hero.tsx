'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { XtHeatmap } from '@/components/ui/xt-heatmap'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HeroSection() {
    return (
        <section className="min-h-screen flex items-center border-b border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — text */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease }}
                            className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6"
                        >
                            Paris → Stanford · systematic research
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 0.08 }}
                            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] mb-8"
                        >
                            Iliass
                            <br />
                            Sijelmassi
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 0.16 }}
                            className="text-lg text-muted-foreground max-w-md leading-relaxed mb-4"
                        >
                            I build prediction systems and test them honestly.
                            Markets, clinical waveforms, tracking data.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 0.22 }}
                            className="font-mono text-xs text-muted-foreground mb-10"
                        >
                            Visiting Researcher @ Stanford · MSc Data Science & AI, X-HEC
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 0.3 }}
                            className="flex flex-wrap gap-3"
                        >
                            <Link
                                href="/#projects"
                                className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-white transition-colors"
                            >
                                Selected work
                            </Link>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 border border-border text-sm font-medium rounded-md hover:border-muted-foreground transition-colors"
                            >
                                CV
                            </a>
                            <Link
                                href="/#contact"
                                className="px-5 py-2.5 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground transition-colors"
                            >
                                Contact ↗
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right — real data as ornament */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease, delay: 0.35 }}
                        className="hidden lg:flex justify-end"
                    >
                        <a
                            href="https://github.com/IliassSjm/cognitive-alpha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-90 transition-opacity"
                            title="From my cognitive-alpha project"
                        >
                            <XtHeatmap />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
