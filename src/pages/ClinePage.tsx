import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox, ConfigTable } from '@/components/docs/StepSection';
import { Link } from 'react-router-dom';
import { API_CONFIG, DEFAULT_MODELS } from '@/lib/constants';

export function ClinePage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/10">
            Tích hợp
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Tích hợp Cline
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Agent lập trình tự chủ hoạt động ngay trong IDE của bạn.
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Giới thiệu">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            Cline là một trợ lý AI mã nguồn mở có khả năng xử lý các tác vụ phát triển phần mềm phức tạp. Kết nối nó
            với Simple Router để điều phối việc sử dụng model một cách hiệu quả.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title="Tính năng chính"
              color="indigo"
              items={['Thực thi Terminal', 'Tạo & Chỉnh sửa Tệp', 'Tự động hóa Trình duyệt']}
            />
          </div>
        </StepSection>

        <StepSection step={2} title="Cài đặt">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cài đặt Cline trực tiếp từ VS Code Marketplace.
          </p>
          <CodeBlock code="ext install saoudrizwan.claude-dev" title="VS Code Marketplace" className="max-w-2xl" />
          <p className="text-xs text-slate-500 mt-4 italic">
            Hoặc tìm kiếm "Cline" trong chế độ xem Extensions.
          </p>
        </StepSection>

        <StepSection step={3} title="Cấu hình">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Thiết lập Cline với OpenAI Compatible Provider trỏ tới Simple Router.
          </p>
          <ol className="list-decimal list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6 ml-4">
            <li>Nhấp vào biểu tượng Cline trong thanh bên.</li>
            <li>Mở Cài đặt (biểu tượng bánh răng).</li>
            <li>Đặt <strong>API Provider</strong> thành <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">OpenAI Compatible</code>.</li>
            <li>Nhập các chi tiết sau:</li>
          </ol>
          <ConfigTable
            rows={[
              { field: 'API Provider', value: 'OpenAI Compatible' },
              { field: 'Base URL', value: API_CONFIG.BASE_URL_V1, isCode: true },
              { field: 'API Key', value: API_CONFIG.DEFAULT_API_KEY, isCode: true },
              { field: 'Model ID', value: DEFAULT_MODELS.CLAUDE_SONNET_THINKING, isCode: true },
            ]}
          />
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-4">
            Xem <Link to="/docs/models" className="text-indigo-600 hover:underline">danh sách model</Link> để chọn model phù hợp.
          </p>
        </StepSection>
      </div>
    </div>
  );
}
