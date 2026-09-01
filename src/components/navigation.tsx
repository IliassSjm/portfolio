'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Research', href: '/#papers' },
    { label: 'Contact', href: '/#contact' },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [hovered, setHovered] = useState<string | null>(null)
    const { scrollYProgress } = useScroll()
    const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 backdrop-blur-md bg-background/70">
                {/* Scroll progress hairline */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-signal origin-left"
                    style={{ scaleX: progress }}
                />
                <div className="flex items-center justify-between px-6 py-4 md:px-12">
                    <Link
                        href="/"
                        className="font-mono text-sm text-foreground hover:text-signal transition-colors"
                    >
                        i.sijelmassi
                    </Link>

                    {/* Desktop */}
                    <div
                        className="hidden md:flex items-center gap-1"
                        onMouseLeave={() => setHovered(null)}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onMouseEnter={() => setHovered(item.label)}
                                className="relative px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {hovered === item.label && (
                                    <motion.span
                                        layoutId="nav-hover"
                                        className="absolute inset-0 rounded-md bg-secondary"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://github.com/IliassSjm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/iliass-sijelmassi-068b46189/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href="mailto:iliass.sijelmassi-idrissi@polytechnique.edu"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block h-px w-6 bg-white"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block h-px w-6 bg-white"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block h-px w-6 bg-white"
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <motion.div
                initial={false}
                animate={isOpen ? { x: 0 } : { x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-card border-l border-border md:hidden"
            >
                <div className="flex flex-col gap-6 p-12 pt-24">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="font-display text-2xl hover:text-signal transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </motion.div>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                />
            )}
        </>
    )
}
