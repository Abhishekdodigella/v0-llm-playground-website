import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CloudSection() {
  const services = [
    {
      name: "Azure AI",
      description: "Microsoft's comprehensive suite of AI services with OpenAI integration.",
      features: ["Azure OpenAI Service", "AI Studio", "Cognitive Services", "ML Pipelines"],
      link: "/cloud-ai#azure",
    },
    {
      name: "Google Vertex AI",
      description: "End-to-end platform for building, deploying, and scaling AI models.",
      features: ["Gemini API", "Model Garden", "AutoML", "Feature Store"],
      link: "/cloud-ai#vertex",
    },
    {
      name: "AWS Bedrock",
      description: "Fully managed service for building generative AI applications with foundation models.",
      features: ["Foundation Models", "Knowledge Bases", "Agents", "Guardrails"],
      link: "/cloud-ai#bedrock",
    },
  ]

  return (
    <section className="mb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Cloud AI Services</h2>
        <Link href="/cloud-ai">
          <Button variant="ghost" className="flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.name} className="h-full">
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {service.features.map((feature) => (
                  <li key={feature} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.link}>
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
