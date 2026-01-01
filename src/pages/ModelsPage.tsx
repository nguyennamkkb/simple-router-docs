import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ModelInfo {
  id: string;
  name: string;
  description: string;
  category: 'claude' | 'gemini' | 'openai';
  features?: string[];
}

const models: ModelInfo[] = [
  {
    id: 'gemini-claude-sonnet-4-5-thinking',
    name: 'Claude Sonnet 4.5 Thinking',
    description: 'Model Claude Sonnet 4.5 với khả năng suy luận mở rộng (extended thinking)',
    category: 'claude',
    features: ['Extended Thinking', 'Code Generation', 'Analysis'],
  },
  {
    id: 'gemini-claude-opus-4-5-thinking',
    name: 'Claude Opus 4.5 Thinking',
    description: 'Model Claude Opus 4.5 cao cấp với khả năng suy luận mở rộng',
    category: 'claude',
    features: ['Extended Thinking', 'Complex Reasoning', 'Premium'],
  },
  {
    id: 'gemini-claude-sonnet-4-5',
    name: 'Claude Sonnet 4.5',
    description: 'Model Claude Sonnet 4.5 tiêu chuẩn, cân bằng giữa tốc độ và chất lượng',
    category: 'claude',
    features: ['Fast Response', 'Code Generation', 'Balanced'],
  },
  {
    id: 'gemini-3-pro-preview',
    name: 'Gemini 3 Pro Preview',
    description: 'Model Gemini 3 Pro phiên bản preview với khả năng xử lý đa phương thức',
    category: 'gemini',
    features: ['Multimodal', 'Advanced Reasoning', 'Preview'],
  },
  {
    id: 'gemini-3-flash-preview',
    name: 'Gemini 3 Flash Preview',
    description: 'Model Gemini 3 Flash nhanh, tối ưu cho các tác vụ đơn giản',
    category: 'gemini',
    features: ['Fast', 'Cost Effective', 'Preview'],
  },
  {
    id: 'gemini-3-pro-image-preview',
    name: 'Gemini 3 Pro Image Preview',
    description: 'Model Gemini 3 Pro với khả năng tạo và xử lý hình ảnh',
    category: 'gemini',
    features: ['Image Generation', 'Vision', 'Preview'],
  },
  {
    id: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    description: 'Model Gemini 2.5 Flash ổn định, phù hợp cho production',
    category: 'gemini',
    features: ['Stable', 'Fast', 'Production Ready'],
  },
  {
    id: 'gemini-2.5-flash-lite',
    name: 'Gemini 2.5 Flash Lite',
    description: 'Phiên bản nhẹ của Gemini 2.5 Flash, tiết kiệm chi phí',
    category: 'gemini',
    features: ['Lightweight', 'Budget Friendly', 'Fast'],
  },
  {
    id: 'gemini-2.5-computer-use-preview-10-2025',
    name: 'Gemini 2.5 Computer Use',
    description: 'Model đặc biệt cho tự động hóa máy tính và browser',
    category: 'gemini',
    features: ['Computer Use', 'Automation', 'Preview'],
  },
  {
    id: 'gpt-oss-120b-medium',
    name: 'GPT OSS 120B Medium',
    description: 'Model GPT mã nguồn mở 120B tham số',
    category: 'openai',
    features: ['Open Source', '120B Parameters', 'General Purpose'],
  },
];

const categoryColors = {
  claude: 'bg-blue-500',
  gemini: 'bg-emerald-500',
  openai: 'bg-purple-500',
};

const categoryLabels = {
  claude: 'Claude',
  gemini: 'Gemini',
  openai: 'OpenAI',
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
      className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      title="Copy Model ID"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" />
      )}
    </button>
  );
}

export function ModelsPage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-brand bg-brand/10">
            Tài liệu
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Danh sách Model
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Các model AI có sẵn trên Simple Router. Sử dụng Model ID khi cấu hình các công cụ.
        </p>
      </header>

      <div className="space-y-4">
        {models.map((model) => (
          <div
            key={model.id}
            className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {model.name}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-xs text-white ${categoryColors[model.category]}`}>
                    {categoryLabels[model.category]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Model ID:</span>
                  <code className="text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300 font-mono">
                    {model.id}
                  </code>
                  <CopyButton text={model.id} />
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              {model.description}
            </p>
            {model.features && (
              <div className="flex flex-wrap gap-2">
                {model.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-0.5 rounded-full text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
