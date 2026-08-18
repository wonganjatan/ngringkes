import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
    return (
        <main className="h-screen flex flex-col justify-between">
            <Header />
            <section className="flex-1 p-8">
                <div className="grid grid-cols-2 border-b border-gray-200">
                    <div className="border-r border-gray-200 pr-8 pb-8">
                        <h1 className="text-2xl font-bold">What is it?</h1>
                        <p>
                            The word Ngringkes is originally come from Javanese word which mean summarize.
                            Ngringkes is a tool that convert podcast into a clean sumamrized transcript without listening to the whole thing
                        </p>
                    </div>
                    <div className="pl-8 pb-8">
                        <h1 className="text-2xl font-bold">But why?</h1>
                        <p>
                            I built this because I have little time to sit throught full lecture recordings or the world economy and AI related podcasts on Youtube that I wanted to keep up with.
                            This tool help me to transcribe and summarize it, so I can catch up in minutes
                        </p>
                    </div>
                </div>
                <div className="pt-8 grid grid-rows-2 items-center justify-items-center">
                    <div className="w-full text-center border-b border-gray-200 pb-8">
                        <h1 className="text-2xl font-bold">How it works?</h1>
                        <p>TODO</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold">Tech stack</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="inline-flex items-center gap-1 px-2 py-1 h-6 bg-zinc-100 rounded-full text-xs font-medium hover:opacity-50">Next.js</span>
                            <span className="inline-flex items-center gap-1 px-2 py-1 h-6 bg-zinc-100 rounded-full text-xs font-medium hover:opacity-50">Tailwind CSS</span>
                            <span className="inline-flex items-center gap-1 px-2 py-1 h-6 bg-zinc-100 rounded-full text-xs font-medium hover:opacity-50">Gemini</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}