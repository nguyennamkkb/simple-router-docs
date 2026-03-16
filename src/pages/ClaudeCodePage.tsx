import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { API_CONFIG, codeExamples } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const installTabs = [
  { id: 'npm', label: 'npm', code: 'npm install -g @anthropic-ai/claude-code' },
  { id: 'pnpm', label: 'pnpm', code: 'pnpm add -g @anthropic-ai/claude-code' },
  { id: 'yarn', label: 'yarn', code: 'yarn global add @anthropic-ai/claude-code' },
];

const settingsPathTabs = [
  { id: 'macos', label: 'macOS/Linux', code: codeExamples.claudeCodeSettingsPath.unix() },
  { id: 'windows', label: 'Windows', code: codeExamples.claudeCodeSettingsPath.windows() },
];

export function ClaudeCodePage() {
  const { t } = useTranslation();

  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-sky-500 bg-sky-50 dark:bg-sky-900/10">
            {t('claudeCode.badge')}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {t('claudeCode.title')}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          {t('claudeCode.description')}
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title={t('claudeCode.steps.step1.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            {t('claudeCode.steps.step1.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title={t('claudeCode.steps.step1.features.title')}
              color="brand"
              items={[
                t('claudeCode.steps.step1.features.items.0'),
                t('claudeCode.steps.step1.features.items.1'),
                t('claudeCode.steps.step1.features.items.2'),
              ]}
            />
          </div>
        </StepSection>

        <StepSection step={2} title={t('claudeCode.steps.step2.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('claudeCode.steps.step2.description')}
          </p>
          <CodeBlock tabs={installTabs} title="Global" className="max-w-2xl" />
        </StepSection>

        <StepSection step={3} title={t('claudeCode.steps.step3.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            <Trans
              i18nKey="claudeCode.steps.step3.description"
              components={{ code: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs" /> }}
            />
          </p>
          <CodeBlock tabs={settingsPathTabs} title={t('claudeCode.steps.step3.pathTitle')} className="max-w-2xl mb-6" />
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {t('claudeCode.steps.step3.contentLabel')}
          </p>
          <CodeBlock code={codeExamples.claudeCodeSettings()} title="settings.json" className="max-w-2xl" />
          <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 max-w-2xl">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-medium">
              <Trans
                i18nKey="claudeCode.steps.step3.warning"
                components={{ link: <Link to="/docs/models" className="text-amber-700 dark:text-amber-300 underline font-semibold" /> }}
              />
            </p>
          </div>
        </StepSection>

        <StepSection step={4} title={t('claudeCode.steps.step4.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('claudeCode.steps.step4.description')}
          </p>
          <CodeBlock code="claude" title="Terminal" className="max-w-2xl" />
        </StepSection>

        <StepSection step={5} title={t('claudeCode.steps.step5.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            <Trans
              i18nKey="claudeCode.steps.step5.description"
              components={{ code: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs" />, strong: <strong /> }}
            />
          </p>
          <div className="max-w-2xl rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            <img
              src="/images/setting-claude-1.png"
              alt="Claude Code security confirmation - Press 1 to proceed"
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            {t('claudeCode.steps.step5.note')}
          </p>
        </StepSection>

        <StepSection step={6} title={t('claudeCode.steps.step6.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('claudeCode.steps.step6.description')}
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
              <Trans
                i18nKey="claudeCode.tip.text"
                components={{ 
                  strong: <strong />,
                  code: <code className="bg-sky-100 dark:bg-sky-900/30 px-1 rounded" />,
                  link: <a href="https://t.me/simple_route_bot" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline" />
                }}
                values={{ apiKey: API_CONFIG.DEFAULT_API_KEY }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
