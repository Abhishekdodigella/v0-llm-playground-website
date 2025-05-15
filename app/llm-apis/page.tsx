import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LlmApisPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-2">LLM APIs</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl">
        Explore the leading Large Language Model APIs and their capabilities, pricing, and use cases.
      </p>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="openai">OpenAI</TabsTrigger>
          <TabsTrigger value="anthropic">Anthropic</TabsTrigger>
          <TabsTrigger value="google">Google</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">What are LLM APIs?</h2>
              <p className="mb-4">
                Large Language Model (LLM) APIs provide developers with access to powerful AI models through simple HTTP
                requests. These APIs allow you to integrate AI capabilities into your applications without having to
                train or host the models yourself.
              </p>
              <p className="mb-4">
                Most LLM APIs offer a variety of models with different capabilities, sizes, and pricing tiers. They
                typically charge based on the number of tokens processed, where a token is roughly 4 characters or 3/4
                of a word.
              </p>
              <h3 className="text-xl font-semibold mb-3 mt-6">Common Features</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Text generation and completion</li>
                <li>Chat and conversational interfaces</li>
                <li>Embeddings for semantic search</li>
                <li>Fine-tuning capabilities</li>
                <li>Moderation and content filtering</li>
                <li>Multimodal capabilities (text, images, audio)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Comparing Popular LLM APIs</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4">Provider</th>
                      <th className="text-left py-3 px-4">Top Models</th>
                      <th className="text-left py-3 px-4">Multimodal</th>
                      <th className="text-left py-3 px-4">Context</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">OpenAI</td>
                      <td className="py-3 px-4">GPT-4o, GPT-4</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">128K</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Anthropic</td>
                      <td className="py-3 px-4">Claude 3.5, Claude 3</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">200K</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Google</td>
                      <td className="py-3 px-4">Gemini 1.5 Pro</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">1M</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Mistral AI</td>
                      <td className="py-3 px-4">Mistral Large</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">32K</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Cohere</td>
                      <td className="py-3 px-4">Command R+</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">128K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="openai" id="openai">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">OpenAI</h2>
              <p className="mb-4">
                OpenAI is one of the leading providers of large language models, offering a range of powerful models
                through their API. Their models include GPT-4o, GPT-4, and GPT-3.5, each with different capabilities and
                price points.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Key Models</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">GPT-4o</h4>
                  <p className="text-sm text-gray-600 mb-2">OpenAI's most advanced multimodal model</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Handles text, images, and audio</li>
                    <li>128K context window</li>
                    <li>Improved reasoning capabilities</li>
                    <li>Faster response times</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">GPT-4</h4>
                  <p className="text-sm text-gray-600 mb-2">Powerful text and image understanding</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Strong reasoning and instruction following</li>
                    <li>8K-32K context window options</li>
                    <li>Vision capabilities</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">GPT-3.5 Turbo</h4>
                  <p className="text-sm text-gray-600 mb-2">Cost-effective model for many applications</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Good balance of capability and cost</li>
                    <li>16K context window</li>
                    <li>Fast response times</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">API Features</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Chat completions API for conversational interfaces</li>
                <li>Text completions for traditional text generation</li>
                <li>Embeddings API for semantic search and clustering</li>
                <li>DALL-E API for image generation</li>
                <li>Whisper API for speech-to-text</li>
                <li>Fine-tuning capabilities</li>
                <li>Function calling for tool use</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Example Use Cases</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Customer support chatbots</li>
                <li>Content generation and summarization</li>
                <li>Code generation and explanation</li>
                <li>Data analysis and insights</li>
                <li>Language translation</li>
                <li>Personalized recommendations</li>
              </ul>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Integration with AI SDK</CardTitle>
                  <CardDescription>Using OpenAI with the Vercel AI SDK</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                    <pre>{`import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

const { text } = await generateText({
  model: openai("gpt-4o"),
  prompt: "What is love?"
})`}</pre>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    The AI SDK provides a standardized way to interact with OpenAI models, making it easy to switch
                    between providers if needed.
                  </p>
                  <p className="text-sm font-medium">Learn more about:</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>AI SDK OpenAI Provider</li>
                    <li>OpenAI API Documentation</li>
                    <li>OpenAI Cookbook</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Pricing</CardTitle>
                  <CardDescription>OpenAI's token-based pricing model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">GPT-4o</h4>
                      <p className="text-sm text-gray-600">$5.00 / 1M input tokens</p>
                      <p className="text-sm text-gray-600">$15.00 / 1M output tokens</p>
                    </div>
                    <div>
                      <h4 className="font-medium">GPT-4</h4>
                      <p className="text-sm text-gray-600">$10.00 / 1M input tokens</p>
                      <p className="text-sm text-gray-600">$30.00 / 1M output tokens</p>
                    </div>
                    <div>
                      <h4 className="font-medium">GPT-3.5 Turbo</h4>
                      <p className="text-sm text-gray-600">$0.50 / 1M input tokens</p>
                      <p className="text-sm text-gray-600">$1.50 / 1M output tokens</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Prices are approximate and subject to change. Check the OpenAI website for the most current
                      pricing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="anthropic" id="anthropic">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Anthropic</h2>
              <p className="mb-4">
                Anthropic is the creator of Claude, a family of AI assistants known for their helpfulness, harmlessness,
                and honesty. Claude models excel at thoughtful dialogue, content generation, creative writing, and
                handling complex instructions.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Key Models</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Claude 3.5 Sonnet</h4>
                  <p className="text-sm text-gray-600 mb-2">Anthropic's most advanced model</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Superior reasoning and instruction following</li>
                    <li>200K context window</li>
                    <li>Multimodal capabilities</li>
                    <li>Excellent at complex tasks</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Claude 3 Opus</h4>
                  <p className="text-sm text-gray-600 mb-2">Anthropic's most capable model</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Exceptional reasoning and analysis</li>
                    <li>200K context window</li>
                    <li>Multimodal capabilities</li>
                    <li>Best for complex, nuanced tasks</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Claude 3 Haiku</h4>
                  <p className="text-sm text-gray-600 mb-2">Fast, cost-effective model</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Optimized for speed and efficiency</li>
                    <li>200K context window</li>
                    <li>Multimodal capabilities</li>
                    <li>Good for high-volume, simpler tasks</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">API Features</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Messages API for conversational interfaces</li>
                <li>Image understanding capabilities</li>
                <li>Tool use for function calling</li>
                <li>Long context processing (up to 200K tokens)</li>
                <li>Streaming responses</li>
                <li>System prompts for controlling behavior</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Example Use Cases</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Document analysis and summarization</li>
                <li>Research assistance</li>
                <li>Content moderation</li>
                <li>Customer support automation</li>
                <li>Educational applications</li>
                <li>Creative writing assistance</li>
              </ul>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Integration with AI SDK</CardTitle>
                  <CardDescription>Using Anthropic with the Vercel AI SDK</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                    <pre>{`import { generateText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"

const { text } = await generateText({
  model: anthropic("claude-3-5-sonnet-20241022"),
  prompt: "What is love?"
})`}</pre>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    The AI SDK provides a standardized way to interact with Anthropic models, making it easy to switch
                    between providers if needed.
                  </p>
                  <p className="text-sm font-medium">Learn more about:</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>AI SDK Anthropic Provider</li>
                    <li>Anthropic API Documentation</li>
                    <li>Claude Best Practices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Pricing</CardTitle>
                  <CardDescription>Anthropic's token-based pricing model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Claude 3.5 Sonnet</h4>
                      <p className="text-sm text-gray-600">$3.00 / 1M input tokens</p>
                      <p className="text-sm text-gray-600">$15.00 / 1M output tokens</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Claude 3 Opus</h4>
                      <p className="text-sm text-gray-600">$15.00 / 1M input tokens</p>
                      <p className="text-sm text-gray-600">$75.00 / 1M output tokens</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Claude 3 Haiku</h4>
                      <p className="text-sm text-gray-600">$0.25 / 1M input tokens</p>
                      <p className="text-sm text-gray-600">$1.25 / 1M output tokens</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Prices are approximate and subject to change. Check the Anthropic website for the most current
                      pricing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="google" id="google">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Google Gemini</h2>
              <p className="mb-4">
                Google's Gemini models are multimodal AI systems designed to understand and generate text, images,
                audio, and code. Available through Google AI Studio and Vertex AI, Gemini models offer strong
                capabilities across a range of tasks.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Key Models</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Gemini 1.5 Pro</h4>
                  <p className="text-sm text-gray-600 mb-2">Google's most capable model</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>1 million token context window</li>
                    <li>Advanced multimodal capabilities</li>
                    <li>Strong reasoning and instruction following</li>
                    <li>Video understanding</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Gemini 1.5 Flash</h4>
                  <p className="text-sm text-gray-600 mb-2">Fast, cost-effective model</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>1 million token context window</li>
                    <li>Optimized for speed and efficiency</li>
                    <li>Multimodal capabilities</li>
                    <li>Good balance of performance and cost</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Gemini 1.0 Ultra</h4>
                  <p className="text-sm text-gray-600 mb-2">Previous generation flagship model</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>32K context window</li>
                    <li>Strong reasoning capabilities</li>
                    <li>Multimodal understanding</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">API Features</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Text generation and chat</li>
                <li>Image, audio, and video understanding</li>
                <li>Function calling for tool use</li>
                <li>Embeddings for semantic search</li>
                <li>Streaming responses</li>
                <li>Safety settings and content filtering</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Example Use Cases</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Multimodal applications</li>
                <li>Document analysis with mixed content</li>
                <li>Code generation and explanation</li>
                <li>Video and image understanding</li>
                <li>Research assistance</li>
                <li>Educational applications</li>
              </ul>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Integration with AI SDK</CardTitle>
                  <CardDescription>Using Google Gemini with the Vercel AI SDK</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                    <pre>{`import { generateText } from "ai"
import { google } from "@ai-sdk/google"

const { text } = await generateText({
  model: google("gemini-1.5-pro"),
  prompt: "What is love?"
})`}</pre>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    The AI SDK provides a standardized way to interact with Google models, making it easy to switch
                    between providers if needed.
                  </p>
                  <p className="text-sm font-medium">Learn more about:</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>AI SDK Google Provider</li>
                    <li>Google AI Studio</li>
                    <li>Vertex AI Documentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Pricing</CardTitle>
                  <CardDescription>Google's token-based pricing model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Gemini 1.5 Pro</h4>
                      <p className="text-sm text-gray-600">$7.00 / 1M input tokens</p>
                      <p className="text-sm text-gray-600">$21.00 / 1M output tokens</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Gemini 1.5 Flash</h4>
                      <p className="text-sm text-gray-600">$0.70 / 1M input tokens</p>
                      <p className="text-sm text-gray-600">$2.10 / 1M output tokens</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Gemini 1.0 Pro</h4>
                      <p className="text-sm text-gray-600">$0.50 / 1M input tokens</p>
                      <p className="text-sm text-gray-600">$1.50 / 1M output tokens</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Prices are approximate and subject to change. Check the Google AI website for the most current
                      pricing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="others">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Mistral AI</CardTitle>
                <CardDescription>French AI company offering powerful open and closed source models</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Models:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Mistral Large</li>
                  <li>Mistral Small</li>
                  <li>Mixtral 8x7B</li>
                  <li>Pixtral (multimodal)</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Strong performance-to-cost ratio</li>
                  <li>Open weights for some models</li>
                  <li>Efficient architecture</li>
                  <li>32K context window</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Mistral AI offers both API access and downloadable models, making it flexible for various deployment
                  scenarios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cohere</CardTitle>
                <CardDescription>Specialized in enterprise-focused language AI</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Models:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Command R+</li>
                  <li>Command R</li>
                  <li>Embed models</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Strong text generation capabilities</li>
                  <li>Excellent embedding models</li>
                  <li>Enterprise-grade security and compliance</li>
                  <li>Specialized for RAG applications</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Cohere focuses on enterprise use cases with models that excel at retrieval augmented generation and
                  semantic search.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Groq</CardTitle>
                <CardDescription>Known for extremely fast inference speeds</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Models:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>LLaMA 3.1 70B</li>
                  <li>LLaMA 3.1 8B</li>
                  <li>Mixtral 8x7B</li>
                  <li>Gemma 2 9B</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Extremely fast inference (100+ tokens/sec)</li>
                  <li>Competitive pricing</li>
                  <li>Support for multiple open models</li>
                  <li>Low latency for real-time applications</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Groq uses custom Language Processing Units (LPUs) to deliver exceptionally fast inference speeds for
                  LLMs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DeepInfra</CardTitle>
                <CardDescription>Platform for running open-source AI models</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Models:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>LLaMA 3.1 and 3.3 models</li>
                  <li>DeepSeek models</li>
                  <li>Mixtral models</li>
                  <li>Various open-source models</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Wide selection of open-source models</li>
                  <li>Competitive pricing</li>
                  <li>OpenAI-compatible API</li>
                  <li>Fast inference speeds</li>
                </ul>
                <p className="text-sm text-gray-600">
                  DeepInfra provides a platform for running a wide variety of open-source models with simple API access.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Emerging Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">xAI (Grok)</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Elon Musk's AI company offering Grok models with real-time internet access and a conversational style.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Notable models:</p>
                  <ul className="list-disc pl-5">
                    <li>Grok-3</li>
                    <li>Grok-2</li>
                    <li>Grok-1.5</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Perplexity</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Known for their search engine, Perplexity also offers API access to their models with real-time
                  information.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Notable models:</p>
                  <ul className="list-disc pl-5">
                    <li>Perplexity Online</li>
                    <li>Sonar Small/Large</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Together AI</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Platform for running open-source models with competitive pricing and performance.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Notable models:</p>
                  <ul className="list-disc pl-5">
                    <li>LLaMA 3 models</li>
                    <li>Qwen models</li>
                    <li>Phi-3 models</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
