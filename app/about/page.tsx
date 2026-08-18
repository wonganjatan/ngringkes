import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
    return (
        <main className="h-screen flex flex-col justify-between">
            <Header />
            <section>
                <div>
                    <h1>What is it?</h1>
                    <p>
                        The word Ngringkes is originally come from Javanese word which mean summarize.
                        Ngringkes is a tool that convert podcast into a clean sumamrized transcript without listening to the whole thing
                    </p>
                </div>
                <div>
                    <h1>But why?</h1>
                    <p>
                        I built this because I have little time to sit throught full lecture recordings or the world economy and AI related podcasts on Youtube that I wanted to keep up with.
                        This tool help me to transcribe and summarize it, so I can catch up in minutes
                    </p>
                </div>
                <div>
                    <h1>How it works?</h1>
                    <p>TODO</p>
                </div>
                <div>
                    <h1>Tech stack</h1>
                    <p>Built with Next.js, Tailwind CSS, and Gemini API</p>
                </div>
            </section>
            <Footer />
        </main>
    )
}