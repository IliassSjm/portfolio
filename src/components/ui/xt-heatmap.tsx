'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Trained Expected Threat surface (12x8, Gaussian-smoothed), value iteration on
// 251k mirrored possession actions from all 64 matches of World Cup 2022.
// Values are P(goal within the possession) from each zone. Source:
// github.com/IliassSjm/cognitive-alpha — xt_trained.json, grid_smoothed.
const XT: number[][] = [
    [0.0039, 0.0047, 0.0059, 0.0072, 0.0086, 0.0103, 0.0125, 0.0153, 0.019, 0.0232, 0.0276, 0.0316],
    [0.0045, 0.0053, 0.0065, 0.0079, 0.0094, 0.0112, 0.0134, 0.0165, 0.0209, 0.0274, 0.0348, 0.039],
    [0.0052, 0.006, 0.0072, 0.0086, 0.0101, 0.012, 0.0143, 0.0178, 0.0239, 0.0383, 0.0623, 0.0776],
    [0.0057, 0.0064, 0.0076, 0.0089, 0.0104, 0.0123, 0.0149, 0.0189, 0.0273, 0.0555, 0.111, 0.1495],
    [0.0057, 0.0064, 0.0076, 0.0089, 0.0105, 0.0124, 0.0149, 0.0191, 0.028, 0.0594, 0.1188, 0.154],
    [0.0052, 0.006, 0.0073, 0.0087, 0.0102, 0.0121, 0.0145, 0.0181, 0.025, 0.0423, 0.0697, 0.0825],
    [0.0045, 0.0054, 0.0066, 0.008, 0.0095, 0.0114, 0.0137, 0.0169, 0.0218, 0.0292, 0.0372, 0.0409],
    [0.004, 0.0048, 0.006, 0.0073, 0.0088, 0.0105, 0.0128, 0.0158, 0.0198, 0.0244, 0.0287, 0.0322],
]

const VMAX = 0.154
const CELL = 34
const GAP = 3
const W = 12 * CELL + 11 * GAP
const H = 8 * CELL + 7 * GAP

export function XtHeatmap() {
    const [hover, setHover] = useState<{ r: number; c: number } | null>(null)
    const reduce = useReducedMotion()
    const hoverValue = hover ? XT[hover.r][hover.c] : null

    return (
        <div className="w-full max-w-md">
            <svg
                viewBox={`0 0 ${W} ${H}`}
                className="w-full h-auto"
                role="img"
                aria-label="Expected Threat surface trained on World Cup 2022 data"
                onMouseLeave={() => setHover(null)}
            >
                {XT.map((row, r) =>
                    row.map((v, c) => {
                        const intensity = Math.sqrt(v / VMAX)
                        const isMax = v === VMAX
                        return (
                            <motion.rect
                                key={`${r}-${c}`}
                                x={c * (CELL + GAP)}
                                y={r * (CELL + GAP)}
                                width={CELL}
                                height={CELL}
                                rx={3}
                                initial={reduce ? false : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: reduce ? 0 : 0.4 + (c * 8 + r) * 0.014, duration: 0.5 }}
                                fill="var(--signal)"
                                fillOpacity={0.06 + 0.85 * intensity}
                                stroke={isMax ? 'var(--signal)' : 'transparent'}
                                strokeWidth={isMax ? 1.5 : 0}
                                onMouseEnter={() => setHover({ r, c })}
                                style={{ cursor: 'crosshair' }}
                            />
                        )
                    })
                )}
            </svg>
            <div className="mt-3 flex items-baseline justify-between font-mono text-[11px] text-muted-foreground">
                <span>
                    fig. 01 — trained xT surface, WC 2022 · attacking →
                </span>
                <span className="tabular-nums text-signal">
                    {hoverValue !== null ? `xT = ${hoverValue.toFixed(4)}` : `max = ${VMAX.toFixed(3)}`}
                </span>
            </div>
        </div>
    )
}
