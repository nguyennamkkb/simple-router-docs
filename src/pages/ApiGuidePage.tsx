import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection } from '@/components/docs/StepSection';
import { Info, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { API_CONFIG, DEFAULT_MODELS, codeExamples } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const streamExample = `const stream = await client.chat.completions.create({
  model: 'THAY_TÊN_MODEL',
  messages: [
    { role: 'user', content: 'Viết một bài thơ ngắn' }
  ],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}`;

const codeTabs = [
  { id: 'curl', label: 'cURL', code: codeExamples.curl() },
  { id: 'python', label: 'Python', code: codeExamples.python() },
  { id: 'node', label: 'Node.js', code: codeExamples.node() },
];

export function ApiGuidePage() {
  const { t } = useTranslation();

  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-brand bg-brand/10">
            {t('apiGuide.badge')}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {t('apiGuide.title')}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          {t('apiGuide.description')}
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title={t('apiGuide.steps.step1.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('apiGuide.steps.step1.description')}
          </p>
          <div className="max-w-2xl p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700 dark:text-slate-300 w-24">{t('apiGuide.steps.step1.labels.baseUrl')}</span>
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{API_CONFIG.BASE_URL_V1}</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700 dark:text-slate-300 w-24">{t('apiGuide.steps.step1.labels.apiKey')}</span>
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{API_CONFIG.DEFAULT_API_KEY}</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700 dark:text-slate-300 w-24">{t('apiGuide.steps.step1.labels.model')}</span>
                <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{DEFAULT_MODELS.CLAUDE_SONNET_THINKING}</code>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 max-w-2xl">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-medium">
              <Trans
                i18nKey="apiGuide.steps.step1.warning"
                components={{ link: <Link to="/docs/models" className="text-amber-700 dark:text-amber-300 underline font-semibold" /> }}
              />
            </p>
          </div>
        </StepSection>

        <StepSection step={2} title={t('apiGuide.steps.step2.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('apiGuide.steps.step2.description')}
          </p>
          <CodeBlock tabs={codeTabs} className="max-w-3xl" />
        </StepSection>

        <StepSection step={3} title={t('apiGuide.steps.step3.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            <Trans
              i18nKey="apiGuide.steps.step3.description"
              components={{ code: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs" /> }}
            />
          </p>
          <CodeBlock code={streamExample} title="Node.js Streaming" className="max-w-3xl" />
        </StepSection>

        <StepSection step={4} title={t('apiGuide.steps.step4.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('apiGuide.steps.step4.description')}
          </p>
          <div className="max-w-2xl space-y-2">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <code className="text-sm text-slate-700 dark:text-slate-300">POST /v1/chat/completions</code>
              <p className="text-xs text-slate-500 mt-1">{t('apiGuide.steps.step4.endpoints.chat')}</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <code className="text-sm text-slate-700 dark:text-slate-300">GET /v1/models</code>
              <p className="text-xs text-slate-500 mt-1">{t('apiGuide.steps.step4.endpoints.models')}</p>
            </div>
          </div>
        </StepSection>

        {/* Tip */}
        <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 max-w-2xl">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
              <p className="mb-2">
                <Trans i18nKey="apiGuide.tip.text" />
              </p>
              <a
                href="https://platform.openai.com/docs/api-reference/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium"
              >
                {t('apiGuide.tip.link')}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
