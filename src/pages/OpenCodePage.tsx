import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { Link } from 'react-router-dom';
import { codeExamples } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/10">
            {t('opencode.badge')}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {t('opencode.title')}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          {t('opencode.description')}
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title={t('opencode.steps.step1.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            {t('opencode.steps.step1.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title={t('opencode.steps.step1.features.title')}
              color="emerald"
              items={[
                t('opencode.steps.step1.features.items.0'),
                t('opencode.steps.step1.features.items.1'),
                t('opencode.steps.step1.features.items.2'),
              ]}
            />
          </div>
        </StepSection>

        <StepSection step={2} title={t('opencode.steps.step2.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            <Trans
              i18nKey="opencode.steps.step2.description"
              components={{ link: <a href="https://opencode.ai/download" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline" /> }}
            />
          </p>
          <CodeBlock tabs={installTabs} className="max-w-2xl" />
        </StepSection>

        <StepSection step={3} title={t('opencode.steps.step3.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            <Trans
              i18nKey="opencode.steps.step3.description"
              components={{ link: <a href="https://opencode.ai/docs/models/#configure-models" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline" /> }}
            />
          </p>
          <CodeBlock tabs={configPathTabs} className="max-w-2xl mb-6" />
          <CodeBlock code={configJson} title="opencode.json" className="max-w-2xl" />
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl">
            {t('opencode.steps.step3.note')}
          </p>
          <div className="mt-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 max-w-2xl">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-medium">
              <Trans
                i18nKey="opencode.steps.step3.warning"
                components={{ link: <Link to="/docs/models" className="text-amber-700 dark:text-amber-300 underline font-semibold" /> }}
              />
            </p>
          </div>
        </StepSection>
      </div>
    </div>
  );
}
