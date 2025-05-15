import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function GpuSection() {
  const providers = [
    {
      name: "NVIDIA",
      description: "Leading provider of GPUs optimized for AI workloads with CUDA ecosystem.",
      offerings: ["H100", "A100", "L4", "T4"],
      link: "/gpu-compute#nvidia",
    },
    {
      name: "AWS",
      description: "Cloud-based GPU instances with flexible pricing and scaling options.",
      offerings: ["P4d", "P3", "G5", "Inf1"],
      link: "/gpu-compute#aws",
    },
    {
      name: "Google Cloud",
      description: "TPU and GPU offerings with integration to Google's AI ecosystem.",
      offerings: ["A3", "A2", "TPU v4", "TPU v5e"],
      link: "/gpu-compute#google-cloud",
    },
  ]

  return (
    <section className="mb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">GPU Compute Providers</h2>
        <Link href="/gpu-compute">
          <Button variant="ghost" className="flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <Card key={provider.name} className="h-full">
            <CardHeader>
              <CardTitle>{provider.name}</CardTitle>
              <CardDescription>{provider.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium mb-2">Popular Offerings:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {provider.offerings.map((offering) => (
                  <span key={offering} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                    {offering}
                  </span>
                ))}
              </div>
              <Link href={provider.link}>
                <Button variant="outline" className="w-full mt-2">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
