'use client'

import { cn } from '@/lib/utils'

interface VignetteProps {
    className?: string
    color?: string
    intensity?: 'light' | 'medium' | 'strong'
}

export function Vignette({ className, color = 'cyan', intensity = 'medium' }: VignetteProps) {
    const intensityMap = {
        light: 'opacity-30',
        medium: 'opacity-50',
        strong: 'opacity-70',
    }

    const colorMap: Record<string, string> = {
        cyan: 'from-cyan-500/20 via-transparent',
        purple: 'from-purple-500/20 via-transparent',
        blue: 'from-blue-500/20 via-transparent',
    }

    return (
        <>
            {/* Top vignette */}
            <div
                className={cn(
                    'pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b',
                    colorMap[color] || colorMap.cyan,
                    intensityMap[intensity],
                    className
                )}
            />
            {/* Bottom vignette */}
            <div
                className={cn(
                    'pointer-events-none fixed inset-x-0 bottom-0 h-40 bg-gradient-to-t',
                    colorMap[color] || colorMap.cyan,
                    intensityMap[intensity],
                    className
                )}
            />
            {/* Left vignette */}
            <div
                className={cn(
                    'pointer-events-none fixed inset-y-0 left-0 w-40 bg-gradient-to-r',
                    colorMap[color] || colorMap.cyan,
                    intensityMap[intensity],
                    className
                )}
            />
            {/* Right vignette */}
            <div
                className={cn(
                    'pointer-events-none fixed inset-y-0 right-0 w-40 bg-gradient-to-l',
                    colorMap[color] || colorMap.cyan,
                    intensityMap[intensity],
                    className
                )}
            />
        </>
    )
}
