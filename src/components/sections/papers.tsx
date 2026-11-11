import { AurocFigure } from '@/components/ui/figures'

const paper = {
    title: 'Predicting Severe Pericardial Tamponade After Cardiac Surgery',
    year: '2026',
    venue: 'MSc research paper · with Stanford University School of Medicine',
    description:
        'Four model families on a Stanford surgical cohort (95 severe incident events, 6,761 controls). The calibrated pre-operative model reaches AUROC 0.74 and validates externally on MIMIC-IV; later ICU and bedside-waveform data add no established increment once monitoring-intensity confounds and selection optimism are controlled.',
    metrics: 'AUROC 0.74 internal · 0.695 external (MIMIC-IV, 11,832 admissions)',
    file: '/ResearchPaper2026_I_SIJELMASSI_PredictingSevereTamponade.pdf',
}

export function PapersSection() {
    return (
        <section id="papers" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-12">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                        04 · Research
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                        Papers &amp; manuscripts
                    </h2>
                </div>

                <div className="border-t border-border">
                    <a
                        href={paper.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid md:grid-cols-12 gap-3 py-8 border-b border-border"
                    >
                        <div className="md:col-span-4">
                            <h3 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-signal transition-colors max-w-sm">
                                {paper.title}
                            </h3>
                            <p className="font-mono text-xs text-muted-foreground mt-2">
                                {paper.year} · pdf ↗
                            </p>
                        </div>
                        <div className="md:col-span-8 max-w-2xl">
                            <p className="font-mono text-[11px] text-muted-foreground mb-3">
                                {paper.venue}
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {paper.description}
                            </p>
                            <p className="font-mono text-xs text-signal mt-3 tabular-nums">
                                {paper.metrics}
                            </p>
                            <AurocFigure />
                        </div>
                    </a>
                </div>

                <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
                    Two manuscripts from this study are in preparation.
                </p>
            </div>
        </section>
    )
}
