import Link from 'next/link'
import { Navigation } from '@/components/navigation'

export default function NotFound() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6">
                        404
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mb-8">
                        This page does not exist.
                    </h1>
                    <Link
                        href="/"
                        className="font-mono text-sm text-signal hover:underline underline-offset-4"
                    >
                        back to the homepage ↗
                    </Link>
                </div>
            </main>
        </>
    )
}
