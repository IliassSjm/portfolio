import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/sections/contact'
import { posts } from '../posts'

interface Props {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = posts.find((p) => p.slug === slug)
    if (!post) return {}
    return {
        title: `${post.title} | Iliass Sijelmassi`,
        description: post.summary,
    }
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params
    const post = posts.find((p) => p.slug === slug)
    if (!post) notFound()

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 pb-24">
                <article className="container mx-auto px-6 md:px-12 lg:px-24 max-w-3xl">
                    <Link
                        href="/blog"
                        className="text-sm text-neutral-500 hover:text-white transition-colors"
                    >
                        ← All posts
                    </Link>
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mt-8 mb-3">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-light leading-tight mb-10">
                        {post.title}
                    </h1>
                    {post.body}
                </article>
            </main>
            <Footer />
        </>
    )
}
