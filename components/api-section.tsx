import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ApiSection() {
  const apis = [
    {
      name: "OpenAI",
      description: "Access GPT-4o, GPT-4, and other powerful models for text generation, embeddings, and more.",
      useCases: ["Chatbots", "Content generation", "Summarization", "Translation"],
      link: "/llm-apis#openai",
    },
    {
      name: "Anthropic",
      description: "Utilize Claude models known for their helpfulness, harmlessness, and honesty.",
      useCases: ["Long-context processing", "Document analysis", "Reasoning tasks", "Safety-critical applications"],
      link: "/llm-apis#anthropic",
    },
    {
      name: "Google Gemini",
      description: "Leverage Google's multimodal models for text, image, and code understanding.",
      useCases: ["Multimodal applications", "Code generation", "Research assistance", "Creative content"],
      link: "/llm-apis#google",
    },
  ]

  return (
    <section id="learn-more" className="mb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Popular LLM APIs</h2>
        <Link href="/llm-apis">
          <Button variant="ghost" className="flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apis.map((api) => (
          <Card key={api.name} className="h-full">
            <CardHeader>
              <CardTitle>{api.name}</CardTitle>
              <CardDescription>{api.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium mb-2">Common Use Cases:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {api.useCases.map((useCase) => (
                  <li key={useCase} className="text-gray-600">
                    {useCase}
                  </li>
                ))}
              </ul>
              <Link href={api.link}>
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
