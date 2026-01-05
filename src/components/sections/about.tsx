'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Briefcase } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border">
                            <Image
                                src="/headshot.jpg"
                                alt="Iliass Sijelmassi"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <p className="text-sm text-neutral-500 mb-4">About Me</p>

                        <h2 className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
                            I&apos;m an <span className="font-medium">AI student</span> at Polytechnique & HEC Paris,{' '}
                            passionate about <span className="font-medium">machine learning</span>,{' '}
                            <span className="font-medium">generative AI</span>, and <span className="font-medium">statistics</span>.
                        </h2>

                        <p className="text-neutral-400 leading-relaxed mb-8">
                            With hands-on experience at Crédit Agricole CIB and at Infosys developing
                            enterprise platforms for Renault, I combine technical expertise with
                            business understanding to deliver solutions that work.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex items-start gap-3">
                                <GraduationCap className="w-5 h-5 text-neutral-500 mt-0.5" />
                                <div>
                                    <p className="font-medium mb-1">Education</p>
                                    <p className="text-sm text-neutral-500">
                                        M2 AI & Data Science<br />
                                        Polytechnique & HEC Paris
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-neutral-500 mt-0.5" />
                                <div>
                                    <p className="font-medium mb-1">Location</p>
                                    <p className="text-sm text-neutral-500">
                                        Paris, France
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Briefcase className="w-5 h-5 text-neutral-500 mt-0.5" />
                                <div>
                                    <p className="font-medium mb-1">Status</p>
                                    <p className="text-sm text-neutral-500">
                                        Open to opportunities
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
