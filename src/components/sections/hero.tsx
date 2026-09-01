'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { XtHeatmap } from '@/components/ui/xt-heatmap'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const logos = [
    { src: '/logos/stanford.svg', alt: 'Stanford University', h: 'h-5', filter: '[filter:brightness(0)_invert(1)]' },
    { src: '/logos/polytechnique.png', alt: 'École Polytechnique', h: 'h-8', filter: '[filter:invert(1)_grayscale(1)_brightness(1.15)]' },
    { src: '/logos/hec.svg', alt: 'HEC Paris', h: 'h-9', filter: '[filter:brightness(0)_invert(1)]' },
    { src: '/logos/credit-agricole.svg', alt: 'Crédit Agricole CIB', h: 'h-5', filter: '[filter:brightness(0)_invert(1)]' },
]

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
                            Machine learning · Quantitative research
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 0.08 }}
                            className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-8"
                        >
                            Iliass
                            <br />
                            Sijelmassi
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 0.16 }}
                            className="text-lg text-muted-foreground max-w-md leading-relaxed mb-10"
                        >
                            Quantitative Researcher Intern at WorldQuant (Millennium) from
                            October. Visiting Student Researcher at Stanford University.
                            MSc Data Science &amp; AI, École Polytechnique &amp; HEC Paris.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 0.24 }}
                            className="flex flex-wrap gap-3 mb-14"
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

                        {/* Institutions */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease, delay: 0.4 }}
                        >
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                                {logos.map((logo) => (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        key={logo.alt}
                                        src={logo.src}
                                        alt={logo.alt}
                                        title={logo.alt}
                                        className={`${logo.h} w-auto opacity-60 hover:opacity-100 transition-opacity ${logo.filter}`}
                                    />
                                ))}
                            </div>
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
