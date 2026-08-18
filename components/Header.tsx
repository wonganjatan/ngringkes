import Link from "next/link";

export default function Header() {
    return (
        <section className="flex items-center justify-between px-8 py-4 bg-linear-to-br from-indigo-600 to-purple-500">
            <div>
                <Link href="/" className="text-white text-2xl">Ngringkes</Link>
            </div>
            <nav className="flex items-center justify-center gap-2">
                <Link href="/podcasts" className="flex flex-col text-white border-2 border-transparent hover:border-b-red-500 transition-colors duration-300">
                    Your Podcasts
                </Link>
                <Link href="/podcasts/new" className="flex flex-col text-white border-2 border-transparent hover:border-b-yellow-500 transition-colors duration-300">
                    New Podcast
                </Link>
                <Link href="/about" className="text-white border-2 border-transparent hover:border-b-green-500 transition-colors duration-300">About</Link>
            </nav>
        </section>
    )
}