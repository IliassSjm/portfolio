'use client'

const papers = [
    {
        title: 'Predicting Severe Pericardial Tamponade After Cardiac Surgery',
        year: '2026',
        venue: 'MSc research paper · with Stanford University School of Medicine',
        description:
            'Four model families on a Stanford surgical cohort (95 severe incident events, 6,761 controls). The calibrated pre-operative model reaches AUROC 0.74 and validates externally on MIMIC-IV; later ICU and bedside-waveform data add no established increment once monitoring-intensity confounds and selection optimism are controlled.',
        file: '/ResearchPaper2026_I_SIJELMASSI_PredictingSevereTamponade.pdf',
        metrics: [
            { value: '0.74', label: 'AUROC, internal' },
            { value: '0.695', label: 'AUROC, MIMIC-IV ext.' },
            { value: '11,969', label: 'external admissions' },
        ],
    },
    {
        title: 'GMSK Modulation: Analysis and Implementation',
        year: '2024',
        venue: 'Technical report · signal processing',
        description:
            'Gaussian Minimum Shift Keying: theoretical foundations, spectral efficiency analysis, and practical implementation considerations.',
        file: '/GMSK.pdf',
        metrics: null,
    },
]

export function PapersSection() {
    return (
        <section id="papers" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-12">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                        03 · Research
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
                        Papers &amp; reports
                    </h2>
                </div>

                <div className="grid gap-4 max-w-3xl">
                    {papers.map((paper) => (
                        <a
                            key={paper.title}
                            href={paper.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-lg border border-border bg-card p-6 md:p-7 hover:border-signal/50 transition-colors"
                        >
                            <div className="flex items-baseline justify-between gap-4 mb-1">
                                <h3 className="font-display text-lg font-medium leading-snug">
                                    {paper.title}
                                </h3>
                                <span className="font-mono text-xs text-muted-foreground shrink-0">
                                    pdf ↗
                                </span>
                            </div>
                            <p className="font-mono text-[11px] text-muted-foreground mb-4">
                                {paper.year} · {paper.venue}
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {paper.description}
                            </p>
                            {paper.metrics && (
                                <div className="grid grid-cols-3 gap-4 border-t border-border pt-4 mt-5">
                                    {paper.metrics.map((m) => (
                                        <div key={m.label}>
                                            <p className="font-mono text-base text-signal tabular-nums">
                                                {m.value}
                                            </p>
                                            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">
                                                {m.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
