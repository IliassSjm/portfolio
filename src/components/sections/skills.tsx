const skills = [
    { label: 'Languages', items: 'Python · SQL · R · MATLAB · Bash · C++ / Java (working knowledge)' },
    { label: 'ML & Stats', items: 'PyTorch · scikit-learn · XGBoost · survival analysis · time series' },
    { label: 'Tools', items: 'Docker · Git · MLflow · FastAPI · Kafka · Linux' },
]

const openSource = [
    {
        project: 'mplsoccer',
        change: 'Pitch.pcolormesh',
        href: 'https://github.com/andrewRowlinson/mplsoccer/pull/125',
    },
    {
        project: 'statsbombpy',
        change: 'split_locations',
        href: 'https://github.com/hudl/statsbombpy/pull/80',
    },
]

export function SkillsSection() {
    return (
        <section id="skills" className="py-16 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <div>
                        <dt className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                            Open source · merged
                        </dt>
                        <dd className="text-sm text-foreground/90 leading-relaxed">
                            {openSource.map((item) => (
                                <a
                                    key={item.project}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-signal transition-colors"
                                >
                                    {item.project} <span className="font-mono text-xs text-muted-foreground">{item.change}</span> ↗
                                </a>
                            ))}
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}
