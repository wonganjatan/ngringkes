import Link from "next/link";

export default function Header() {
    return (
        <section>
            <div>
                <Link href="/">Ngringkes</Link>
            </div>
            <div>
                <h1>Dashboard (where all summarized podcast goes here)</h1>
                <h1>Add item</h1>
                <h1>About</h1>
            </div>
        </section>
    )
}