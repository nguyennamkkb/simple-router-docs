import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection } from '@/components/docs/StepSection';
import { Info, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const curlExample = `curl http://127.0.0.1:8317/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer api-key-1" \\
  -d '{
    "model": "gemini-claude-sonnet-4-5-thinking",
    "messages": [
      {"role": "user", "content": "Xin chào!"}
    ]
  }'`;

const pythonExample = `from openai import OpenAI

client = OpenAI(
    base_url="http://127.0.0.1:8317/v1",
    api_key="api-key-1"
)

response = client.chat.completions.create(
    model="gemini-claude-sonnet-4-5-thinking",
    messages=[
        {"role": "user", "content": "Xin chào!"}
    ]
)

print(response.choices[0].message.content)`;

const nodeExample = `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'http://127.0.0.1:8317/v1',
  apiKey: 'api-key-1',
});

const response = await client.chat.completions.create({
  model: 'gemini-claude-sonnet-4-5-thinking',
  messages: [
    { role: 'user', content: 'Xin chào!' }
  ],
});

console.log(response.choices[0].message.content);`;

const streamExample = `const stream = await client.chat.completions.create({
  model: 'gemini-claude-sonnet-4-5-thinking',
  messages: [
    { role: 'user', content: 'Viết một bài thơ ngắn' }
  ],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}`;

const codeTabs = [
  { id: 'curl', label: 'cURL', code: curlExample },
  { id: 'python', label: 'Python', code: pythonExample },
  { id: 'node', label: 'Node.js', code: nodeExample },
];

export function ApiGuidePage() {
  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-brand bg-brand/10">
            Tài liệu
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Hướng dẫn API
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Simple Router tương thích với OpenAI API. Bạn có thể sử dụng bất kỳ thư viện OpenAI nào để kết nối.
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title="Thông tin kết nối">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Sử dụng các thông tin sau để kết nối với Simple Router:
          </p>
          <div className="max-w-2xl p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700 dark:text-slate-300 w-24">Base URL:</span>
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">http://127.0.0.1:8317/v1</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700 dark:text-slate-300 w-24">API Key:</span>
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">api-key-1</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700 dark:text-slate-300 w-24">Model:</span>
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">gemini-claude-sonnet-4-5-thinking</code>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            Xem <Link to="/docs/models" className="text-brand hover:underline">danh sách model</Link> để chọn model phù hợp.
          </p>
        </StepSection>

        <StepSection step={2} title="Chat Completions">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Endpoint chính để gửi tin nhắn và nhận phản hồi từ model:
          </p>
          <CodeBlock tabs={codeTabs} className="max-w-3xl" />
        </StepSection>

        <StepSection step={3} title="Streaming">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Để nhận phản hồi theo thời gian thực, sử dụng tham số <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">stream: true</code>:
          </p>
          <CodeBlock code={streamExample} title="Node.js Streaming" className="max-w-3xl" />
        </StepSection>

        <StepSection step={4} title="Các Endpoint hỗ trợ">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Simple Router hỗ trợ các endpoint sau:
          </p>
          <div className="max-w-2xl space-y-2">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <code className="text-sm text-slate-700 dark:text-slate-300">POST /v1/chat/completions</code>
              <p className="text-xs text-slate-500 mt-1">Gửi tin nhắn và nhận phản hồi</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <code className="text-sm text-slate-700 dark:text-slate-300">GET /v1/models</code>
              <p className="text-xs text-slate-500 mt-1">Lấy danh sách model có sẵn</p>
            </div>
          </div>
        </StepSection>

        {/* Tip */}
        <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 max-w-2xl">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
              <p className="mb-2">
                <strong>Tài liệu chi tiết:</strong> Simple Router tương thích hoàn toàn với OpenAI API. 
                Để biết thêm về các tham số và tùy chọn, tham khảo tài liệu chính thức:
              </p>
              <a 
                href="https://platform.openai.com/docs/api-reference/introduction" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium"
              >
                OpenAI API Reference
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
