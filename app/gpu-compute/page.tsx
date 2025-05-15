import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GpuComputePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-2">GPU Compute</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl">
        Explore GPU compute options for training and running large language models.
      </p>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="nvidia">NVIDIA</TabsTrigger>
          <TabsTrigger value="aws">AWS</TabsTrigger>
          <TabsTrigger value="google-cloud">Google Cloud</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">What is GPU Compute?</h2>
              <p className="mb-4">
                GPU (Graphics Processing Unit) compute refers to the use of specialized hardware designed for parallel
                processing tasks. While originally developed for rendering graphics, GPUs have become essential for AI
                workloads due to their ability to perform many calculations simultaneously.
              </p>
              <p className="mb-4">
                For large language models (LLMs), GPUs are critical for both training and inference:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Training:</strong> The process of teaching a model by exposing it to vast amounts of data,
                  requiring significant computational resources.
                </li>
                <li>
                  <strong>Inference:</strong> Using a trained model to generate predictions or responses, which requires
                  less computational power than training but still benefits from GPU acceleration.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Why GPUs Matter for LLMs</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Parallel processing capabilities handle matrix operations efficiently</li>
                <li>High memory bandwidth allows for faster data access</li>
                <li>Specialized tensor cores accelerate AI-specific operations</li>
                <li>Reduced training and inference times compared to CPUs</li>
                <li>Enable larger models with more parameters</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">GPU vs. Other AI Accelerators</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4">Hardware</th>
                      <th className="text-left py-3 px-4">Strengths</th>
                      <th className="text-left py-3 px-4">Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">NVIDIA GPUs</td>
                      <td className="py-3 px-4">Mature ecosystem, CUDA support</td>
                      <td className="py-3 px-4">Training, inference, research</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Google TPUs</td>
                      <td className="py-3 px-4">Optimized for TensorFlow, high efficiency</td>
                      <td className="py-3 px-4">Training large models, research</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">AWS Trainium/Inferentia</td>
                      <td className="py-3 px-4">Cost-effective, AWS integration</td>
                      <td className="py-3 px-4">Production inference, AWS workloads</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Custom ASICs</td>
                      <td className="py-3 px-4">Highly optimized for specific tasks</td>
                      <td className="py-3 px-4">Specialized production workloads</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Deployment Options</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-1/3 font-medium">On-premises</div>
                  <div className="w-2/3 text-sm text-gray-600">
                    Full control, high upfront costs, maintenance required
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3 font-medium">Cloud providers</div>
                  <div className="w-2/3 text-sm text-gray-600">Flexible scaling, pay-as-you-go, managed services</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3 font-medium">Specialized platforms</div>
                  <div className="w-2/3 text-sm text-gray-600">Optimized for AI workloads, simplified deployment</div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3 font-medium">Hybrid approaches</div>
                  <div className="w-2/3 text-sm text-gray-600">Combination of on-premises and cloud resources</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="nvidia" id="nvidia">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">NVIDIA</h2>
              <p className="mb-4">
                NVIDIA is the leading provider of GPUs for AI workloads, offering a comprehensive ecosystem of hardware,
                software, and developer tools. Their GPUs are widely used for training and running large language models
                due to their performance, software support, and mature ecosystem.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Key GPU Offerings</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">H100</h4>
                  <p className="text-sm text-gray-600 mb-2">NVIDIA's flagship data center GPU</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>80GB HBM3 memory</li>
                    <li>4th generation Tensor Cores</li>
                    <li>Transformer Engine for accelerated LLM training</li>
                    <li>Up to 3,958 TFLOPS FP8 performance</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">A100</h4>
                  <p className="text-sm text-gray-600 mb-2">Previous generation data center GPU</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>40GB or 80GB HBM2e memory</li>
                    <li>3rd generation Tensor Cores</li>
                    <li>Multi-Instance GPU (MIG) technology</li>
                    <li>Up to 624 TFLOPS FP16 performance</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">L4</h4>
                  <p className="text-sm text-gray-600 mb-2">Efficient inference-focused GPU</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>24GB GDDR6 memory</li>
                    <li>Optimized for inference workloads</li>
                    <li>Lower power consumption (72W)</li>
                    <li>Good balance of performance and cost</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">NVIDIA AI Software Ecosystem</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>CUDA:</strong> Parallel computing platform and programming model
                </li>
                <li>
                  <strong>cuDNN:</strong> GPU-accelerated library for deep neural networks
                </li>
                <li>
                  <strong>TensorRT:</strong> High-performance deep learning inference optimizer
                </li>
                <li>
                  <strong>NCCL:</strong> Library for multi-GPU and multi-node collective communication
                </li>
                <li>
                  <strong>Triton Inference Server:</strong> Open-source inference serving software
                </li>
                <li>
                  <strong>NeMo:</strong> Framework for building, training, and fine-tuning LLMs
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Use Cases for NVIDIA GPUs</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Training large models:</strong> H100 and A100 clusters for training foundation models
                </li>
                <li>
                  <strong>High-throughput inference:</strong> Multiple L4 or A10 GPUs for serving models
                </li>
                <li>
                  <strong>Research and development:</strong> Workstations with RTX GPUs for prototyping
                </li>
                <li>
                  <strong>Edge deployment:</strong> Jetson platforms for on-device AI
                </li>
              </ul>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>NVIDIA DGX Systems</CardTitle>
                  <CardDescription>Integrated systems for AI development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">DGX H100</h4>
                      <p className="text-sm text-gray-600">8x H100 GPUs</p>
                      <p className="text-sm text-gray-600">640GB total GPU memory</p>
                      <p className="text-sm text-gray-600">NVLink and NVSwitch interconnect</p>
                    </div>
                    <div>
                      <h4 className="font-medium">DGX SuperPOD</h4>
                      <p className="text-sm text-gray-600">Scalable AI supercomputer</p>
                      <p className="text-sm text-gray-600">Up to 32,768 H100 GPUs</p>
                      <p className="text-sm text-gray-600">InfiniBand networking</p>
                    </div>
                    <div>
                      <h4 className="font-medium">DGX Cloud</h4>
                      <p className="text-sm text-gray-600">Cloud-based DGX infrastructure</p>
                      <p className="text-sm text-gray-600">On-demand access to DGX systems</p>
                      <p className="text-sm text-gray-600">Pre-installed AI software stack</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Cost Considerations</CardTitle>
                  <CardDescription>Pricing for NVIDIA GPU hardware</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">H100 PCIe</h4>
                      <p className="text-sm text-gray-600">~$25,000 - $35,000 per GPU</p>
                    </div>
                    <div>
                      <h4 className="font-medium">A100 PCIe</h4>
                      <p className="text-sm text-gray-600">~$10,000 - $15,000 per GPU</p>
                    </div>
                    <div>
                      <h4 className="font-medium">L4</h4>
                      <p className="text-sm text-gray-600">~$2,000 - $3,000 per GPU</p>
                    </div>
                    <div>
                      <h4 className="font-medium">DGX H100 System</h4>
                      <p className="text-sm text-gray-600">~$300,000 - $400,000</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Prices are approximate and subject to change. Enterprise pricing and volume discounts may apply.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="aws" id="aws">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Amazon Web Services (AWS)</h2>
              <p className="mb-4">
                AWS offers a comprehensive suite of GPU-accelerated cloud computing services for training and deploying
                large language models. With flexible pricing options and global availability, AWS provides scalable
                infrastructure for AI workloads of all sizes.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Key GPU Instance Types</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">P5 Instances</h4>
                  <p className="text-sm text-gray-600 mb-2">Powered by NVIDIA H100 GPUs</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>p5.48xlarge: 8x H100 GPUs with 640GB total GPU memory</li>
                    <li>EFA networking with 3,200 Gbps bandwidth</li>
                    <li>Ideal for training large foundation models</li>
                    <li>NVLink for high-speed GPU-to-GPU communication</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">P4d Instances</h4>
                  <p className="text-sm text-gray-600 mb-2">Powered by NVIDIA A100 GPUs</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>p4d.24xlarge: 8x A100 GPUs with 320GB total GPU memory</li>
                    <li>EFA networking with 400 Gbps bandwidth</li>
                    <li>Good balance of performance and cost</li>
                    <li>NVLink and NVSwitch for GPU interconnect</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">G5 Instances</h4>
                  <p className="text-sm text-gray-600 mb-2">Powered by NVIDIA A10G GPUs</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Various configurations from 1 to 8 GPUs</li>
                    <li>24GB memory per GPU</li>
                    <li>Cost-effective for inference workloads</li>
                    <li>Suitable for smaller model training</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">AWS AI Services and Tools</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Amazon SageMaker:</strong> Fully managed service for building, training, and deploying ML
                  models
                </li>
                <li>
                  <strong>AWS Deep Learning AMIs:</strong> Pre-configured environments with popular frameworks
                </li>
                <li>
                  <strong>AWS Deep Learning Containers:</strong> Docker images with optimized libraries
                </li>
                <li>
                  <strong>Amazon EC2 Spot Instances:</strong> Cost-effective option for interruptible workloads
                </li>
                <li>
                  <strong>AWS Trainium:</strong> Custom chips designed for training deep learning models
                </li>
                <li>
                  <strong>AWS Inferentia:</strong> Custom chips optimized for inference workloads
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Use Cases for AWS GPU Instances</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Distributed training:</strong> P5 and P4d instances for large-scale model training
                </li>
                <li>
                  <strong>High-throughput inference:</strong> G5 instances for serving models
                </li>
                <li>
                  <strong>Research and experimentation:</strong> Spot instances for cost-effective development
                </li>
                <li>
                  <strong>Hybrid deployments:</strong> Combining on-premises and cloud resources
                </li>
              </ul>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>AWS ParallelCluster</CardTitle>
                  <CardDescription>Simplify deployment of HPC clusters</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    AWS ParallelCluster is an open-source cluster management tool that makes it easy to deploy and
                    manage high-performance computing (HPC) clusters on AWS.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Key features:</span>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Automated cluster provisioning</li>
                        <li>Integration with AWS services</li>
                        <li>Support for various job schedulers</li>
                        <li>Auto-scaling capabilities</li>
                        <li>GPU instance support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Pricing Examples</CardTitle>
                  <CardDescription>On-demand pricing for AWS GPU instances</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">p5.48xlarge (8x H100)</h4>
                      <p className="text-sm text-gray-600">~$98.00 per hour</p>
                    </div>
                    <div>
                      <h4 className="font-medium">p4d.24xlarge (8x A100)</h4>
                      <p className="text-sm text-gray-600">~$32.77 per hour</p>
                    </div>
                    <div>
                      <h4 className="font-medium">g5.xlarge (1x A10G)</h4>
                      <p className="text-sm text-gray-600">~$1.24 per hour</p>
                    </div>
                    <div>
                      <h4 className="font-medium">g5.8xlarge (1x A10G)</h4>
                      <p className="text-sm text-gray-600">~$2.88 per hour</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Prices are for US East (N. Virginia) region and subject to change. Spot instances can provide up
                      to 90% cost savings.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="google-cloud" id="google-cloud">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Google Cloud</h2>
              <p className="mb-4">
                Google Cloud offers a range of GPU and TPU (Tensor Processing Unit) options for training and deploying
                large language models. With deep integration into Google's AI ecosystem, Google Cloud provides powerful
                infrastructure for AI workloads.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Key GPU and TPU Offerings</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">A3 Instances (NVIDIA H100)</h4>
                  <p className="text-sm text-gray-600 mb-2">Google Cloud's most powerful GPU instances</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>a3-highgpu-8g: 8x H100 GPUs with 640GB total GPU memory</li>
                    <li>NVLink for high-speed GPU-to-GPU communication</li>
                    <li>Up to 1,600 Gbps networking bandwidth</li>
                    <li>Ideal for training large foundation models</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">A2 Instances (NVIDIA A100)</h4>
                  <p className="text-sm text-gray-600 mb-2">Previous generation high-performance GPU instances</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>a2-ultragpu-8g: 8x A100 GPUs with 640GB total GPU memory</li>
                    <li>a2-megagpu-16g: 16x A100 GPUs with 1,280GB total GPU memory</li>
                    <li>NVLink for GPU interconnect</li>
                    <li>Good balance of performance and cost</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">TPU v4 and v5e</h4>
                  <p className="text-sm text-gray-600 mb-2">Google's custom-designed AI accelerators</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>TPU v4: Optimized for large-scale training</li>
                    <li>TPU v5e: Cost-optimized for training and inference</li>
                    <li>Pod configurations for massive parallelism</li>
                    <li>Optimized for TensorFlow and JAX</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Google Cloud AI Services</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Vertex AI:</strong> Unified platform for building, deploying, and scaling ML models
                </li>
                <li>
                  <strong>Google Kubernetes Engine (GKE):</strong> Managed Kubernetes service with GPU support
                </li>
                <li>
                  <strong>Deep Learning VM Images:</strong> Pre-configured VMs with popular ML frameworks
                </li>
                <li>
                  <strong>Deep Learning Containers:</strong> Docker containers optimized for ML workloads
                </li>
                <li>
                  <strong>Cloud TPU:</strong> Access to Google's custom-designed TPUs
                </li>
                <li>
                  <strong>Colab Enterprise:</strong> Managed Jupyter notebooks with GPU/TPU access
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Use Cases for Google Cloud</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Large-scale training:</strong> A3 instances or TPU pods for foundation models
                </li>
                <li>
                  <strong>Research and development:</strong> Colab Enterprise for experimentation
                </li>
                <li>
                  <strong>Production inference:</strong> A2 instances or TPU v5e for serving models
                </li>
                <li>
                  <strong>Integration with Google's AI ecosystem:</strong> Vertex AI for end-to-end ML workflows
                </li>
              </ul>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>TPU vs. GPU</CardTitle>
                  <CardDescription>Comparing Google's TPUs with NVIDIA GPUs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">TPU Advantages</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        <li>Designed specifically for ML workloads</li>
                        <li>Optimized for TensorFlow and JAX</li>
                        <li>High performance for specific workloads</li>
                        <li>Simplified scaling with pod configurations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">GPU Advantages</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        <li>Broader framework support</li>
                        <li>More flexible programming model</li>
                        <li>Mature ecosystem and tooling</li>
                        <li>Wider availability across cloud providers</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600">
                      The choice between TPUs and GPUs depends on your specific workload, framework preferences, and
                      scaling requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Pricing Examples</CardTitle>
                  <CardDescription>On-demand pricing for Google Cloud accelerators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">a3-highgpu-8g (8x H100)</h4>
                      <p className="text-sm text-gray-600">~$36.23 per hour</p>
                    </div>
                    <div>
                      <h4 className="font-medium">a2-ultragpu-8g (8x A100)</h4>
                      <p className="text-sm text-gray-600">~$28.35 per hour</p>
                    </div>
                    <div>
                      <h4 className="font-medium">TPU v4-8 (8 chips)</h4>
                      <p className="text-sm text-gray-600">~$9.74 per hour</p>
                    </div>
                    <div>
                      <h4 className="font-medium">TPU v5e-8 (8 chips)</h4>
                      <p className="text-sm text-gray-600">~$4.96 per hour</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Prices are for us-central1 region and subject to change. Spot instances and committed use
                      discounts can provide significant savings.
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
                <CardTitle>Microsoft Azure</CardTitle>
                <CardDescription>
                  Cloud-based GPU compute with deep integration into Microsoft's ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Offerings:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>ND H100 v5: NVIDIA H100 instances</li>
                  <li>ND A100 v4: NVIDIA A100 instances</li>
                  <li>NC A10: NVIDIA A10 instances</li>
                  <li>Azure Machine Learning service</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Integration with Azure OpenAI Service</li>
                  <li>Enterprise-grade security and compliance</li>
                  <li>Comprehensive ML platform</li>
                  <li>Global availability</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Azure offers a range of GPU options with deep integration into Microsoft's AI and enterprise services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lambda Labs</CardTitle>
                <CardDescription>GPU cloud focused specifically on AI workloads</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Offerings:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>H100, A100, and L4 GPU instances</li>
                  <li>On-demand and reserved instances</li>
                  <li>Pre-configured ML environments</li>
                  <li>GPU workstations and servers</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>AI-focused infrastructure</li>
                  <li>Simplified pricing model</li>
                  <li>Developer-friendly experience</li>
                  <li>Both cloud and on-premises options</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Lambda Labs provides a streamlined experience for AI researchers and developers with competitive
                  pricing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CoreWeave</CardTitle>
                <CardDescription>Specialized cloud provider with extensive GPU offerings</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Offerings:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Wide range of NVIDIA GPUs (H100, A100, A40, L4, etc.)</li>
                  <li>Kubernetes-native infrastructure</li>
                  <li>Low-latency provisioning</li>
                  <li>Flexible instance configurations</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Large GPU inventory</li>
                  <li>Fast deployment times</li>
                  <li>Competitive pricing</li>
                  <li>Specialized for AI and rendering workloads</li>
                </ul>
                <p className="text-sm text-gray-600">
                  CoreWeave offers one of the largest and most diverse GPU fleets with a focus on performance and
                  availability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paperspace</CardTitle>
                <CardDescription>Cloud platform designed for ML development and deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Offerings:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Various GPU options (A100, A6000, RTX series)</li>
                  <li>Gradient ML platform</li>
                  <li>Jupyter notebooks with GPU acceleration</li>
                  <li>Pre-built ML environments</li>
                </ul>
                <h4 className="font-medium mb-2">Strengths:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>User-friendly interface</li>
                  <li>Integrated ML development environment</li>
                  <li>Team collaboration features</li>
                  <li>Pay-as-you-go pricing</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Paperspace combines GPU infrastructure with development tools to provide an end-to-end platform for ML
                  practitioners.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">On-Premises Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">NVIDIA DGX Systems</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Integrated systems designed specifically for AI workloads, featuring multiple H100 or A100 GPUs.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Key benefits:</p>
                  <ul className="list-disc pl-5">
                    <li>Optimized hardware and software stack</li>
                    <li>High-speed GPU interconnect</li>
                    <li>Enterprise support options</li>
                    <li>Pre-configured for AI workloads</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Custom-built Clusters</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Build your own GPU clusters using server-grade hardware and networking equipment.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Key benefits:</p>
                  <ul className="list-disc pl-5">
                    <li>Flexibility in hardware selection</li>
                    <li>Potential cost savings</li>
                    <li>Customizable configurations</li>
                    <li>Full control over infrastructure</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Colocation Services</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Place your GPU servers in a data center with professional management and networking.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Key benefits:</p>
                  <ul className="list-disc pl-5">
                    <li>Professional data center facilities</li>
                    <li>High-bandwidth internet connectivity</li>
                    <li>Physical security and power redundancy</li>
                    <li>Balance of control and management</li>
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
