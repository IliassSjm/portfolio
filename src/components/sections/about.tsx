import Image from 'next/image'

const facts = [
    {
        label: 'Education',
        value: 'MSc Data Science & AI for Business — École Polytechnique & HEC Paris',
    },
    {
        label: 'Now',
        value: 'Quantitative Researcher Intern, WorldQuant (Millennium affiliate), until March 2027',
    },
    { label: 'Base', value: 'Paris, France' },
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
                        <h2 className="font-display text-3xl md:text-4xl leading-snug tracking-tight mb-6 max-w-2xl">
                            Machine learning researcher and engineer.
                        </h2>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            Currently a quantitative researcher intern at WorldQuant (a Millennium
                            affiliate), working on LLM-based signal extraction from text. Before
                            that, a visiting student researcher at Stanford, where I was first
                            author of a clinical prediction study with Prof. Louise Sun, and a
                            data science intern at Crédit Agricole CIB.
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
                                sizes="(min-width: 768px) 224px, 176px"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
