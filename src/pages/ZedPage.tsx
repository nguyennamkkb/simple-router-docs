import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';

const settingsJson = `{
  "language_models": {
    "openai": {
      "api_url": "http://simpleverse.io.vn/router/v1",
      "available_models": [
        {
          "name": "claude-3-5-sonnet",
          "max_tokens": 4096
        }
      ]
    }
  }
}`;

export function ZedPage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-cyan-500 bg-cyan-50 dark:bg-cyan-900/10">
            Tích hợp
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Tích hợp Zed
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Trình soạn thảo mã hiệu năng cao với khả năng AI nguyên bản.
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Giới thiệu">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            Zed là một trình soạn thảo nhanh như chớp với trợ lý AI tích hợp sẵn. Bằng cách định cấu hình nó để sử
            dụng Simple Router, bạn có thể tận dụng khả năng quản lý model tập trung trực tiếp trong Zed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title="Tính năng"
              color="cyan"
              items={['Tương thích OpenAI nguyên bản', 'Trợ lý nội tuyến (Inline Assistant)', 'Nhân Rust siêu nhanh']}
            />
          </div>
        </StepSection>

        <StepSection step={2} title="Cài đặt">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Tải xuống Zed cho nền tảng của bạn.
          </p>
          <CodeBlock 
            code='Truy cập zed.dev để tải xuống phiên bản mới nhất.' 
            title="Tải xuống Chính thức" 
            className="max-w-2xl" 
          />
        </StepSection>

        <StepSection step={3} title="Cấu hình">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cấu hình Zed để trỏ tới Simple Router thông qua cài đặt (settings).
          </p>
          <ol className="list-decimal list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6 ml-4">
            <li>Mở Cài đặt Zed (Cmd+, hoặc Ctrl+,).</li>
            <li>Thêm hoặc cập nhật phần <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">language_models</code>.</li>
          </ol>
          <CodeBlock code={settingsJson} title="settings.json" className="max-w-2xl mb-6" />
          
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Đừng quên thiết lập API key của bạn trong terminal:
          </p>
          <CodeBlock code='export OPENAI_API_KEY="sk-simple-router"' title="Terminal" className="max-w-2xl" />
        </StepSection>
      </div>
    </div>
  );
}
