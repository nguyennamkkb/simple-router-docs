import { Badge } from '@/components/ui/badge';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { useTranslation } from 'react-i18next';

export function OpenClawPage() {
  const { t } = useTranslation();

  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-purple-500 bg-purple-50 dark:bg-purple-900/10">
            {t('openclaw.badge')}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {t('openclaw.title')}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          {t('openclaw.description')}
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title={t('openclaw.steps.step1.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            {t('openclaw.steps.step1.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title={t('openclaw.steps.step1.features.title')}
              color="purple"
              items={[
                t('openclaw.steps.step1.features.items.0'),
                t('openclaw.steps.step1.features.items.1'),
                t('openclaw.steps.step1.features.items.2'),
              ]}
            />
          </div>
        </StepSection>

        <StepSection step={2} title={t('openclaw.steps.step2.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('openclaw.steps.step2.description')}
          </p>
          <CodeBlock
            code={`# macOS / Linux / WSL2
curl -fsSL --proto '=https' --tlsv1.2 https://openclaw.ai/install.sh | bash

# Windows (PowerShell)
irm openclaw.ai/install.ps1 | iex`}
          />
          <p className="text-sm text-muted-foreground mt-4">
            {t('openclaw.steps.step2.note')}
          </p>
        </StepSection>

        <StepSection step={3} title={t('openclaw.steps.step3.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('openclaw.steps.step3.description')}
          </p>
          <CodeBlock
            code={`{
  "agent": {
    "model": {
      "primary": "openai/gpt-5.4"
    }
  },
  "identity": {
    "name": "MyAgent",
    "emoji": "🤖"
  }
}`}
          />
          <p className="text-sm text-muted-foreground mt-4">
            {t('openclaw.steps.step3.note')}
          </p>
        </StepSection>

        <StepSection step={4} title={t('openclaw.steps.step4.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('openclaw.steps.step4.description')}
          </p>
          <CodeBlock
            code={`# Start the gateway
openclaw gateway --port 18789

# Or use with Simple Router
openclaw config set agent.model.primary "gpt-5.4"`}
          />
        </StepSection>

        <StepSection step={5} title={t('openclaw.steps.step5.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('openclaw.steps.step5.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title={t('openclaw.steps.step5.features.title')}
              color="purple"
              items={[
                t('openclaw.steps.step5.features.items.0'),
                t('openclaw.steps.step5.features.items.1'),
                t('openclaw.steps.step5.features.items.2'),
                t('openclaw.steps.step5.features.items.3'),
              ]}
            />
          </div>
        </StepSection>
      </div>
    </div>
  );
}
