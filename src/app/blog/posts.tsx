import type { ReactNode } from 'react'

export interface Post {
    slug: string
    title: string
    date: string
    readingTime: string
    summary: string
    body: ReactNode
}

const P = ({ children }: { children: ReactNode }) => (
    <p className="text-neutral-300 leading-relaxed mb-6">{children}</p>
)

const H2 = ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl font-light text-white mt-12 mb-4">{children}</h2>
)

export const posts: Post[] = [
    {
        slug: 'sharpe-9-vs-transaction-costs',
        title: 'A Sharpe of 9.75 that could not pay its own fees',
        date: 'July 2026',
        readingTime: '6 min',
        summary:
            'My crypto strategy ranked first in class on out-of-sample Sharpe. I still would not trade it. The whole story fits in one number: 1.2 basis points.',
        body: (
            <>
                <P>
                    The final leaderboard of my ML-for-financial-markets course at HEC ranked
                    teams on out-of-sample Sharpe. My pipeline finished first out of 13 with a
                    validation Sharpe of 9.75. I would not put a euro behind it, and I think
                    the reason is more interesting than the number.
                </P>
                <P>
                    The setup: an 18-month hourly panel of 411 crypto perpetual futures, about
                    212 tradable in a typical hour. The signal is a Ridge + XGBoost ensemble
                    trained on 316 features inside a rolling 12-month walk-forward, with a
                    MACD(2,6) bandpass on top that isolates a ~6-hour mean-reversion cycle.
                    Positions are cross-sectionally de-meaned every hour, so the book stays
                    dollar-neutral. Full code is on{' '}
                    <a
                        href="https://github.com/IliassSjm/crypto-perps-alpha"
                        className="underline hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    .
                </P>
                <H2>The decay profile is the diagnosis</H2>
                <P>
                    The first thing I check on any signal now is what happens when execution
                    slips. Here is validation Sharpe by execution lag, in hours, at zero
                    transaction cost:
                </P>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm text-neutral-300 border border-border">
                        <thead>
                            <tr className="border-b border-border text-neutral-500">
                                <th className="text-left p-3">Signal</th>
                                <th className="p-3">Lag 0</th>
                                <th className="p-3">Lag 1</th>
                                <th className="p-3">Lag 3</th>
                                <th className="p-3">Lag 6</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border">
                                <td className="p-3">MACD sellback</td>
                                <td className="p-3 text-center">9.75</td>
                                <td className="p-3 text-center">3.29</td>
                                <td className="p-3 text-center">1.92</td>
                                <td className="p-3 text-center">−1.18</td>
                            </tr>
                            <tr>
                                <td className="p-3">Raw ensemble</td>
                                <td className="p-3 text-center">6.90</td>
                                <td className="p-3 text-center">0.67</td>
                                <td className="p-3 text-center">−1.89</td>
                                <td className="p-3 text-center">−3.51</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <P>
                    The edge lives at lag 0 and collapses within an hour. By lag 6 the sign
                    flips. That flip told me more than the headline: a signal that turns
                    negative when you trade it late is a mean-reversion effect, and catching
                    it requires being early. Overfit noise does not produce that shape. It
                    also means this is a microstructure signal wearing an ML costume, and
                    microstructure signals live or die on execution.
                </P>
                <H2>Then you price the trading</H2>
                <P>
                    Re-ranking the whole cross-section every hour turns over about 0.35 of
                    gross book per hour. Call it eight times a day, three thousand times a
                    year. At that turnover, the break-even transaction cost is 1.2 basis
                    points per side. One basis point of cost drags the Sharpe from 9.75 to
                    1.44. Two basis points puts it under water. Taker fees on crypto perps
                    run 4 to 5 bps.
                </P>
                <P>
                    So the strategy that won the class dies four times over at realistic
                    fees. The course scored gross Sharpe, which is fair for teaching signal
                    construction. A desk would score something else entirely.
                </P>
                <H2>What I took away</H2>
                <P>
                    I used to treat the cost model as a postprocessing step, a haircut you
                    apply at the end. On a signal this fast the cost model decides what the
                    strategy even is. A tradable version would need maker execution, turnover
                    netting, probably a no-trade band, and each of those changes the optimal
                    signal in turn. The lag table and the break-even number now go in every
                    write-up I do, next to the Sharpe. A backtest without its cost
                    sensitivity is an unfinished sentence.
                </P>
            </>
        ),
    },
    {
        slug: 'leakage-traps-walk-forward',
        title: 'Five ways I nearly leaked the future into a backtest',
        date: 'July 2026',
        readingTime: '7 min',
        summary:
            'Every impressive backtest I have built contained at least one small time machine. Here are the five I keep finding, in markets and in medicine.',
        body: (
            <>
                <P>
                    I have built prediction pipelines on bank audit records, crypto
                    perpetuals, and cardiac surgery data over the last two years. Different
                    fields, same failure mode: a number that looks great because some piece
                    of the future crept into the training set. These are the five leaks I
                    now check for first, each one found the hard way.
                </P>
                <H2>1. The label reaches past the split</H2>
                <P>
                    My crypto label was a 2-hour forward return, smoothed to cut noise. Take
                    a training window that ends at midnight and the label of the 11pm row
                    quietly uses 1am returns, which belong to the test month. The fix is
                    boring: purge the rows near the boundary. At Crédit Agricole CIB we used
                    purged, grouped time-series splits for exactly this reason, and I now
                    reach for them by default. The leak is small per row. It is also
                    systematic, and walk-forward backtests average over many boundaries.
                </P>
                <H2>2. Feature selection saw the whole dataset</H2>
                <P>
                    Screening 379 candidate features by information coefficient and keeping
                    316 is fine. Doing the screening on the full panel and then measuring
                    performance on a validation slice that fed the screening is not. My
                    pipeline fits the IC filter on the training period once and freezes it.
                    The clinical version of this bit me harder: with 27 patients and
                    thousands of waveform features, selecting features and evaluating on the
                    same small cohort produced AUROCs that looked publishable and were
                    mostly selection optimism. Permutation tests deflated them fast.
                </P>
                <H2>3. The scaler is a model too</H2>
                <P>
                    Anything fitted to data can leak: StandardScaler means, PCA components,
                    imputation values. Fitting a scaler on all 18 months and then
                    walk-forwarding the model on top hands the model the distribution of the
                    future, including regime shifts it should not know about. In my pipeline
                    the scaler, the PCA and both models refit inside every window. Slower,
                    correct.
                </P>
                <H2>4. The denominator knows tomorrow</H2>
                <P>
                    Volatility-adjusted labels and features need their volatility estimate
                    to come from a trailing window that closes at time t. A centered window,
                    or a full-sample volatility, is a subtle way of conditioning on the
                    future. Same trap with cross-sectional ranks computed over periods that
                    have not finished yet. I write the timestamp arithmetic down on paper
                    before coding it now, because I got it wrong once and the backtest
                    thanked me for it.
                </P>
                <H2>5. The data collection process is itself a signal</H2>
                <P>
                    The medical version taught me this one. Sicker patients get monitored
                    more, so the mere existence of a waveform recording correlates with the
                    outcome you are predicting. A model can score well by learning who got
                    measured instead of what the measurements say. We had to model the
                    monitoring-intensity confound explicitly before the waveform features
                    meant anything. Markets have the same disease under a different name:
                    instruments that delist take their bad returns out of your panel, and
                    what remains flatters you.
                </P>
                <P>
                    The common thread: for every number in the pipeline, ask who computed
                    it and what they could have known at time t. The five leaks above are
                    all failures of that one question. My validation numbers got worse every
                    time I fixed one, which is exactly how I knew the fixes were real.
                </P>
            </>
        ),
    },
]
