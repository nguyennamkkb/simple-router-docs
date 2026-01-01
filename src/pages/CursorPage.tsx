import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const modelsConfig = `// Cursor Settings > Models > Add Model
// Base URL: http://127.0.0.1:8317/v1
// API Key: api-key-1

// Các model có thể thêm:
// - gemini-claude-sonnet-4-5-thinking
// - gemini-claude-opus-4-5-thinking
// - gemini-3-flash-preview
// - gemini-3-pro-preview`;

export function CursorPage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-pink-500 bg-pink-50 dark:bg-pink-900/10">
            Tích hợp
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Tích hợp Cursor
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Cấu hình Cursor IDE để sử dụng các model AI thông qua Simple Router.
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Giới thiệu">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            Cursor là một IDE mạnh mẽ được xây dựng trên VS Code với tích hợp AI sâu. 
            Bạn có thể cấu hình Cursor để sử dụng các model từ Simple Router thay vì API mặc định.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title="Model hỗ trợ"
              color="purple"
              items={['Claude Sonnet/Opus 4.5 Thinking', 'Gemini 3 Flash/Pro Preview', 'Tất cả model OpenAI-compatible']}
            />
          </div>
        </StepSection>

        <StepSection step={2} title="Mở Cursor Settings">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Mở Cursor và vào <strong>Settings</strong> → <strong>Models</strong> để cấu hình model tùy chỉnh.
          </p>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
            <p>• Trên macOS: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">Cmd + ,</code></p>
            <p>• Trên Windows/Linux: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">Ctrl + ,</code></p>
          </div>
        </StepSection>

        <StepSection step={3} title="Thêm Model">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Trong phần <strong>Models</strong>, click <strong>Add Model</strong> và nhập thông tin:
          </p>
          <div className="max-w-2xl space-y-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-700 dark:text-slate-300 w-24">Model Name:</span>
                  <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">gemini-claude-sonnet-4-5-thinking</code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-700 dark:text-slate-300 w-24">Base URL:</span>
                  <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">http://127.0.0.1:8317/v1</code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-700 dark:text-slate-300 w-24">API Key:</span>
                  <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">api-key-1</code>
                </div>
              </div>
            </div>
            <CodeBlock code={modelsConfig} title="Các model có thể thêm" className="max-w-2xl" />
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
              Xem <Link to="/docs/models" className="text-pink-600 hover:underline">danh sách model đầy đủ</Link> để chọn model phù hợp.
            </p>
          </div>
        </StepSection>

        <StepSection step={4} title="Sử dụng">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Sau khi thêm model, bạn có thể chọn model trong Cursor Chat hoặc Composer bằng cách click vào tên model và chọn model vừa thêm.
          </p>
        </StepSection>

        {/* Tip */}
        <div className="p-5 rounded-xl bg-pink-50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-900/20 max-w-2xl">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-pink-950 dark:text-pink-200 leading-relaxed m-0">
              <strong>Lưu ý:</strong> Đảm bảo Simple Router đang chạy trên <code className="bg-pink-100 dark:bg-pink-900/30 px-1 rounded">http://127.0.0.1:8317</code> trước khi sử dụng trong Cursor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
