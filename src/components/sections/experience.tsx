const experiences = [
    {
        title: 'Quantitative Researcher Intern',
        company: 'WorldQuant (Millennium affiliate)',
        period: 'Oct 2026 — Mar 2027',
        description:
            'Research on LLM-based signal extraction from text data within a Millennium systematic pod.',
    },
    {
        title: 'Visiting Student Researcher',
        company: 'Stanford University',
        period: 'Mar 2026 — Sep 2026',
        description:
            'First-author study with Prof. Louise Sun: predicting a rare, severe complication after cardiac surgery from clinical records and bedside signals. Tested out of sample and validated externally on a second hospital system. Two manuscripts in preparation.',
    },
    {
        title: 'Data Scientist Intern',
        company: 'Crédit Agricole CIB',
        period: 'Mar 2025 — Sep 2025',
        description:
            'Predicted late implementation of audit recommendations across 200k+ records (logistic regression + XGBoost): F1 ≈ 0.75, validated out-of-time with domain experts.',
    },
]

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-12">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                        03 · Experience
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                        Where I have worked
                    </h2>
                </div>

                <div className="border-t border-border">
                    {experiences.map((exp) => (
                        <div
                            key={exp.company + exp.period}
                            className="grid md:grid-cols-4 gap-3 py-6 border-b border-border group"
                        >
                            <div className="font-mono text-xs text-muted-foreground pt-1 tabular-nums">
                                {exp.period}
                            </div>
                            <div className="md:col-span-3 max-w-2xl">
                                <h3 className="font-medium">
                                    {exp.title}
                                    <span className="text-muted-foreground font-normal"> · {exp.company}</span>
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
