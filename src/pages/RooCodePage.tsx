import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox, ConfigTable } from '@/components/docs/StepSection';
import { Link } from 'react-router-dom';
import { API_CONFIG, DEFAULT_MODELS } from '@/lib/constants';

export function RooCodePage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-yellow-500 bg-yellow-50 dark:bg-yellow-900/10">
            Tích hợp
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Tích hợp Roo Code
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Tiện ích mở rộng agent lập trình tự chủ cho VS Code (trước đây là Roo Cline).
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Giới thiệu">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            Roo Code là một agent AI hoàn toàn tự chủ hoạt động trong trình soạn thảo của bạn. Bằng cách kết nối nó
            với Simple Router, bạn có thể kiểm soát tập trung các model và chi phí.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title="Khả năng"
              color="yellow"
              items={['Truy cập Dòng lệnh (Command Line)', 'Thao tác File I/O', 'Tự động hóa Trình duyệt']}
            />
          </div>
        </StepSection>

        <StepSection step={2} title="Cài đặt">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cài đặt thông qua VS Code Marketplace.
          </p>
          <CodeBlock code="ext install RooVeterinaryInc.roo-cline" title="VS Code Marketplace" className="max-w-2xl" />
          <p className="text-xs text-slate-500 mt-4 italic">
            Hoặc tìm kiếm "Roo Code" trong thanh bên Extensions.
          </p>
        </StepSection>

        <StepSection step={3} title="Cấu hình">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Cấu hình Roo Code để sử dụng nhà cung cấp tương thích OpenAI tùy chỉnh.
          </p>
          <ol className="list-decimal list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6 ml-4">
            <li>Mở Cài đặt Roo Code (biểu tượng bánh răng trong bảng Roo).</li>
            <li>Đi tới thiết lập <strong>Providers</strong>.</li>
            <li>Chọn <strong>OpenAI Compatible</strong> từ menu thả xuống.</li>
            <li>Nhập cấu hình:</li>
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
            Xem <Link to="/docs/models" className="text-yellow-600 hover:underline">danh sách model</Link> để chọn model phù hợp.
          </p>
        </StepSection>
      </div>
    </div>
  );
}
