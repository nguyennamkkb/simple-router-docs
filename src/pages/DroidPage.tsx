import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { Link } from 'react-router-dom';

const configPathTabs = [
  { id: 'macos', label: 'macOS', code: '~/.factory/config.json' },
  { id: 'linux', label: 'Linux', code: '~/.factory/config.json' },
  { id: 'windows', label: 'Windows', code: '%USERPROFILE%\\.factory\\config.json' },
];

const configJson = `{
  "custom_models": [
    {
      "model": "gemini-3-flash-preview",
      "base_url": "http://127.0.0.1:8317/v1",
      "api_key": "api-key-1",
      "provider": "openai"
    },
    {
      "model": "gemini-claude-opus-4-5-thinking",
      "base_url": "http://127.0.0.1:8317",
      "api_key": "api-key-1",
      "provider": "anthropic"
    },
    {
      "model": "gpt-oss-120b-medium",
      "base_url": "http://127.0.0.1:8317",
      "api_key": "api-key-1",
      "provider": "openai"
    }
  ]
}`;

export function DroidPage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-purple-500 bg-purple-50 dark:bg-purple-900/10">
            Tích hợp
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Tích hợp Factory Droid
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Kết nối các Droid agent cấp doanh nghiệp của Factory với cổng gateway tùy chỉnh Simple Router của bạn.
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Giới thiệu">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            Droid là một agent coding thông minh tự động hóa các tác vụ kỹ thuật phần mềm. Tích hợp nó với
            Simple Router cho phép bạn tập trung các cuộc gọi LLM của nó.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title="Tính năng chính"
              color="purple"
              items={['Tự động hóa Review PR', 'Refactoring nhận biết ngữ cảnh', 'Gateway Model hợp nhất']}
            />
          </div>
        </StepSection>

        <StepSection step={2} title="Cài đặt">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cài đặt Droid CLI sử dụng script cài đặt chính thức. Xem thêm{' '}
            <a 
              href="https://docs.factory.ai/cli/getting-started/quickstart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              hướng dẫn từ nhà phát triển
            </a>.
          </p>
          <CodeBlock code="curl -fsSL https://app.factory.ai/cli | sh" title="Terminal" className="max-w-2xl" />
        </StepSection>

        <StepSection step={3} title="Xác nhận Cài đặt">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Sau khi cài đặt thành công, bạn sẽ thấy màn hình giới thiệu Droid như bên dưới.
          </p>
          <div className="max-w-2xl rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            <img 
              src="https://mintcdn.com/factory/pSQIcJWS0EqHRORW/images/droid_tui_intro.png?w=840&fit=max&auto=format&n=pSQIcJWS0EqHRORW&q=85&s=a1852531473e281acc57585c0365c419" 
              alt="Droid TUI intro screen - Installation successful" 
              className="w-full h-auto"
            />
          </div>
        </StepSection>

        <StepSection step={4} title="Cấu hình">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cập nhật tệp cài đặt toàn cục để trỏ tới instance Simple Router của bạn.
          </p>
          <CodeBlock tabs={configPathTabs} className="max-w-2xl mb-6" />
          <CodeBlock code={configJson} title="config.json" className="max-w-2xl" />
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/20 max-w-2xl">
            <p className="text-xs text-purple-900 dark:text-purple-200 leading-relaxed m-0">
              <strong>Lưu ý về Provider:</strong>
            </p>
            <ul className="text-xs text-purple-900 dark:text-purple-200 mt-2 space-y-1 list-disc list-inside m-0">
              <li>Với model Claude, chọn <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">"provider": "anthropic"</code></li>
              <li>Với model Gemini và OpenAI, chọn <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">"provider": "openai"</code></li>
            </ul>
            <p className="text-xs text-purple-900 dark:text-purple-200 mt-2">
              Xem <Link to="/models" className="text-purple-600 hover:underline">danh sách model</Link> để biết thêm các model có sẵn.
            </p>
          </div>
        </StepSection>
      </div>
    </div>
  );
}
