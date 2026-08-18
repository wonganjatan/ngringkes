import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header/>
      <section className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Podcast Summarizer</h1>
          <p>AI-powered transcription and summarization for your favourite podcasts</p>
        </div>
        
        <Link href="/podcasts/new" className="text-white border border-indigo-600 rounded-2xl p-2 px-6 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 cursor-pointer">Get started</Link>
      </section>
      <Footer/>
    </main>
  );
}
