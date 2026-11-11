// Small static figures drawn from the projects' own published numbers.
// Plain SVG, rendered on the server: no client JavaScript.

const MUTED = 'var(--muted-foreground)'
const SIGNAL = 'var(--signal)'
const RULE = 'var(--border)'

// ---------------------------------------------------------------------------
// fig. 02 — crypto-perps-alpha: validation Sharpe by execution lag, zero costs
// (MACD-sellback signal). Source: the results table in the repository README.
// ---------------------------------------------------------------------------
const LAG_POINTS = [
    { lag: 0, sharpe: 9.75 },
    { lag: 1, sharpe: 3.29 },
    { lag: 2, sharpe: 1.67 },
    { lag: 3, sharpe: 1.92 },
    { lag: 6, sharpe: -1.18 },
    { lag: 12, sharpe: -1.35 },
]

export function SharpeDecayFigure() {
    const W = 320
    const H = 124
    const left = 26
    const right = 304
    const top = 14
    const bottom = 96
    const x = (lag: number) => left + (lag / 12) * (right - left)
    const y = (v: number) => bottom - ((v + 2) / 12) * (bottom - top) // domain [-2, 10]
    const path = LAG_POINTS.map((p) => `${x(p.lag).toFixed(1)},${y(p.sharpe).toFixed(1)}`).join(' ')

    return (
        <figure className="mt-5 max-w-xs">
            <svg
                viewBox={`0 0 ${W} ${H}`}
                className="w-full h-auto"
                role="img"
                aria-label="Validation Sharpe ratio by execution lag before costs: 9.75 at lag 0, 3.29 at one hour, 1.67 at two, 1.92 at three, minus 1.18 at six and minus 1.35 at twelve hours."
            >
                <line x1={left} x2={right} y1={y(0)} y2={y(0)} stroke={RULE} strokeDasharray="3 3" />
                <text x={left - 6} y={y(0) + 3} textAnchor="end" fontSize="9" fill={MUTED} className="font-mono">
                    0
                </text>
                <polyline points={path} fill="none" stroke={SIGNAL} strokeWidth="1.5" strokeLinejoin="round" />
                {LAG_POINTS.map((p) => (
                    <g key={p.lag}>
                        <circle
                            cx={x(p.lag)}
                            cy={y(p.sharpe)}
                            r="2.8"
                            fill={p.sharpe > 0 ? SIGNAL : 'var(--background)'}
                            stroke={SIGNAL}
                            strokeWidth="1.2"
                        />
                        <text
                            x={x(p.lag)}
                            y={bottom + 20}
                            textAnchor="middle"
                            fontSize="9"
                            fill={MUTED}
                            className="font-mono"
                        >
                            {p.lag}h
                        </text>
                    </g>
                ))}
                <text x={x(0) + 8} y={y(9.75) + 3} fontSize="10" fill={SIGNAL} className="font-mono">
                    9.75
                </text>
                <text x={x(12)} y={y(-1.35) - 8} textAnchor="end" fontSize="10" fill={MUTED} className="font-mono">
                    −1.35
                </text>
            </svg>
            <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">
                fig. 02 — validation Sharpe by execution lag, before costs
            </figcaption>
        </figure>
    )
}

// ---------------------------------------------------------------------------
// fig. 03 — tamponade study: AUROC with 95% confidence intervals, internal
// (Stanford) and external (MIMIC-IV, matched outcome definition) validation.
// Source: the paper, abstract and Table 6.6.
// ---------------------------------------------------------------------------
const AUROC_ROWS = [
    { label: 'internal', estimate: 0.74, low: 0.68, high: 0.79, text: '0.74' },
    { label: 'external', estimate: 0.695, low: 0.62, high: 0.76, text: '0.695' },
]

export function AurocFigure() {
    const W = 320
    const H = 92
    const left = 70
    const right = 286
    const x = (v: number) => left + ((v - 0.5) / 0.35) * (right - left) // domain [0.5, 0.85]
    const ticks = [0.5, 0.6, 0.7, 0.8]

    return (
        <figure className="mt-5 max-w-xs">
            <svg
                viewBox={`0 0 ${W} ${H}`}
                className="w-full h-auto"
                role="img"
                aria-label="AUROC with 95 percent confidence intervals. Internal validation: 0.74, interval 0.68 to 0.79. External validation on MIMIC-IV: 0.695, interval 0.62 to 0.76. 0.5 is chance."
            >
                <line x1={x(0.5)} x2={x(0.5)} y1={8} y2={62} stroke={RULE} strokeDasharray="3 3" />
                {AUROC_ROWS.map((row, i) => {
                    const cy = 20 + i * 28
                    return (
                        <g key={row.label}>
                            <text x={0} y={cy + 3} fontSize="10" fill={MUTED} className="font-mono">
                                {row.label}
                            </text>
                            <line x1={x(row.low)} x2={x(row.high)} y1={cy} y2={cy} stroke={SIGNAL} strokeWidth="1.2" />
                            <line x1={x(row.low)} x2={x(row.low)} y1={cy - 4} y2={cy + 4} stroke={SIGNAL} strokeWidth="1.2" />
                            <line x1={x(row.high)} x2={x(row.high)} y1={cy - 4} y2={cy + 4} stroke={SIGNAL} strokeWidth="1.2" />
                            <circle cx={x(row.estimate)} cy={cy} r="3" fill={SIGNAL} />
                            <text x={x(row.high) + 8} y={cy + 3} fontSize="10" fill={SIGNAL} className="font-mono">
                                {row.text}
                            </text>
                        </g>
                    )
                })}
                {ticks.map((t) => (
                    <text
                        key={t}
                        x={x(t)}
                        y={82}
                        textAnchor="middle"
                        fontSize="9"
                        fill={MUTED}
                        className="font-mono"
                    >
                        {t.toFixed(1)}
                    </text>
                ))}
            </svg>
            <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">
                fig. 03 — AUROC with 95% confidence intervals · 0.5 is chance
            </figcaption>
        </figure>
    )
}
