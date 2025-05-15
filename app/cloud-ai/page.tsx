import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CloudAiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-2">Cloud AI Services</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl">
        Explore cloud-based AI services that provide managed solutions for working with large language models.
      </p>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="azure">Azure AI</TabsTrigger>
          <TabsTrigger value="vertex">Google Vertex AI</TabsTrigger>
          <TabsTrigger value="bedrock">AWS Bedrock</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">What are Cloud AI Services?</h2>
              <p className="mb-4">
                Cloud AI services provide managed solutions for working with large language models and other AI
                technologies. These services abstract away much of the complexity of deploying and managing AI
                infrastructure, allowing developers to focus on building applications rather than managing
                infrastructure.
              </p>
              <p className="mb-4">
                Unlike raw GPU compute or direct API access to models, cloud AI services typically offer additional
                features such as:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Model deployment and serving infrastructure</li>
                <li>Integration with other cloud services</li>
                <li>Monitoring and observability tools</li>
                <li>Security and compliance features</li>
                <li>Data processing and preparation tools</li>
                <li>Fine-tuning capabilities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Benefits of Cloud AI Services</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Reduced operational complexity:</strong> Managed infrastructure and deployment
                </li>
                <li>
                  <strong>Scalability:</strong> Easily scale resources based on demand
                </li>
                <li>
                  <strong>Integration:</strong> Seamless connection with other cloud services
                </li>
                <li>
                  <strong>Cost optimization:</strong> Pay-as-you-go pricing and resource management
                </li>
                <li>
                  <strong>Security:</strong> Enterprise-grade security and compliance features
                </li>
                <li>
                  <strong>Access to multiple models:</strong> Use various models through a unified interface
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Comparing Cloud AI Services</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4">Service</th>
                      <th className="text-left py-3 px-4">Provider</th>
                      <th className="text-left py-3 px-4">Key Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Azure AI</td>
                      <td className="py-3 px-4">Microsoft</td>
                      <td className="py-3 px-4">OpenAI integration, enterprise focus</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Vertex AI</td>
                      <td className="py-3 px-4">Google</td>
                      <td className="py-3 px-4">Gemini models, end-to-end ML</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">AWS Bedrock</td>
                      <td className="py-3 px-4">Amazon</td>
                      <td className="py-3 px-4">Multi-model access, AWS integration</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">IBM watsonx</td>
                      <td className="py-3 px-4">IBM</td>
                      <td className="py-3 px-4">Enterprise AI, governance focus</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Common Use Cases</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-1/2 font-medium">Conversational AI</div>
                  <div className="w-1/2 text-sm text-gray-600">Chatbots, virtual assistants, customer support</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 font-medium">Content generation</div>
                  <div className="w-1/2 text-sm text-gray-600">Marketing copy, reports, summaries</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 font-medium">Knowledge management</div>
                  <div className="w-1/2 text-sm text-gray-600">RAG applications, document analysis</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 font-medium">Process automation</div>
                  <div className="w-1/2 text-sm text-gray-600">Workflow automation, data extraction</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 font-medium">Personalization</div>
                  <div className="w-1/2 text-sm text-gray-600">Recommendations, tailored experiences</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="azure" id="azure">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Azure AI</h2>
              <p className="mb-4">
                Azure AI is Microsoft's comprehensive suite of AI services, including Azure OpenAI Service, which
                provides access to OpenAI's models with enterprise-grade security, compliance, and integration with
                other Azure services. Azure AI offers a range of tools for building, deploying, and managing AI
                applications.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Key Components</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Azure OpenAI Service</h4>
                  <p className="text-sm text-gray-600 mb-2">Enterprise access to OpenAI models</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Access to GPT-4, GPT-3.5, DALL-E, and Embeddings models</li>
                    <li>Content filtering and moderation</li>
                    <li>Private networking options</li>
                    <li>Regional availability for data residency</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Azure AI Studio</h4>
                  <p className="text-sm text-gray-600 mb-2">Development environment for AI applications</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Prompt engineering and testing</li>
                    <li>Evaluation and monitoring tools</li>
                    <li>Integration with Azure AI services</li>
                    <li>Collaborative development</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Azure Cognitive Services</h4>
                  <p className="text-sm text-gray-600 mb-2">Pre-built AI capabilities as APIs</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Vision, Speech, Language, and Decision services</li>
                    <li>Pre-trained models for common tasks</li>
                    <li>Customizable for specific domains</li>
                    <li>Pay-as-you-go pricing</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Enterprise Features</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Security and compliance:</strong> SOC 1/2, HIPAA, FedRAMP, GDPR compliance
                </li>
                <li>
                  <strong>Private networking:</strong> Azure Private Link for secure access
                </li>
                <li>
                  <strong>Role-based access control:</strong> Fine-grained permissions
                </li>
                <li>
                  <strong>Content filtering:</strong> Built-in content safety features
                </li>
                <li>
                  <strong>Monitoring and logging:</strong> Integration with Azure Monitor
                </li>
                <li>
                  <strong>Regional deployment:</strong> Data residency options
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Integration with Azure Ecosystem</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Azure Cosmos DB:</strong> Vector search for RAG applications
                </li>
                <li>
                  <strong>Azure Functions:</strong> Serverless AI applications
                </li>
                <li>
                  <strong>Azure Logic Apps:</strong> Workflow automation with AI
                </li>
                <li>
                  <strong>Azure Bot Service:</strong> Building conversational experiences
                </li>
                <li>
                  <strong>Azure Machine Learning:</strong> Custom model training and deployment
                </li>
                <li>
                  <strong>Power Platform:</strong> Low-code AI application development
                </li>
              </ul>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Azure OpenAI Models</CardTitle>
                  <CardDescription>Available models in Azure OpenAI Service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">GPT-4 Models</h4>
                      <p className="text-sm text-gray-600">GPT-4, GPT-4 Turbo, GPT-4o</p>
                      <p className="text-sm text-gray-600">Vision capabilities available</p>
                    </div>
                    <div>
                      <h4 className="font-medium">GPT-3.5 Models</h4>
                      <p className="text-sm text-gray-600">GPT-3.5 Turbo</p>
                      <p className="text-sm text-gray-600">Cost-effective option</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Embeddings</h4>
                      <p className="text-sm text-gray-600">Ada Embeddings</p>
                      <p className="text-sm text-gray-600">For semantic search and RAG</p>
                    </div>
                    <div>
                      <h4 className="font-medium">DALL-E</h4>
                      <p className="text-sm text-gray-600">DALL-E 3</p>
                      <p className="text-sm text-gray-600">Image generation capabilities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>Steps to begin using Azure AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                    <li>Create an Azure account</li>
                    <li>Apply for Azure OpenAI Service access</li>
                    <li>Create an Azure OpenAI resource</li>
                    <li>Deploy models in Azure AI Studio</li>
                    <li>Generate API keys for authentication</li>
                    <li>Integrate with your applications</li>
                  </ol>
                  <div className="mt-4 p-3 bg-gray-100 rounded-md text-sm">
                    <p className="font-medium">Note:</p>
                    <p className="text-gray-600">
                      Azure OpenAI Service requires an application process to gain access. This helps ensure responsible
                      AI usage.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="vertex" id="vertex">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Google Vertex AI</h2>
              <p className="mb-4">
                Vertex AI is Google Cloud's unified platform for building, deploying, and scaling machine learning
                models and AI applications. It provides access to Google's Gemini models, as well as tools for custom
                model development, deployment, and management.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Key Components</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Vertex AI Generative AI Studio</h4>
                  <p className="text-sm text-gray-600 mb-2">Development environment for generative AI</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Access to Gemini models</li>
                    <li>Prompt design and testing</li>
                    <li>Model tuning capabilities</li>
                    <li>Evaluation tools</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Vertex AI Model Garden</h4>
                  <p className="text-sm text-gray-600 mb-2">Curated collection of foundation models</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Google's proprietary models (Gemini)</li>
                    <li>Open-source models (PaLM, Llama, etc.)</li>
                    <li>Specialized models for specific tasks</li>
                    <li>One-click deployment</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Vertex AI Agents</h4>
                  <p className="text-sm text-gray-600 mb-2">Building AI agents with LLMs</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Tool use and function calling</li>
                    <li>Multi-turn conversations</li>
                    <li>Integration with Google Cloud services</li>
                    <li>Customizable behavior</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Enterprise Features</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Security and compliance:</strong> SOC 1/2/3, HIPAA, ISO 27001, FedRAMP compliance
                </li>
                <li>
                  <strong>Private connectivity:</strong> VPC Service Controls and Private Service Connect
                </li>
                <li>
                  <strong>Monitoring and logging:</strong> Integration with Cloud Monitoring and Logging
                </li>
                <li>
                  <strong>Model governance:</strong> Model Registry and lineage tracking
                </li>
                <li>
                  <strong>Responsible AI:</strong> Safety filters and content moderation
                </li>
                <li>
                  <strong>Regional availability:</strong> Multiple deployment regions
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Integration with Google Cloud</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>BigQuery:</strong> Vector search and data analytics
                </li>
                <li>
                  <strong>Cloud Functions:</strong> Serverless AI applications
                </li>
                <li>
                  <strong>Cloud Run:</strong> Containerized AI services
                </li>
                <li>
                  <strong>Document AI:</strong> Document processing and extraction
                </li>
                <li>
                  <strong>Dataflow:</strong> Data processing pipelines
                </li>
                <li>
                  <strong>Looker:</strong> AI-powered business intelligence
                </li>
              </ul>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Gemini Models</CardTitle>
                  <CardDescription>Available Gemini models in Vertex AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Gemini 1.5 Pro</h4>
                      <p className="text-sm text-gray-600">1M token context window</p>
                      <p className="text-sm text-gray-600">Multimodal capabilities</p>
                      <p className="text-sm text-gray-600">Strong reasoning abilities</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Gemini 1.5 Flash</h4>
                      <p className="text-sm text-gray-600">1M token context window</p>
                      <p className="text-sm text-gray-600">Optimized for efficiency</p>
                      <p className="text-sm text-gray-600">Cost-effective option</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Gemini 1.0 Pro</h4>
                      <p className="text-sm text-gray-600">Previous generation model</p>
                      <p className="text-sm text-gray-600">32K context window</p>
                      <p className="text-sm text-gray-600">Multimodal capabilities</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Embeddings</h4>
                      <p className="text-sm text-gray-600">Text and multimodal embeddings</p>
                      <p className="text-sm text-gray-600">For semantic search and RAG</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Vertex AI Features</CardTitle>
                  <CardDescription>Additional capabilities for ML workflows</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div>
                      <h4 className="font-medium text-gray-900">AutoML</h4>
                      <p>Automated model training for tabular, image, text, and video data</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Feature Store</h4>
                      <p>Managed repository for ML features with serving capabilities</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Pipelines</h4>
                      <p>Orchestration for ML workflows and CI/CD</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Experiments</h4>
                      <p>Track and compare model training runs</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Explainable AI</h4>
                      <p>Tools for understanding model predictions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="bedrock" id="bedrock">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">AWS Bedrock</h2>
              <p className="mb-4">
                AWS Bedrock is a fully managed service that provides access to foundation models from leading AI
                companies through a unified API. It allows developers to build and scale generative AI applications with
                enterprise-grade security, privacy, and integration with the AWS ecosystem.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Key Components</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Foundation Models</h4>
                  <p className="text-sm text-gray-600 mb-2">Access to multiple model providers</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Amazon Titan models</li>
                    <li>Anthropic Claude models</li>
                    <li>AI21 Labs Jurassic models</li>
                    <li>Cohere Command models</li>
                    <li>Meta Llama 2 models</li>
                    <li>Stability AI models</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Bedrock Knowledge Bases</h4>
                  <p className="text-sm text-gray-600 mb-2">RAG solution for enterprise data</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Connect to various data sources</li>
                    <li>Automatic data synchronization</li>
                    <li>Vector search capabilities</li>
                    <li>Integration with foundation models</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Bedrock Agents</h4>
                  <p className="text-sm text-gray-600 mb-2">Building AI agents with LLMs</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Define agent capabilities and actions</li>
                    <li>Integration with AWS services</li>
                    <li>API definitions for tool use</li>
                    <li>Testing and deployment tools</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Enterprise Features</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Security and compliance:</strong> SOC, HIPAA, ISO, FedRAMP compliance
                </li>
                <li>
                  <strong>Private connectivity:</strong> VPC endpoints for secure access
                </li>
                <li>
                  <strong>Data privacy:</strong> Your data is not used to train models
                </li>
                <li>
                  <strong>Model customization:</strong> Fine-tuning capabilities
                </li>
                <li>
                  <strong>Guardrails:</strong> Content filtering and moderation
                </li>
                <li>
                  <strong>Monitoring:</strong> Integration with CloudWatch and CloudTrail
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Integration with AWS Ecosystem</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Amazon S3:</strong> Data storage for model inputs and outputs
                </li>
                <li>
                  <strong>AWS Lambda:</strong> Serverless AI applications
                </li>
                <li>
                  <strong>Amazon SageMaker:</strong> Custom model training and deployment
                </li>
                <li>
                  <strong>Amazon OpenSearch:</strong> Vector search capabilities
                </li>
                <li>
                  <strong>AWS Step Functions:</strong> Orchestration of AI workflows
                </li>
                <li>
                  <strong>Amazon Kendra:</strong> Enterprise search integration
                </li>
              </ul>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Available Models</CardTitle>
                  <CardDescription>Foundation models in AWS Bedrock</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Anthropic Claude</h4>
                      <p className="text-sm text-gray-600">Claude 3 Opus, Sonnet, Haiku</p>
                      <p className="text-sm text-gray-600">Claude 2, Claude Instant</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Amazon Titan</h4>
                      <p className="text-sm text-gray-600">Titan Text, Titan Embeddings</p>
                      <p className="text-sm text-gray-600">Titan Image Generator</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Cohere</h4>
                      <p className="text-sm text-gray-600">Command, Command Light</p>
                      <p className="text-sm text-gray-600">Embed models</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Meta</h4>
                      <p className="text-sm text-gray-600">Llama 2 (7B, 13B, 70B)</p>
                    </div>
                    <div>
                      <h4 className="font-medium">AI21 Labs</h4>
                      <p className="text-sm text-gray-600">Jurassic-2 models</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Stability AI</h4>
                      <p className="text-sm text-gray-600">Stable Diffusion XL</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Model Customization</CardTitle>
                  <CardDescription>Options for tailoring models to your needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div>
                      <h4 className="font-medium text-gray-900">Custom Models</h4>
                      <p>Fine-tune foundation models on your data to improve performance for specific tasks</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Prompt Engineering</h4>
                      <p>Bedrock provides tools for designing and testing effective prompts</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Retrieval Augmentation</h4>
                      <p>Enhance model responses with information from your data sources</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Inference Parameters</h4>
                      <p>Control model behavior with temperature, top-p, and other settings</p>
                    </div>
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
                <CardTitle>IBM watsonx.ai</CardTitle>
                <CardDescription>Enterprise AI platform with focus on governance and trust</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Foundation models from IBM and partners</li>
                  <li>Prompt engineering studio</li>
                  <li>Model fine-tuning capabilities</li>
                  <li>AI governance toolkit</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Enterprise-grade security and compliance</li>
                  <li>Focus on responsible and explainable AI</li>
                  <li>Integration with IBM Cloud and on-premises systems</li>
                  <li>Industry-specific solutions</li>
                </ul>
                <p className="text-sm text-gray-600">
                  IBM watsonx.ai is designed for enterprises that need robust governance, security, and compliance
                  features for their AI deployments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hugging Face</CardTitle>
                <CardDescription>Community-driven platform for machine learning</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Inference API for thousands of models</li>
                  <li>Spaces for deploying ML apps</li>
                  <li>AutoTrain for fine-tuning models</li>
                  <li>Model Hub with thousands of open models</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Vast selection of open-source models</li>
                  <li>Strong community and collaboration features</li>
                  <li>Democratized access to AI</li>
                  <li>Integration with popular ML frameworks</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Hugging Face provides a platform for discovering, sharing, and deploying machine learning models with
                  a focus on open source and community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Databricks AI</CardTitle>
                <CardDescription>Unified platform for data and AI</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Foundation Model APIs</li>
                  <li>MLflow for model management</li>
                  <li>Lakehouse for data management</li>
                  <li>Unity Catalog for governance</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Integration of data and AI workflows</li>
                  <li>Scalable infrastructure for large workloads</li>
                  <li>End-to-end ML lifecycle management</li>
                  <li>Enterprise-grade security and governance</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Databricks AI combines data management, analytics, and AI capabilities in a unified platform, making
                  it ideal for data-intensive AI applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Salesforce Einstein</CardTitle>
                <CardDescription>AI capabilities integrated into CRM</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Einstein GPT for generative AI</li>
                  <li>Einstein Predictions for predictive analytics</li>
                  <li>Einstein Discovery for insights</li>
                  <li>Einstein Bots for conversational AI</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Deep integration with Salesforce ecosystem</li>
                  <li>Industry-specific AI solutions</li>
                  <li>Low-code/no-code AI capabilities</li>
                  <li>Focus on business outcomes</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Salesforce Einstein brings AI capabilities directly into CRM workflows, making it accessible to
                  business users without deep technical expertise.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Specialized AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Multimodal AI Services</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Services that combine text, image, audio, and video understanding.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Examples:</p>
                  <ul className="list-disc pl-5">
                    <li>Replicate</li>
                    <li>Runway</li>
                    <li>Stability AI</li>
                    <li>Midjourney API</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Industry-Specific AI</h3>
                <p className="text-sm text-gray-600 mb-4">
                  AI services tailored for specific industries like healthcare, finance, and legal.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Examples:</p>
                  <ul className="list-disc pl-5">
                    <li>NVIDIA Clara for healthcare</li>
                    <li>Bloomberg AI for finance</li>
                    <li>Kira Systems for legal</li>
                    <li>SparkCognition for industrial</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">AI Development Platforms</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Platforms focused on the development and deployment of custom AI solutions.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Examples:</p>
                  <ul className="list-disc pl-5">
                    <li>Weights & Biases</li>
                    <li>Determined AI</li>
                    <li>Roboflow</li>
                    <li>Scale AI</li>
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
