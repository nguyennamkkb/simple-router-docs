import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { Info } from 'lucide-react';
import { API_CONFIG } from '@/lib/constants';

const installTabs = [
  { id: 'curl', label: 'macOS/Linux', code: 'curl -fsSL https://ampcode.com/install.sh | bash' },
  { id: 'npm', label: 'npm', code: 'npm install -g @anthropic-ai/amp' },
];

const oauthTabs = [
  { id: 'google', label: 'Google (Gemini)', code: 'cliapi --login' },
  { id: 'openai', label: 'OpenAI (GPT)', code: 'cliapi --codex-login' },
  { id: 'claude', label: 'Claude', code: 'cliapi --claude-login' },
];

const settingsPathTabs = [
  { id: 'macos', label: 'macOS', code: '~/.config/amp/settings.json' },
  { id: 'linux', label: 'Linux', code: '~/.config/amp/settings.json' },
  { id: 'windows', label: 'Windows', code: '%APPDATA%\\amp\\settings.json' },
];

const secretsPathTabs = [
  { id: 'macos', label: 'macOS', code: '~/.local/share/amp/secrets.json' },
  { id: 'linux', label: 'Linux', code: '~/.local/share/amp/secrets.json' },
  { id: 'windows', label: 'Windows', code: '%LOCALAPPDATA%\\amp\\secrets.json' },
];

const settingsJson = `{
  "amp.url": "${API_CONFIG.BASE_URL}"
}`;

const secretsJson = `{
  "amp.apiKey": "${API_CONFIG.DEFAULT_API_KEY}"
}`;

const envVarTabs = [
  { id: 'macos', label: 'macOS/Linux', code: `export AMP_URL="${API_CONFIG.BASE_URL}"
export AMP_API_KEY="${API_CONFIG.DEFAULT_API_KEY}"` },
  { id: 'windows', label: 'Windows', code: `$env:AMP_URL="${API_CONFIG.BASE_URL}"
$env:AMP_API_KEY="${API_CONFIG.DEFAULT_API_KEY}"` },
];

export function AmpPage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-orange-500 bg-orange-50 dark:bg-orange-900/10">
            Tích hợp
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Tích hợp Amp
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Tăng tốc quy trình làm việc trên terminal của bạn với Amp CLI và Simple Router.
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Giới thiệu">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            Amp là coding agent tiên tiến cho terminal và editor của bạn. Amp có 3 chế độ: smart (sử dụng model state-of-the-art), 
            rush (nhanh hơn, rẻ hơn cho các tác vụ nhỏ), và free (miễn phí với các model cơ bản).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title="Model hỗ trợ"
              color="orange"
              items={['Gemini 3 Pro/Flash Preview', 'Claude Sonnet/Opus 4.6', 'GPT-5, GPT-5 Codex']}
            />
          </div>
        </StepSection>

        <StepSection step={2} title="Cài đặt Amp CLI">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cài đặt Amp CLI. Xem thêm{' '}
            <a 
              href="https://ampcode.com/manual#cli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              hướng dẫn chính thức
            </a>.
          </p>
          <CodeBlock tabs={installTabs} className="max-w-2xl" />
        </StepSection>

        <StepSection step={3} title="Đăng nhập OAuth (Tùy chọn)">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Nếu bạn có subscription Google/OpenAI/Claude, đăng nhập OAuth để sử dụng trực tiếp qua CLIProxyAPI.
          </p>
          <CodeBlock tabs={oauthTabs} title="Chọn provider" className="max-w-2xl" />
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3 max-w-2xl">
            Tokens được lưu tại <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">~/.cliapi/</code>. 
            Nếu không có subscription, Amp sẽ fallback về ampcode.com.
          </p>
        </StepSection>

        <StepSection step={4} title="Cấu hình Settings">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Tạo hoặc chỉnh sửa file settings để cấu hình URL của Simple Router.
          </p>
          <CodeBlock tabs={settingsPathTabs} className="max-w-2xl mb-6" />
          <CodeBlock code={settingsJson} title="settings.json" className="max-w-2xl" />
        </StepSection>

        <StepSection step={5} title="Cấu hình Secrets">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Tạo file secrets để lưu API key của bạn.
          </p>
          <CodeBlock tabs={secretsPathTabs} className="max-w-2xl mb-6" />
          <CodeBlock code={secretsJson} title="secrets.json" className="max-w-2xl" />
        </StepSection>

        <StepSection step={6} title="Hoặc dùng Environment Variables">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Thay vì tạo file config, bạn có thể dùng biến môi trường.
          </p>
          <CodeBlock tabs={envVarTabs} title="Terminal" className="max-w-2xl" />
        </StepSection>

        <StepSection step={7} title="Sử dụng">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Sau khi cấu hình xong, bạn có thể sử dụng Amp CLI. Lệnh <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">amp login</code> không còn cần thiết nữa.
          </p>
          <CodeBlock code="amp" title="Terminal" className="max-w-2xl" />
        </StepSection>

        {/* Tip */}
        <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 max-w-2xl">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-orange-950 dark:text-orange-200 leading-relaxed m-0">
              <strong>Gợi ý:</strong> Amp cũng hỗ trợ IDE extensions cho VS Code, Windsurf. Chỉ cần cấu hình Amp URL là{' '}
              <code className="bg-orange-100 dark:bg-orange-900/30 px-1 rounded">{API_CONFIG.BASE_URL}</code> và API Key trong settings của extension.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
