import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send, Sparkles, Shield, Gauge, Layers, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const quickLinks = [
  {
    path: '/docs/models',
    titleKey: 'intro.quickLinks.models.title',
    descriptionKey: 'intro.quickLinks.models.description',
    icon: Layers,
    color: 'text-brand',
    bgColor: 'bg-brand/10',
  },
  {
    path: '/docs/api-guide',
    titleKey: 'intro.quickLinks.apiGuide.title',
    descriptionKey: 'intro.quickLinks.apiGuide.description',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/10',
  },
];

const integrations = [
  {
    path: '/docs/claude-code',
    titleKey: 'intro.integrations.claudeCode.title',
    descriptionKey: 'intro.integrations.claudeCode.description',
    color: 'bg-blue-500',
  },
  {
    path: '/docs/opencode',
    titleKey: 'intro.integrations.opencode.title',
    descriptionKey: 'intro.integrations.opencode.description',
    color: 'bg-emerald-500',
  },
  {
    path: '/docs/kilo',
    titleKey: 'intro.integrations.kilo.title',
    descriptionKey: 'intro.integrations.kilo.description',
    color: 'bg-red-500',
  },
  {
    path: '/docs/roo-code',
    titleKey: 'intro.integrations.rooCode.title',
    descriptionKey: 'intro.integrations.rooCode.description',
    color: 'bg-yellow-500',
  },
  {
    path: '/docs/cline',
    titleKey: 'intro.integrations.cline.title',
    descriptionKey: 'intro.integrations.cline.description',
    color: 'bg-indigo-500',
  },
];

const features = [
  {
    icon: Sparkles,
    titleKey: 'intro.why.unified.title',
    descriptionKey: 'intro.why.unified.description',
  },
  {
    icon: Gauge,
    titleKey: 'intro.why.performance.title',
    descriptionKey: 'intro.why.performance.description',
  },
  {
    icon: Shield,
    titleKey: 'intro.why.security.title',
    descriptionKey: 'intro.why.security.description',
  },
];

export function IntroPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      {/* Hero */}
      <header className="max-w-3xl">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          {t('intro.title')}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('intro.description') }} />
      </header>

      {/* Quick Links */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((item) => (
            <Link key={item.path} to={item.path} className="group">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg ${item.bgColor} ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t(item.descriptionKey)}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Telegram Bot Promo */}
      <section>
        <div className="p-5 rounded-xl border-2 border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center flex-shrink-0">
              <Send className="w-6 h-6" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {t('intro.telegram.title')}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t('intro.telegram.description')}
              </p>
            </div>
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/25">
              <a href="https://t.me/simple_route_bot" target="_blank" rel="noopener noreferrer">
                {t('intro.telegram.button')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {t('intro.integrations.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {integrations.map((item) => (
            <Link key={item.path} to={item.path} className="group">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t(item.titleKey)}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {t(item.descriptionKey)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Simple Router */}
      <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          {t('intro.why.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t(feature.titleKey)}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
