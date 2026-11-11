import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/sections/contact'
import { posts } from './posts'

export const metadata: Metadata = {
    title: 'Blog | Iliass Sijelmassi',
    description:
        'Notes on quantitative research and machine learning: transaction costs, leakage, validation.',
}

export default function BlogIndex() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 pb-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-3xl">
                    <p className="text-sm text-neutral-500 mb-4">Blog</p>
                    <h1 className="text-3xl md:text-4xl font-light mb-4">
                        Notes from the pipeline
                    </h1>
                    <p className="text-neutral-400 mb-16">
                        Things I learned building prediction systems on markets, clinical
                        data and tracking feeds. Short, specific, with the numbers.
                    </p>

                    <div className="space-y-12">
                        {posts.map((post) => (
                            <article key={post.slug} className="group">
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-2">
                                        <span>{post.date}</span>
                                        <span>·</span>
                                        <span>{post.readingTime}</span>
                                    </div>
                                    <h2 className="text-xl font-medium mb-2 group-hover:text-neutral-300 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        {post.summary}
                                    </p>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
