import Link from "next/link";

export default function Header() {
    return (
        <section className="flex items-center justify-between px-8 py-4">
            <div>
                <Link href="/">Ngringkes</Link>
            </div>
            <div className="flex">
                <Link href="/podcasts">Your Summarized Podcast</Link>
                <Link href="/podcasts/new">Summarize New Podcast</Link>
                <Link href="/about">About</Link>
            </div>
        </section>
    )
}