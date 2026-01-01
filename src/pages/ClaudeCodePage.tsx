import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { API_CONFIG, codeExamples } from '@/lib/constants';

const installTabs = [
  { id: 'npm', label: 'npm', code: 'npm install -g @anthropic-ai/claude-code' },
  { id: 'pnpm', label: 'pnpm', code: 'pnpm add -g @anthropic-ai/claude-code' },
  { id: 'yarn', label: 'yarn', code: 'yarn global add @anthropic-ai/claude-code' },
];

const envConfigTabs = [
  { id: 'macos', label: 'macOS', code: codeExamples.claudeCodeEnv.unix() },
  { id: 'linux', label: 'Linux', code: codeExamples.claudeCodeEnv.unix() },
  { id: 'windows', label: 'Windows', code: codeExamples.claudeCodeEnv.windows() },
];

export function ClaudeCodePage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-sky-500 bg-sky-50 dark:bg-sky-900/10">
            Hướng dẫn Thiết lập
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Tích hợp Claude Code
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Hướng dẫn toàn diện để thiết lập và tối ưu hóa Claude Code CLI của Anthropic với Simple Router.
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Giới thiệu">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            Claude Code là một công cụ CLI mang tính cách mạng cho phép Claude tương tác trực tiếp với codebase của bạn,
            thực thi các lệnh shell và giải quyết các vấn đề phức tạp ngay trong terminal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title="Tính năng"
              color="brand"
              items={['Đọc/Ghi ngữ cảnh code', 'Chạy lệnh shell', 'Tìm kiếm toàn bộ project']}
            />
          </div>
        </StepSection>

        <StepSection step={2} title="Cài đặt Nhanh">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cài đặt Claude Code toàn cục thông qua trình quản lý gói ưa thích của bạn.
          </p>
          <CodeBlock tabs={installTabs} title="Global" className="max-w-2xl" />
        </StepSection>

        <StepSection step={3} title="Cấu hình">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Chạy các lệnh sau trong terminal để thiết lập biến môi trường. Chọn hệ điều hành của bạn:
          </p>
          <CodeBlock tabs={envConfigTabs} title="Chạy trong Terminal" className="max-w-2xl" />
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            Xem <Link to="/docs/models" className="text-sky-600 hover:underline">danh sách model</Link> để thay thế model phù hợp với nhu cầu của bạn.
          </p>
        </StepSection>

        <StepSection step={4} title="Khởi chạy">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Sau khi thiết lập xong, khởi chạy Claude Code:
          </p>
          <CodeBlock code="claude" title="Terminal" className="max-w-2xl" />
        </StepSection>

        <StepSection step={5} title="Xác nhận Bảo mật">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Khi chạy lệnh <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">claude</code> lần đầu, 
            bạn sẽ thấy màn hình xác nhận bảo mật. Nhấn <strong>1</strong> để chọn "Yes, proceed" và tiếp tục.
          </p>
          <div className="max-w-2xl rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            <img 
              src="/images/setting-claude-1.png" 
              alt="Claude Code security confirmation - Press 1 to proceed" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            Claude Code cần quyền đọc, ghi và thực thi file trong thư mục hiện tại. Chỉ sử dụng với các project từ nguồn đáng tin cậy.
          </p>
        </StepSection>

        <StepSection step={6} title="Hoàn tất">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Khi thấy màn hình như bên dưới, bạn đã cài đặt thành công! Bây giờ bạn có thể bắt đầu sử dụng Claude Code.
          </p>
          <div className="max-w-2xl rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            <img 
              src="/images/setting-claude-2.png" 
              alt="Claude Code setup complete - Ready to use" 
              className="w-full h-auto"
            />
          </div>
        </StepSection>

        {/* Tip */}
        <div className="p-5 rounded-xl bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-900/20 max-w-2xl">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-sky-950 dark:text-sky-200 leading-relaxed m-0">
              <strong>Gợi ý:</strong> Thay <code className="bg-sky-100 dark:bg-sky-900/30 px-1 rounded">{API_CONFIG.DEFAULT_API_KEY}</code> bằng 
              API key thực của bạn. Bạn có thể lấy key từ{' '}
              <a href="https://t.me/simple_route_bot" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                @simple_route_bot
              </a> trên Telegram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
