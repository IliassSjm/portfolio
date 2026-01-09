'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

const contactLinks = [
    {
        label: 'Email',
        value: 'iliass.sijelmassi-idrissi@polytechnique.edu',
        href: 'mailto:iliass.sijelmassi-idrissi@polytechnique.edu',
        icon: Mail,
    },
    {
        label: 'GitHub',
        value: 'github.com/IliassSjm',
        href: 'https://github.com/IliassSjm',
        icon: Github,
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/iliass-sijelmassi-068b46189',
        href: 'https://www.linkedin.com/in/iliass-sijelmassi-068b46189/',
        icon: Linkedin,
    },
]

export function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-12"
                >
                    <p className="text-sm text-neutral-500 mb-4">Contact</p>
                    <h2 className="text-3xl md:text-4xl font-light mb-6">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-neutral-400">
                        I&apos;m currently looking for opportunities in ML Engineering,
                        Data Science, and Applied ML. Feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
                    {contactLinks.map((link, i) => {
                        const Icon = link.icon
                        return (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group flex items-center justify-between p-4 rounded-xl border border-border hover:bg-secondary transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                                    <div>
                                        <p className="text-sm text-neutral-500">{link.label}</p>
                                        <p className="text-sm truncate max-w-[180px]">{link.value}</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                            </motion.a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="py-8 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-neutral-500">
                        © 2025 Iliass Sijelmassi
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="https://github.com/IliassSjm" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/iliass-sijelmassi-068b46189/" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
