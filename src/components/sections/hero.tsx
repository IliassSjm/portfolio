'use client'

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Lazy load Spline only after initial render for better performance
const SplineScene = dynamic(
    () => import('@/components/ui/spline').then(mod => ({ default: mod.SplineScene })),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full flex items-center justify-center">
                <div className="loader"></div>
            </div>
        )
    }
)

export function HeroSection() {
    const [showSpline, setShowSpline] = useState(false)

    // Delay Spline load to prioritize content
    useEffect(() => {
        const timer = setTimeout(() => setShowSpline(true), 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="min-h-screen flex items-center justify-center p-4 md:p-8">
            <Card className="w-full max-w-6xl h-[600px] md:h-[700px] bg-[#141414] relative overflow-hidden border-neutral-800">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />

                <div className="flex flex-col md:flex-row h-full">
                    {/* Left content */}
                    <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                        <p className="text-neutral-400 text-sm mb-4">
                            AI Student · Polytechnique & HEC Paris
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                            Hello, I&apos;m Iliass Sijelmassi
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-300 mb-4">
                            Welcome to my website.
                        </p>

                        <p className="text-neutral-400 max-w-lg mb-8">
                            I&apos;m passionate about machine learning, generative AI, and statistics.
                            Currently pursuing a joint MSc in AI at École Polytechnique & HEC Paris.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors"
                            >
                                View My Work
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
                            >
                                Get in Touch
                            </Link>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
                            >
                                View CV
                            </a>
                        </div>
                    </div>

                    {/* Right content - 3D Scene (lazy loaded) */}
                    <div className="flex-1 relative hidden md:block">
                        {showSpline && (
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        )}
                    </div>
                </div>
            </Card>
        </section>
    )
}
