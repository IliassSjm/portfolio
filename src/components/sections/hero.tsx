import Link from 'next/link'
import { XtHeatmap } from '@/components/ui/xt-heatmap'

const logos: { src: string; alt: string; h: string; filter: string; label?: [string, string] }[] = [
    {
        src: '/logos/stanford.svg',
        alt: 'Stanford University',
        h: 'h-5',
        filter: '[filter:brightness(0)_invert(1)]',
    },
    {
        src: '/logos/polytechnique-x.png',
        alt: 'École Polytechnique',
        h: 'h-9',
        filter: '',
        label: ['École', 'Polytechnique'],
    },
    {
        src: '/logos/hec.svg',
        alt: 'HEC Paris',
        h: 'h-9',
        filter: '[filter:brightness(0)_invert(1)]',
    },
    {
        src: '/logos/credit-agricole.svg',
        alt: 'Crédit Agricole CIB',
        h: 'h-5',
        filter: '[filter:brightness(0)_invert(1)]',
    },
]

export function HeroSection() {
    return (
        <section className="min-h-screen flex items-center border-b border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-16">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
                    {/* Left — text */}
                    <div>
                        <p className="anim-fade font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6">
                            Machine learning · Quantitative research
                        </p>

                        <h1 className="anim-rise font-display text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-8">
                            Iliass
                            <br />
                            Sijelmassi
                        </h1>

                        <p className="anim-rise [animation-delay:80ms] text-lg text-muted-foreground max-w-md leading-relaxed mb-10">
                            Quantitative Researcher Intern at WorldQuant (Millennium affiliate).
                            Previously Visiting Student Researcher at Stanford University. MSc
                            Data Science &amp; AI, École Polytechnique &amp; HEC Paris.
                        </p>

                        <div className="anim-rise [animation-delay:160ms] flex flex-wrap gap-3 mb-14">
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
                        </div>

                        {/* Institutions */}
                        <div className="anim-fade [animation-delay:300ms] grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-9 sm:gap-y-4">
                            {logos.map((logo) => (
                                <span
                                    key={logo.alt}
                                    title={logo.alt}
                                    className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className={`${logo.h} w-auto ${logo.filter}`}
                                    />
                                    {logo.label && (
                                        <span
                                            aria-hidden
                                            className="text-[10px] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-white"
                                        >
                                            {logo.label[0]}
                                            <br />
                                            {logo.label[1]}
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right — real data as ornament */}
                    <div className="anim-fade [animation-delay:250ms] flex lg:justify-end">
                        <a
                            href="https://github.com/IliassSjm/cognitive-alpha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full max-w-md hover:opacity-90 transition-opacity"
                            title="From my cognitive-alpha project"
                        >
                            <XtHeatmap />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
