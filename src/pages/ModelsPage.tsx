import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { Copy, Check, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ModelInfo {
  id: string;
  name: string;
  description: string;
  category: 'openai' | 'qwen' | 'gpt';
  features?: string[];
  package: 'Q' | 'C';
}

const models: ModelInfo[] = [
  // Package Q models
  {
    id: 'q-coder-model',
    name: 'Qwen 3.5 Plus',
    description: 'Model Qwen 3.5 Plus cho lập trình nâng cao và xử lý tác vụ phức tạp',
    category: 'qwen',
    features: ['Advanced Coding', 'Qwen 3.5 Plus', 'High Performance'],
    package: 'Q',
  },
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
  // Package C models (GPT series)
  {
    id: 'c-gpt-5',
    name: 'GPT-5',
    description: 'Model GPT-5 thế hệ mới với khả năng suy luận và hiểu ngữ cảnh vượt trội',
    category: 'gpt',
    features: ['Advanced Reasoning', 'Context Understanding', 'General Purpose'],
    package: 'C',
  },
  {
    id: 'c-gpt-5-codex',
    name: 'GPT-5 Codex',
    description: 'Model GPT-5 tối ưu cho lập trình với khả năng sinh code chất lượng cao',
    category: 'gpt',
    features: ['Code Generation', 'Programming', 'Technical Tasks'],
    package: 'C',
  },
  {
    id: 'c-gpt-5-codex-mini',
    name: 'GPT-5 Codex Mini',
    description: 'Phiên bản nhẹ của GPT-5 Codex, nhanh và tiết kiệm chi phí',
    category: 'gpt',
    features: ['Lightweight', 'Fast Response', 'Cost Effective'],
    package: 'C',
  },
  {
    id: 'c-gpt-5.1',
    name: 'GPT-5.1',
    description: 'Model GPT-5.1 cải tiến với hiệu suất và độ chính xác cao hơn',
    category: 'gpt',
    features: ['Improved Performance', 'Higher Accuracy', 'Enhanced Reasoning'],
    package: 'C',
  },
  {
    id: 'c-gpt-5.1-codex',
    name: 'GPT-5.1 Codex',
    description: 'Model GPT-5.1 Codex với khả năng lập trình nâng cao',
    category: 'gpt',
    features: ['Advanced Coding', 'Code Review', 'Debugging'],
    package: 'C',
  },
  {
    id: 'c-gpt-5.1-codex-mini',
    name: 'GPT-5.1 Codex Mini',
    description: 'Phiên bản nhẹ của GPT-5.1 Codex cho các tác vụ lập trình đơn giản',
    category: 'gpt',
    features: ['Lightweight', 'Quick Tasks', 'Budget Friendly'],
    package: 'C',
  },
  {
    id: 'c-gpt-5.1-codex-max',
    name: 'GPT-5.1 Codex Max',
    description: 'Phiên bản cao cấp nhất của GPT-5.1 Codex với khả năng xử lý dự án lớn',
    category: 'gpt',
    features: ['Maximum Performance', 'Large Projects', 'Premium'],
    package: 'C',
  },
  {
    id: 'c-gpt-5.2',
    name: 'GPT-5.2',
    description: 'Model GPT-5.2 mới nhất với nhiều cải tiến về tốc độ và chất lượng',
    category: 'gpt',
    features: ['Latest Version', 'Speed Optimized', 'Quality Improved'],
    package: 'C',
  },
  {
    id: 'c-gpt-5.2-codex',
    name: 'GPT-5.2 Codex',
    description: 'Model GPT-5.2 Codex với khả năng lập trình tiên tiến nhất',
    category: 'gpt',
    features: ['State-of-the-art Coding', 'Multi-language', 'Advanced Analysis'],
    package: 'C',
  },
  {
    id: 'c-gpt-5.4',
    name: 'GPT-5.4',
    description: 'Model GPT-5.4 phiên bản mới nhất với khả năng suy luận và hiểu ngữ cảnh vượt trội',
    category: 'gpt',
    features: ['Latest Version', 'Advanced Reasoning', 'Context Understanding'],
    package: 'C',
  },
  {
    id: 'c-gpt-5.3-codex',
    name: 'GPT-5.3 Codex',
    description: 'Model GPT-5.3 Codex phiên bản mới nhất với khả năng lập trình nâng cao',
    category: 'gpt',
    features: ['Latest Version', 'Advanced Coding', 'Enhanced Performance'],
    package: 'C',
  },
];

const packageModelOrder: Record<'Q' | 'C', string[]> = {
  C: [
    'c-gpt-5.4',
    'c-gpt-5.3-codex',
    'c-gpt-5.2-codex',
    'c-gpt-5.2',
    'c-gpt-5.1-codex-max',
    'c-gpt-5.1-codex',
    'c-gpt-5.1-codex-mini',
    'c-gpt-5.1',
    'c-gpt-5-codex',
    'c-gpt-5-codex-mini',
    'c-gpt-5',
  ],
  Q: [
    'q-coder-model',
    'q-qwen3-coder-plus',
    'q-qwen3-coder-flash',
    'q-vision-model',
  ],
};

const categoryColors = {
  openai: 'bg-purple-500',
  qwen: 'bg-orange-500',
  gpt: 'bg-green-500',
};

const categoryLabels = {
  openai: 'OpenAI',
  qwen: 'Qwen',
  gpt: 'GPT',
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
      title={copied ? t('common.copied') : t('common.copy')}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

function ModelCard({ model }: { model: ModelInfo }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        {/* Model ID - Top & Prominent */}
        <div className="mb-3">
          <div className="text-xs text-muted-foreground font-medium mb-1.5">Model ID</div>
          <div className="flex items-center gap-2 p-2.5 rounded-md border bg-muted/50">
            <code className="text-sm font-mono font-semibold text-foreground flex-1 break-all">
              {model.id}
            </code>
            <CopyButton text={model.id} />
          </div>
        </div>
        
        {/* Model Name & Category */}
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg">{model.name}</CardTitle>
          <span className={`px-2 py-0.5 rounded text-xs text-white ${categoryColors[model.category]}`}>
            {categoryLabels[model.category]}
          </span>
        </div>
        <CardDescription>{model.description}</CardDescription>
      </CardHeader>
      <CardContent>
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

function ModelList({ packageType }: { packageType: 'Q' | 'C' }) {
  const packageModels = models.filter((model) => model.package === packageType);
  const modelMap = new Map(packageModels.map((model) => [model.id, model]));
  const orderedModels = packageModelOrder[packageType]
    .map((id) => modelMap.get(id))
    .filter((model): model is ModelInfo => Boolean(model));
  const remainingModels = packageModels.filter((model) => !packageModelOrder[packageType].includes(model.id));
  const filteredModels = [...orderedModels, ...remainingModels];
  
  return (
    <div className="space-y-4">
      {filteredModels.map((model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </div>
  );
}

export function ModelsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <header className="mb-10 pb-8 border-b">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-brand bg-brand/10">
            {t('models.badge')}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          {t('models.title')}
        </h1>
        <p className="text-base text-muted-foreground">
          {t('models.description')}
        </p>
      </header>

      <Tabs defaultValue="C">
        <TabsList className="mb-6">
          <TabsTrigger value="C">
            <Package className="w-4 h-4 mr-2" />
            {t('models.tabs.c')}
          </TabsTrigger>
          <TabsTrigger value="Q">
            <Package className="w-4 h-4 mr-2" />
            {t('models.tabs.q')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="C">
          <ModelList packageType="C" />
        </TabsContent>
        <TabsContent value="Q">
          <ModelList packageType="Q" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
