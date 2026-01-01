import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox, ConfigTable } from '@/components/docs/StepSection';
import { Link } from 'react-router-dom';
import { API_CONFIG, DEFAULT_MODELS } from '@/lib/constants';

export function KiloPage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-red-500 bg-red-50 dark:bg-red-900/10">
            Tích hợp
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Tích hợp Kilo Code
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Một tiện ích mở rộng agent lập trình AI mạnh mẽ cho VS Code.
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Giới thiệu">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            Kilo Code là một tiện ích mở rộng VS Code giúp đưa các agent AI tự chủ vào trình soạn thảo của bạn. Cấu
            hình nó để định tuyến các yêu cầu thông qua Simple Router để quản lý thống nhất.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title="Khả năng"
              color="red"
              items={['Đa chế độ (Code, Architect, Debug)', 'Hỗ trợ Model Cục bộ', 'Cổng API Tùy chỉnh']}
            />
          </div>
        </StepSection>

        <StepSection step={2} title="Cài đặt">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cài đặt tiện ích mở rộng trực tiếp từ VS Code Marketplace.
          </p>
          <CodeBlock code="ext install kilo-code.kilo" title="VS Code Marketplace" className="max-w-2xl" />
          <p className="text-xs text-slate-500 mt-4 italic">
            Hoặc tìm kiếm "Kilo Code" trong chế độ xem Extensions (Ctrl+Shift+X).
          </p>
        </StepSection>

        <StepSection step={3} title="Cấu hình">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Trỏ Kilo Code đến endpoint Simple Router của bạn.
          </p>
          <ol className="list-decimal list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6 ml-4">
            <li>Mở Cài đặt Kilo Code (biểu tượng bánh răng trong bảng Kilo).</li>
            <li>Đi tới phần <strong>API Provider</strong>.</li>
            <li>Chọn <strong>OpenAI Compatible</strong> (hoặc Custom).</li>
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
            Xem <Link to="/docs/models" className="text-red-600 hover:underline">danh sách model</Link> để chọn model phù hợp.
          </p>
        </StepSection>
      </div>
    </div>
  );
}
