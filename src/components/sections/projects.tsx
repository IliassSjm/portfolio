import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SharpeDecayFigure } from '@/components/ui/figures'

interface Project {
    title: string
    year: string
    description: string
    tech: string
    github?: string
    metrics?: string
    figure?: ReactNode
}

const projects: Project[] = [
    {
        title: 'Crypto Prediction-Market Strategy',
        year: '2026 — live',
        description:
            'Systematic strategy on Polymarket crypto markets, trading live with an automated daily data and signal pipeline.',
        tech: 'Python',
    },
    {
        title: 'Crypto Perpetuals Alpha',
        year: '2026',
        description:
            'Dollar-neutral long-short across 411 crypto perpetual futures. 379 candidate features pruned to 316 via Spearman IC, Ridge + XGBoost under a rolling 12-month walk-forward, with the cost analysis that kills the headline number.',
        metrics: '#1 / 13 on OOS Sharpe · 9.75 gross @ lag 0 · 1.2 bps break-even cost',
        tech: 'Python · XGBoost · Ridge · walk-forward CV',
        github: 'https://github.com/IliassSjm/crypto-perps-alpha',
        figure: <SharpeDecayFigure />,
    },
    {
        title: 'Log Anomaly Detection',
        year: '2023–2026',
        description:
            'Two detectors over event logs: a supervised LSTM classifier, served behind a Kafka streaming pipeline, and a next-event language model trained from scratch on normal flows only. On a benchmark built so the classes overlap, the README explains why the unsupervised model fails.',
        metrics: 'held-out AUROC, hard regime: classifier 0.967 · language model 0.54 · leak-free split',
        tech: 'PyTorch · LSTM · Kafka · FastAPI',
        github: 'https://github.com/IliassSjm/large-anomaly-detection',
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
]

function ProjectRow({ project }: { project: Project }) {
    const linked = Boolean(project.github)
    const body = (
        <>
            <div className="md:col-span-4 flex items-start justify-between md:block">
                <h3
                    className={`font-display text-2xl md:text-3xl leading-tight transition-colors ${
                        linked ? 'group-hover:text-signal' : ''
                    }`}
                >
                    {project.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mt-2 shrink-0 pl-4 md:pl-0">
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
                <p className="font-mono text-[11px] text-muted-foreground mt-3">{project.tech}</p>
                {project.figure}
            </div>
            <div className="hidden md:flex md:col-span-1 justify-end">
                {linked ? (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-signal transition-colors mt-1" />
                ) : (
                    <span className="font-mono text-[11px] text-muted-foreground mt-1">private</span>
                )}
            </div>
        </>
    )
    const rowClass = 'group grid md:grid-cols-12 gap-3 py-8 border-b border-border'

    return linked ? (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={rowClass}>
            {body}
        </a>
    ) : (
        <div className={rowClass}>{body}</div>
    )
}

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
                        <ProjectRow key={project.title} project={project} />
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
