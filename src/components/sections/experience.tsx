'use client'

const experiences = [
    {
        title: 'Quantitative Researcher Intern',
        company: 'WorldQuant (Millennium)',
        period: 'Oct 2026 — Mar 2027',
        description:
            'Systematic quantitative research within a Millennium systematic pod. Mission details confidential.',
    },
    {
        title: 'Visiting Student Researcher',
        company: 'Stanford University',
        period: 'Mar 2026 — Sep 2026',
        description:
            'Cardiac-event prediction under Dr. Louise Sun: deep learning on large-scale, noisy longitudinal clinical data, with leakage-controlled evaluation against clinical risk scores. First-author paper in preparation.',
    },
    {
        title: 'Data Scientist Intern',
        company: 'Crédit Agricole CIB',
        period: 'Mar 2025 — Sep 2025',
        description:
            'Audit-risk models on 200k+ records (XGBoost + regularized logistic regression), purged time-series validation, SHAP explainability for auditors.',
    },
    {
        title: 'Java Consultant Intern',
        company: 'Infosys — Renault',
        period: 'Mar 2023 — Oct 2023',
        description:
            'Backend modules for supply-chain platforms. Java, PostgreSQL, Oracle.',
    },
    {
        title: 'Software Developer Intern',
        company: "Kuyper's Auto",
        period: 'Jun 2022 — Aug 2022',
        description: 'Web interface and online reservation system, built directly with the owner.',
    },
]

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-12">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                        02 · Experience
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
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
