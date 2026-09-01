'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Metric {
    value: string
    label: string
}

interface Project {
    title: string
    description: string
    tech: string
    github: string
    metrics?: Metric[]
    featured?: boolean
}

const projects: Project[] = [
    {
        title: 'Crypto Perpetuals Alpha',
        description:
            'Dollar-neutral long-short across 411 crypto perpetual futures. 379 candidate features pruned to 316 via Spearman IC, Ridge + XGBoost under a rolling 12-month walk-forward, with the cost analysis that kills the headline number.',
        tech: 'Python · XGBoost · Ridge · walk-forward CV',
        github: 'https://github.com/IliassSjm/crypto-perps-alpha',
        featured: true,
        metrics: [
            { value: '#1 / 13', label: 'OOS Sharpe, HEC course' },
            { value: '9.75', label: 'Sharpe @ lag 0, gross' },
            { value: '1.2 bps', label: 'break-even cost' },
        ],
    },
    {
        title: 'Cognitive Alpha',
        description:
            'Per-pass decision quality on World Cup 2022 tracking data: trained Expected Threat, Spearman-style pitch control, and the gap between the pass played and the best option available.',
        tech: 'Python · NumPy · Markov chains · Streamlit',
        github: 'https://github.com/IliassSjm/cognitive-alpha',
        featured: true,
        metrics: [
            { value: '126k', label: 'possession actions' },
            { value: 'r = 0.93', label: 'vs reference xT grid' },
            { value: '5.4 GB', label: 'tracking data fused' },
        ],
    },
    {
        title: 'Leukemia Survival Prediction',
        description:
            'Overall survival on clinical + genomic data from 24 hospitals, Cox proportional hazards. Top 12% of the national QRT / ENS data challenge.',
        tech: 'Python · CoxPH · survival analysis',
        github: 'https://github.com/IliassSjm/QRT-ENS-DataChallenge-',
    },
    {
        title: 'Options Market Maker',
        description:
            'Options market-making simulation: quoting and inventory management, served via FastAPI.',
        tech: 'Python · FastAPI · Docker',
        github: 'https://github.com/IliassSjm/options-market-maker-sim',
    },
    {
        title: 'Log Anomaly Detection',
        description:
            'LSTM sequence model learning the normal grammar of event logs, deployed behind Kafka streaming.',
        tech: 'PyTorch · LSTM · Kafka',
        github: 'https://github.com/IliassSjm/large-anomaly-detection',
    },
]

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className={`group flex flex-col rounded-lg border border-border bg-card p-6 md:p-7 hover:border-signal/50 transition-colors ${
                project.featured ? 'lg:col-span-3' : 'lg:col-span-2'
            }`}
        >
            <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-xl font-medium">{project.title}</h3>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-signal transition-colors" />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
            </p>

            {project.metrics && (
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-5 mb-5">
                    {project.metrics.map((m) => (
                        <div key={m.label}>
                            <p className="font-mono text-lg text-signal tabular-nums">{m.value}</p>
                            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide mt-1">
                                {m.label}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            <p className="font-mono text-[11px] text-muted-foreground mt-auto">
                {project.tech}
            </p>
        </motion.a>
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
                    <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
                        Selected projects
                    </h2>
                </div>

                <div className="grid lg:grid-cols-6 gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
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
