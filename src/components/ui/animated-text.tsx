'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
    text: string
    className?: string
    delay?: number
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
    const words = text.split(' ')

    return (
        <motion.span className={cn('inline-flex flex-wrap', className)}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.1,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    )
}

interface TypewriterTextProps {
    text: string
    className?: string
    delay?: number
}

export function TypewriterText({ text, className, delay = 0 }: TypewriterTextProps) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
            className={cn('inline-block', className)}
        >
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.05,
                        delay: delay + i * 0.03,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    )
}

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
}

export function FadeIn({ children, className, delay = 0, direction = 'up' }: FadeInProps) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    }

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
