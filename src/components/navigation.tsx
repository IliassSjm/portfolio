'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Research', href: '/#papers' },
    { label: 'Contact', href: '/#contact' },
]

const socials = [
    { label: 'GitHub', href: 'https://github.com/IliassSjm', icon: Github },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/iliass-sijelmassi-068b46189/',
        icon: Linkedin,
    },
    {
        label: 'Email',
        href: 'mailto:iliass.sijelmassi-idrissi@polytechnique.edu',
        icon: Mail,
    },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [pill, setPill] = useState({ left: 0, width: 0, visible: false })
    const progressRef = useRef<HTMLDivElement>(null)

    // Scroll progress hairline under the bar
    useEffect(() => {
        const bar = progressRef.current
        if (!bar) return
        let frame = 0
        const update = () => {
            frame = 0
            const max = document.documentElement.scrollHeight - window.innerHeight
            const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
            bar.style.transform = `scaleX(${progress})`
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            if (frame) cancelAnimationFrame(frame)
        }
    }, [])

    // Mobile menu: Escape closes it, and the page behind does not scroll
    useEffect(() => {
        if (!isOpen) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener('keydown', onKey)
        }
    }, [isOpen])

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background">
                <div
                    ref={progressRef}
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-px bg-signal origin-left"
                    style={{ transform: 'scaleX(0)' }}
                />
                <div className="flex items-center justify-between px-6 py-4 md:px-12">
                    <Link
                        href="/"
                        className="font-mono text-sm text-foreground hover:text-signal transition-colors"
                    >
                        i.sijelmassi
                    </Link>

                    {/* Desktop links, with a pill that slides to the hovered item */}
                    <div
                        className="relative hidden md:flex items-center gap-1"
                        onMouseLeave={() => setPill((p) => ({ ...p, visible: false }))}
                    >
                        <span
                            aria-hidden
                            className="absolute left-0 top-0 h-full rounded-md bg-secondary transition-[transform,width,opacity] duration-200 ease-out"
                            style={{
                                transform: `translateX(${pill.left}px)`,
                                width: pill.width,
                                opacity: pill.visible ? 1 : 0,
                            }}
                        />
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onMouseEnter={(e) =>
                                    setPill({
                                        left: e.currentTarget.offsetLeft,
                                        width: e.currentTarget.offsetWidth,
                                        visible: true,
                                    })
                                }
                                className="relative z-10 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-muted-foreground hover:text-signal transition-colors"
                        >
                            cv ↗
                        </a>
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label={label}
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <span
                            className={`block h-px w-6 bg-white transition-transform duration-200 ${
                                isOpen ? 'translate-y-[7px] rotate-45' : ''
                            }`}
                        />
                        <span
                            className={`block h-px w-6 bg-white transition-opacity duration-200 ${
                                isOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block h-px w-6 bg-white transition-transform duration-200 ${
                                isOpen ? '-translate-y-[7px] -rotate-45' : ''
                            }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                inert={!isOpen}
                className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-card border-l border-border md:hidden transition-transform duration-300 ease-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex h-full flex-col gap-6 p-12 pt-24">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="font-display text-2xl hover:text-signal transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="font-display text-2xl hover:text-signal transition-colors"
                    >
                        CV ↗
                    </a>
                    <div className="mt-auto flex items-center gap-6 border-t border-border pt-6">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                                {label.toLowerCase()}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                />
            )}
        </>
    )
}
