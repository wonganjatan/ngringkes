import Link from "next/link";

export default function Header() {
    return (
        <section className="flex items-center justify-between px-8 py-4">
            <div>
                <Link href="/">Ngringkes</Link>
            </div>
            <div className="flex">
                <h1>Dashboard (where all summarized podcast goes here)</h1>
                <h1>Add item</h1>
                <h1>About</h1>
            </div>
        </section>
    )
}