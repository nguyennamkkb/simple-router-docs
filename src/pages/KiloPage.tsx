import { Badge } from '@/components/ui/badge';
import { StepSection, FeatureBox } from '@/components/docs/StepSection';
import { useTranslation } from 'react-i18next';

export function KiloPage() {
  const { t } = useTranslation();

  return (
    <div>
      <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-red-500 bg-red-50 dark:bg-red-900/10">
            {t('kilo.badge')}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {t('kilo.title')}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          {t('kilo.description')}
        </p>
      </header>

      <div className="space-y-12">
        <StepSection step={1} title={t('kilo.steps.step1.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            {t('kilo.steps.step1.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureBox
              title={t('kilo.steps.step1.features.title')}
              color="red"
              items={[
                t('kilo.steps.step1.features.items.0'),
                t('kilo.steps.step1.features.items.1'),
                t('kilo.steps.step1.features.items.2'),
              ]}
            />
          </div>
        </StepSection>

        <StepSection step={2} title={t('kilo.steps.step2.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('kilo.steps.step2.description')}
          </p>
        </StepSection>

        <StepSection step={3} title={t('kilo.steps.step3.title')}>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t('kilo.steps.step3.description')}
          </p>
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl">
            {t('kilo.steps.step3.note')}
          </p>
        </StepSection>
      </div>
    </div>
  );
}
