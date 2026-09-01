'use client'

import { ArrowUpRight } from 'lucide-react'

interface Project {
    title: string
    description: string
    tech: string
    github: string
    metrics?: string
    year: string
}

const projects: Project[] = [
    {
        title: 'Crypto Perpetuals Alpha',
        year: '2026',
        description:
            'Dollar-neutral long-short across 411 crypto perpetual futures. 379 candidate features pruned to 316 via Spearman IC, Ridge + XGBoost under a rolling 12-month walk-forward, with the cost analysis that kills the headline number.',
        metrics: '#1 / 13 on OOS Sharpe · 9.75 gross @ lag 0 · 1.2 bps break-even cost',
        tech: 'Python · XGBoost · Ridge · walk-forward CV',
        github: 'https://github.com/IliassSjm/crypto-perps-alpha',
    },
    {
        title: 'Cognitive Alpha',
        year: '2025–2026',
        description:
            'Per-pass decision quality on World Cup 2022 tracking data: trained Expected Threat, Spearman-style pitch control, and the gap between the pass played and the best option available.',
        metrics: '126k possession actions · r = 0.93 vs reference xT · 5.4 GB tracking fused',
        tech: 'Python · NumPy · Markov chains · Streamlit',
        github: 'https://github.com/IliassSjm/cognitive-alpha',
    },
    {
        title: 'Leukemia Survival Prediction',
        year: '2025',
        description:
            'Overall survival on clinical + genomic data from 24 hospitals, Cox proportional hazards. QRT / ENS national data challenge.',
        metrics: 'top 12% of the challenge · 4,500+ patients',
        tech: 'Python · CoxPH · survival analysis',
        github: 'https://github.com/IliassSjm/QRT-ENS-DataChallenge-',
    },
    {
        title: 'Options Market Maker',
        year: '2025',
        description:
            'Options market-making simulation: Black-Scholes quoting, inventory skew and delta hedging, evaluated over a 1,000-run backtest.',
        tech: 'Python · FastAPI · Docker',
        github: 'https://github.com/IliassSjm/options-market-maker-sim',
    },
    {
        title: 'Log Anomaly Detection',
        year: '2023',
        description:
            'LSTM sequence model learning the normal grammar of event logs, deployed behind Kafka streaming.',
        tech: 'PyTorch · LSTM · Kafka',
        github: 'https://github.com/IliassSjm/large-anomaly-detection',
    },
]

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-12">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                        01 · Work
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                        Selected projects
                    </h2>
                </div>

                <div className="border-t border-border">
                    {projects.map((project) => (
                        <a
                            key={project.title}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group grid md:grid-cols-12 gap-3 py-8 border-b border-border"
                        >
                            <div className="md:col-span-4 flex items-start justify-between md:block">
                                <h3 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-signal transition-colors">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs text-muted-foreground mt-2">
                                    {project.year}
                                </p>
                            </div>
                            <div className="md:col-span-7 max-w-2xl">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                                {project.metrics && (
                                    <p className="font-mono text-xs text-signal mt-3 tabular-nums">
                                        {project.metrics}
                                    </p>
                                )}
                                <p className="font-mono text-[11px] text-muted-foreground mt-3">
                                    {project.tech}
                                </p>
                            </div>
                            <div className="hidden md:flex md:col-span-1 justify-end">
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-signal transition-colors mt-1" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-10">
                    <a
                        href="https://github.com/IliassSjm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted-foreground hover:text-signal transition-colors"
                    >
                        more on github ↗
                    </a>
                </div>
            </div>
        </section>
    )
}
