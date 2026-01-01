'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface HoverRevealProps {
    children: React.ReactNode
    revealContent: React.ReactNode
    className?: string
}

export function HoverReveal({ children, revealContent, className }: HoverRevealProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <span
            className={cn('relative inline-block cursor-pointer', className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="font-semibold text-white underline decoration-cyan-400 decoration-2 underline-offset-4">
                {children}
            </span>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={isHovered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2"
            >
                {revealContent}
            </motion.div>
        </span>
    )
}

interface MagneticButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        setPosition({ x: x * 0.3, y: y * 0.3 })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.button
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            className={cn(
                'relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-medium text-white transition-shadow hover:shadow-lg hover:shadow-cyan-500/25',
                className
            )}
        >
            {children}
        </motion.button>
    )
}
