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
            code={`# Install OpenClaw (Node.js 22+ required)
npm install -g openclaw@latest

# or use pnpm
pnpm add -g openclaw@latest

# Run onboarding wizard (recommended)
openclaw onboard --install-daemon`}
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
            code={`# Configure using CLI
openclaw config set agent.model.provider "openai"
openclaw config set agent.model.primary "c-gpt-5.4"

# Or edit config file: ~/.openclaw/openclaw.json`}
          />
          <div className="mt-6 p-4 rounded-lg border bg-muted/50">
            <h4 className="font-semibold mb-3">Simple Router Config:</h4>
            <CodeBlock
              code={`{
  "agent": {
    "model": {
      "provider": "openai",
      "primary": "c-gpt-5.4",
      "openai": {
        "apiKey": "YOUR_API_KEY",
        "baseURL": "http://127.0.0.1:8317/v1"
      }
    }
  }
}`}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {t('openclaw.steps.step3.note')}
          </p>
        </StepSection>

        <StepSection step={4} title={t('openclaw.steps.step4.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('openclaw.steps.step4.description')}
          </p>
          <CodeBlock
            code={`# Start the gateway (default port: 18789)
openclaw gateway --port 18789 --verbose

# Send a message
openclaw message send --to +1234567890 --message "Hello"

# Talk to the assistant
openclaw agent --message "What can you do?" --thinking high`}
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
