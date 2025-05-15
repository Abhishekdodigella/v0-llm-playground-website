import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Hero from "@/components/hero"
import ApiSection from "@/components/api-section"
import GpuSection from "@/components/gpu-section"
import CloudSection from "@/components/cloud-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Explore the World of LLMs</h2>
          <p className="text-lg mb-8 max-w-3xl">
            Large Language Models (LLMs) are revolutionizing how we interact with technology. From generating human-like
            text to understanding complex queries, LLMs are powering the next generation of AI applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">LLM APIs</h3>
              <p className="mb-4">Discover the leading LLM APIs and how to integrate them into your applications.</p>
              <Link href="/llm-apis">
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">GPU Compute</h3>
              <p className="mb-4">
                Explore GPU providers that power the training and inference of large language models.
              </p>
              <Link href="/gpu-compute">
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Cloud AI Services</h3>
              <p className="mb-4">Compare cloud-based AI services that offer managed LLM solutions for enterprises.</p>
              <Link href="/cloud-ai">
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <ApiSection />
        <GpuSection />
        <CloudSection />
      </div>
    </main>
  )
}
