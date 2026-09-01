'use client'

export function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                    04 · Contact
                </p>
                <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight mb-8 max-w-3xl">
                    Looking for opportunities in quantitative research and applied ML.
                </h2>
                <a
                    href="mailto:iliass.sijelmassi-idrissi@polytechnique.edu"
                    className="inline-block font-mono text-sm md:text-base text-signal hover:underline underline-offset-4 break-all"
                >
                    iliass.sijelmassi-idrissi@polytechnique.edu
                </a>
                <div className="flex gap-6 mt-8 font-mono text-xs text-muted-foreground">
                    <a
                        href="https://github.com/IliassSjm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        github ↗
                    </a>
                    <a
                        href="https://www.linkedin.com/in/iliass-sijelmassi-068b46189/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        linkedin ↗
                    </a>
                </div>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="py-8 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground">
                    <p>© 2026 Iliass Sijelmassi</p>
                    <p>Paris — Stanford · built by hand, data included</p>
                </div>
            </div>
        </footer>
    )
}
