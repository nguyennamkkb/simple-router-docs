import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { Copy, Check, Package } from 'lucide-react';

interface ModelInfo {
  id: string;
  name: string;
  description: string;
  category: 'claude' | 'gemini' | 'openai' | 'qwen';
  features?: string[];
  package: 'A' | 'K' | 'Q';
}

const models: ModelInfo[] = [
  // Package A models (with a- prefix)
  {
    id: 'a-gemini-claude-sonnet-4-5-thinking',
    name: 'Claude Sonnet 4.5 Thinking',
    description: 'Model Claude Sonnet 4.5 với khả năng suy luận mở rộng (extended thinking)',
    category: 'claude',
    features: ['Extended Thinking', 'Code Generation', 'Analysis'],
    package: 'A',
  },
  {
    id: 'a-gemini-claude-opus-4-5-thinking',
    name: 'Claude Opus 4.5 Thinking',
    description: 'Model Claude Opus 4.5 cao cấp với khả năng suy luận mở rộng',
    category: 'claude',
    features: ['Extended Thinking', 'Complex Reasoning', 'Premium'],
    package: 'A',
  },
  {
    id: 'a-gemini-claude-sonnet-4-5',
    name: 'Claude Sonnet 4.5',
    description: 'Model Claude Sonnet 4.5 tiêu chuẩn, cân bằng giữa tốc độ và chất lượng',
    category: 'claude',
    features: ['Fast Response', 'Code Generation', 'Balanced'],
    package: 'A',
  },
  {
    id: 'a-gemini-3-pro-preview',
    name: 'Gemini 3 Pro Preview',
    description: 'Model Gemini 3 Pro phiên bản preview với khả năng xử lý đa phương thức',
    category: 'gemini',
    features: ['Multimodal', 'Advanced Reasoning', 'Preview'],
    package: 'A',
  },
  {
    id: 'a-gemini-3-flash-preview',
    name: 'Gemini 3 Flash Preview',
    description: 'Model Gemini 3 Flash nhanh, tối ưu cho các tác vụ đơn giản',
    category: 'gemini',
    features: ['Fast', 'Cost Effective', 'Preview'],
    package: 'A',
  },
  {
    id: 'a-gemini-3-pro-image-preview',
    name: 'Gemini 3 Pro Image Preview',
    description: 'Model Gemini 3 Pro với khả năng tạo và xử lý hình ảnh',
    category: 'gemini',
    features: ['Image Generation', 'Vision', 'Preview'],
    package: 'A',
  },
  {
    id: 'a-gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    description: 'Model Gemini 2.5 Flash ổn định, phù hợp cho production',
    category: 'gemini',
    features: ['Stable', 'Fast', 'Production Ready'],
    package: 'A',
  },
  {
    id: 'a-gemini-2.5-flash-lite',
    name: 'Gemini 2.5 Flash Lite',
    description: 'Phiên bản nhẹ của Gemini 2.5 Flash, tiết kiệm chi phí',
    category: 'gemini',
    features: ['Lightweight', 'Budget Friendly', 'Fast'],
    package: 'A',
  },
  {
    id: 'a-gemini-2.5-computer-use-preview-10-2025',
    name: 'Gemini 2.5 Computer Use',
    description: 'Model đặc biệt cho tự động hóa máy tính và browser',
    category: 'gemini',
    features: ['Computer Use', 'Automation', 'Preview'],
    package: 'A',
  },
  {
    id: 'a-gpt-oss-120b-medium',
    name: 'GPT OSS 120B Medium',
    description: 'Model GPT mã nguồn mở 120B tham số',
    category: 'openai',
    features: ['Open Source', '120B Parameters', 'General Purpose'],
    package: 'A',
  },
  // Package K models
  {
    id: 'k-kiro-claude-haiku-4-5',
    name: 'Claude Haiku 4.5',
    description: 'Model Claude Haiku 4.5 nhanh chóng cho các tác vụ đơn giản',
    category: 'claude',
    features: ['Fast Response', 'Lightweight', 'Quick Tasks'],
    package: 'K',
  },
  {
    id: 'k-kiro-claude-haiku-4-5-agentic',
    name: 'Claude Haiku 4.5 Agentic',
    description: 'Model Claude Haiku 4.5 với khả năng agentic cho các tác vụ tự động',
    category: 'claude',
    features: ['Agentic Capabilities', 'Fast Response', 'Automation'],
    package: 'K',
  },
  {
    id: 'k-kiro-claude-opus-4-5',
    name: 'Claude Opus 4.5',
    description: 'Model Claude Opus 4.5 mạnh mẽ cho các tác vụ phức tạp',
    category: 'claude',
    features: ['High Intelligence', 'Complex Reasoning', 'Premium'],
    package: 'K',
  },
  {
    id: 'k-kiro-claude-opus-4-5-agentic',
    name: 'Claude Opus 4.5 Agentic',
    description: 'Model Claude Opus 4.5 với khả năng agentic nâng cao',
    category: 'claude',
    features: ['Advanced Agentic', 'Complex Reasoning', 'Premium'],
    package: 'K',
  },
  {
    id: 'k-kiro-claude-sonnet-4',
    name: 'Claude Sonnet 4',
    description: 'Model Claude Sonnet 4 cân bằng hiệu suất và tốc độ',
    category: 'claude',
    features: ['Balanced Performance', 'Fast Reasoning', 'Efficient'],
    package: 'K',
  },
  {
    id: 'k-kiro-claude-sonnet-4-5',
    name: 'Claude Sonnet 4.5',
    description: 'Model Claude Sonnet 4.5 cân bằng giữa hiệu suất và tốc độ',
    category: 'claude',
    features: ['Balanced Performance', 'Fast Reasoning', 'Efficient'],
    package: 'K',
  },
  {
    id: 'k-kiro-claude-sonnet-4-5-agentic',
    name: 'Claude Sonnet 4.5 Agentic',
    description: 'Model Claude Sonnet 4.5 với khả năng agentic',
    category: 'claude',
    features: ['Agentic Capabilities', 'Balanced Performance', 'Advanced'],
    package: 'K',
  },
  {
    id: 'k-kiro-claude-sonnet-4-agentic',
    name: 'Claude Sonnet 4 Agentic',
    description: 'Model Claude Sonnet 4 với khả năng agentic',
    category: 'claude',
    features: ['Agentic Capabilities', 'Balanced Performance', 'Efficient'],
    package: 'K',
  },
  // Package Q models
  {
    id: 'q-qwen3-coder-flash',
    name: 'Qwen3 Coder Flash',
    description: 'Model lập trình nhanh nhẹn Qwen3 Coder cho các tác vụ đơn giản và yêu cầu hiệu suất cao',
    category: 'qwen',
    features: ['Fast Processing', 'Lightweight Tasks', 'Quick Responses'],
    package: 'Q',
  },
  {
    id: 'q-qwen3-coder-plus',
    name: 'Qwen3 Coder Plus',
    description: 'Model lập trình nâng cao Qwen3 Coder với khả năng phân tích và sinh code phức tạp',
    category: 'qwen',
    features: ['Advanced Analysis', 'Complex Code Generation', 'Project Management'],
    package: 'Q',
  },
  {
    id: 'q-vision-model',
    name: 'Qwen3 Vision Model',
    description: 'Model đa phương thức Qwen3 với khả năng xử lý hình ảnh và nhận diện thị giác',
    category: 'qwen',
    features: ['Image Processing', 'Visual Recognition', 'Multimodal Understanding'],
    package: 'Q',
  },
];

const categoryColors = {
  claude: 'bg-blue-500',
  gemini: 'bg-emerald-500',
  openai: 'bg-purple-500',
  qwen: 'bg-orange-500',
};

const categoryLabels = {
  claude: 'Claude',
  gemini: 'Gemini',
  openai: 'OpenAI',
  qwen: 'Qwen',
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-muted transition-colors"
      title="Copy Model ID"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground" />
      )}
    </button>
  );
}

function ModelCard({ model }: { model: ModelInfo }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg">{model.name}</CardTitle>
          <span className={`px-2 py-0.5 rounded text-xs text-white ${categoryColors[model.category]}`}>
            {categoryLabels[model.category]}
          </span>
        </div>
        <CardDescription>{model.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Model ID:</span>
          <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
            {model.id}
          </code>
          <CopyButton text={model.id} />
        </div>
        {model.features && (
          <div className="flex flex-wrap gap-2">
            {model.features.map((feature) => (
              <Badge key={feature} variant="secondary">
                {feature}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ModelList({ packageType }: { packageType: 'A' | 'K' | 'Q' }) {
  const filteredModels = models.filter(model => model.package === packageType);
  
  return (
    <div className="space-y-4">
      {filteredModels.map((model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </div>
  );
}

export function ModelsPage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-brand bg-brand/10">
            Tài liệu
          </Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Danh sách Model
        </h1>
        <p className="text-base text-muted-foreground">
          Các model AI có sẵn trên Simple Router. Sử dụng Model ID khi cấu hình các công cụ.
        </p>
      </header>

      <Tabs defaultValue="A">
        <TabsList className="mb-6">
          <TabsTrigger value="A">
            <Package className="w-4 h-4 mr-2" />
            Gói A
          </TabsTrigger>
          <TabsTrigger value="K">
            <Package className="w-4 h-4 mr-2" />
            Gói K
          </TabsTrigger>
          <TabsTrigger value="Q">
            <Package className="w-4 h-4 mr-2" />
            Gói Q
          </TabsTrigger>
        </TabsList>

        <TabsContent value="A">
          <ModelList packageType="A" />
        </TabsContent>
        <TabsContent value="K">
          <ModelList packageType="K" />
        </TabsContent>
        <TabsContent value="Q">
          <ModelList packageType="Q" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
