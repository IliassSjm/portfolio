import { ArrowUpRight } from 'lucide-react'

interface Result {
    rank: string
    field: string
    event: string
    status: string
    live?: boolean
    description: string
    href?: string
}

const results: Result[] = [
    {
        rank: '2nd',
        field: 'of 1,200+ participants',
        event: 'QRT · ENS Data Challenge 2026',
        status: 'ongoing',
        live: true,
        description:
            'Predicting the next-day return sign of anonymised long-short allocations. From the 0.51 benchmark to 0.79 accuracy by reconstructing the allocations’ holdings from external market data.',
        href: 'https://challengedata.ens.fr/challenges/167',
    },
    {
        rank: '1st',
        field: 'in one round, ~30 teams',
        event: 'G-Research Trading Game, Paris',
        status: 'Sep 2026',
        description:
            'A live sequential-decision game: an analytic optimal-stopping threshold, adapted during play to an unknown reward distribution and to competing agents.',
    },
]

function ResultRow({ result }: { result: Result }) {
    const body = (
        <>
            <div className="md:col-span-4">
                <p className="font-display text-5xl md:text-6xl leading-none tracking-tight">
                    {result.rank}
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-3">{result.field}</p>
            </div>
            <div className="md:col-span-7 max-w-2xl">
                <h3 className="font-medium">
                    {result.event}
                    <span
                        className={`ml-3 font-mono text-[11px] font-normal ${
                            result.live ? 'text-signal' : 'text-muted-foreground'
                        }`}
                    >
                        {result.status}
                    </span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    {result.description}
                </p>
            </div>
            <div className="hidden md:flex md:col-span-1 justify-end">
                {result.href && (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-signal transition-colors mt-1" />
                )}
            </div>
        </>
    )
    const rowClass = 'group grid md:grid-cols-12 gap-3 py-8 border-b border-border'

    return result.href ? (
        <a href={result.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
            {body}
        </a>
    ) : (
        <div className={rowClass}>{body}</div>
    )
}

export function ResultsSection() {
    return (
        <section id="competitions" className="py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-12">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                        02 · Competitions
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                        Ranked results
                    </h2>
                </div>

                <div className="border-t border-border">
                    {results.map((result) => (
                        <ResultRow key={result.event} result={result} />
                    ))}
                </div>
            </div>
        </section>
    )
}
