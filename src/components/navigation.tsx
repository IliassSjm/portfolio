'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Papers', href: '#papers' },
    { label: 'Contact', href: '#contact' },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
            >
                {/* Logo */}
                <Link href="/" className="text-lg font-medium hover:text-neutral-400 transition-colors">
                    IS.
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm text-neutral-400 hover:text-white transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Social Links */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://github.com/IliassSjm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/iliass-sijelmassi-068b46189/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:iliass.sijelmassi-idrissi@polytechnique.edu"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
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
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? { x: 0 } : { x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-[#1E2330] border-l border-border md:hidden"
            >
                <div className="flex flex-col gap-6 p-12 pt-24">
                    {navItems.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-light hover:text-neutral-400 transition-colors"
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                />
            )}
        </>
    )
}
