'use client'

import Image from 'next/image'

const facts = [
    { label: 'Education', value: 'MSc Data Science & AI — École Polytechnique & HEC Paris' },
    { label: 'Now', value: 'Visiting Student Researcher, Stanford University' },
    { label: 'Base', value: 'Stanford, CA / Paris, FR' },
]

export function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                    00 · About
                </p>
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2">
                        <h2 className="font-display text-2xl md:text-3xl font-medium leading-snug tracking-tight mb-6 max-w-2xl">
                            I work at the intersection of statistics, machine learning and
                            messy real-world data.
                        </h2>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            Right now that means cardiac-event prediction at Stanford under
                            Dr. Louise Sun, on 1.5 TB of clinical waveforms. Before that,
                            audit-risk models at Crédit Agricole CIB and supply-chain
                            backends at Renault. The through line: build the model, then try
                            hard to break it before anyone else does.
                        </p>

                        <dl className="border-t border-border max-w-2xl">
                            {facts.map((f) => (
                                <div
                                    key={f.label}
                                    className="grid grid-cols-3 gap-4 py-3 border-b border-border"
                                >
                                    <dt className="font-mono text-xs text-muted-foreground uppercase tracking-wide pt-0.5">
                                        {f.label}
                                    </dt>
                                    <dd className="col-span-2 text-sm">{f.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="lg:col-span-1 order-first lg:order-last">
                        <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-lg overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/headshot.jpg"
                                alt="Iliass Sijelmassi"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
