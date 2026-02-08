import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { Link } from 'react-router-dom';
import { codeExamples } from '@/lib/constants';

const installTabs = [
  { id: 'script', label: 'Script', code: 'curl -fsSL https://opencode.ai/install | bash' },
  { id: 'npm', label: 'npm', code: 'npm install -g opencode-ai' },
  { id: 'homebrew', label: 'Homebrew', code: 'brew install sst/tap/opencode' },
  { id: 'arch', label: 'Arch Linux', code: 'paru -S opencode-bin' },
];

const configPathTabs = [
  { id: 'macos', label: 'macOS', code: '~/.config/opencode/opencode.json' },
  { id: 'linux', label: 'Linux', code: '~/.config/opencode/opencode.json' },
  { id: 'windows', label: 'Windows', code: '%USERPROFILE%\\.config\\opencode\\opencode.json' },
];

const configJson = codeExamples.openCodeConfig();

export function OpenCodePage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/10">
            Tích hợp
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Cài đặt OpenCode
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Cấu hình OpenCode Agent để hoạt động liền mạch với cổng API hợp nhất của Simple Router.
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Giới thiệu">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            OpenCode là một agent AI nguồn mở mạnh mẽ chạy trong terminal của bạn. Bằng cách kết nối nó với Simple
            Router, bạn có thể điều phối nhiều model thông qua một cấu hình duy nhất.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title="Lợi ích"
              color="emerald"
              items={['Mã nguồn mở & Ưu tiên cục bộ', 'Cấu hình Provider linh hoạt', 'Truy cập toàn bộ hệ thống tệp']}
            />
          </div>
        </StepSection>

        <StepSection step={2} title="Cài đặt">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cài đặt OpenCode CLI. Xem thêm{' '}
            <a 
              href="https://opencode.ai/download" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              trang tải xuống chính thức
            </a>.
          </p>
          <CodeBlock tabs={installTabs} className="max-w-2xl" />
        </StepSection>

        <StepSection step={3} title="Cấu hình">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Tạo tệp cấu hình để trỏ OpenCode tới Simple Router của bạn. Xem thêm{' '}
            <a 
              href="https://opencode.ai/docs/models/#configure-models" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              hướng dẫn cấu hình model
            </a>.
          </p>
          <CodeBlock tabs={configPathTabs} className="max-w-2xl mb-6" />
          <CodeBlock code={configJson} title="opencode.json" className="max-w-2xl" />
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl">
            Sau khi cấu hình, chạy lệnh <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-medium">/models</code> trong OpenCode để chọn model. 
          </p>
          <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 max-w-2xl">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-medium">
              ⚠️ Lưu ý quan trọng: Bạn cần thay thế Model ID trong cấu hình bằng một trong các model từ{' '}
              <Link to="/docs/models" className="text-amber-700 dark:text-amber-300 underline font-semibold">
                danh sách model
              </Link>{' '}
              để hệ thống hoạt động.
            </p>
          </div>
        </StepSection>
      </div>
    </div>
  );
}
