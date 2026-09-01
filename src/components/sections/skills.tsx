'use client'

const skills = [
    { label: 'Languages', items: 'Python · C++ · Java · SQL · R · TypeScript' },
    { label: 'ML & Stats', items: 'PyTorch · scikit-learn · XGBoost · survival analysis · time series' },
    { label: 'Tools', items: 'Docker · Git · MLflow · FastAPI · Kafka · Linux' },
]

export function SkillsSection() {
    return (
        <section id="skills" className="py-16 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <dl className="grid md:grid-cols-3 gap-8">
                    {skills.map((group) => (
                        <div key={group.label}>
                            <dt className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                                {group.label}
                            </dt>
                            <dd className="text-sm text-foreground/90 leading-relaxed">
                                {group.items}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
