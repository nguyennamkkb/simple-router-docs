import { Badge } from '@/components/ui/badge';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { useTranslation } from 'react-i18next';

export function ClinePage() {
  const { t } = useTranslation();

  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/10">
            {t('cline.badge')}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {t('cline.title')}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          {t('cline.description')}
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title={t('cline.steps.step1.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            {t('cline.steps.step1.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title={t('cline.steps.step1.features.title')}
              color="indigo"
              items={[
                t('cline.steps.step1.features.items.0'),
                t('cline.steps.step1.features.items.1'),
                t('cline.steps.step1.features.items.2'),
              ]}
            />
          </div>
        </StepSection>

        <StepSection step={2} title={t('cline.steps.step2.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('cline.steps.step2.description')}
          </p>
        </StepSection>

        <StepSection step={3} title={t('cline.steps.step3.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('cline.steps.step3.description')}
          </p>
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl">
            {t('cline.steps.step3.note')}
          </p>
        </StepSection>
      </div>
    </div>
  );
}
