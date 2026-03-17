import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Sparkles, Shield, Gauge, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

const models = [
  { name: 'GPT 5.4', color: 'text-green-500' },
  { name: 'GPT 5.3 Codex', color: 'text-green-400' },
  { name: 'GPT 5.2', color: 'text-green-500' },
  { name: 'Qwen 3.5 Plus', color: 'text-orange-500' },
  { name: 'Qwen3 Coder', color: 'text-orange-400' },
  { name: 'Qwen3 Vision', color: 'text-orange-400' },
];

const integrations = [
  { name: 'Claude Code', color: 'bg-blue-500' },
  { name: 'OpenCode', color: 'bg-emerald-500' },
  { name: 'Kilo Code', color: 'bg-red-500' },
  { name: 'Roo Code', color: 'bg-yellow-500' },
  { name: 'Cline', color: 'bg-indigo-500' },
];

const features = [
  {
    icon: Zap,
    titleKey: 'features.unified.title',
    descriptionKey: 'features.unified.description',
  },
  {
    icon: Sparkles,
    titleKey: 'features.compatible.title',
    descriptionKey: 'features.compatible.description',
  },
  {
    icon: Gauge,
    titleKey: 'features.performance.title',
    descriptionKey: 'features.performance.description',
  },
  {
    icon: Shield,
    titleKey: 'features.security.title',
    descriptionKey: 'features.security.description',
  },
];

const packages = [
  {
    name: 'Gói C',
    nameKey: 'packages.c.name',
    icon: Gauge,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    features: [
      { textKey: 'packages.c.features.0', highlightKey: 'packages.c.highlights.0', suffixKey: 'packages.c.features.1' },
      { textKey: 'packages.c.features.2', highlightKey: 'packages.c.highlights.1' },
      { textKey: 'packages.c.features.3' },
    ],
  },
  {
    name: 'Gói Q',
    nameKey: 'packages.q.name',
    icon: Shield,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    features: [
      { textKey: 'packages.q.features.0', highlightKey: 'packages.q.highlights.0' },
      { textKey: 'packages.q.features.1' },
      { textKey: 'packages.q.features.2' },
    ],
  },
];

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/web-logo.png" alt="Simple Router" className="w-8 h-8" />
            <span className="font-bold text-lg">{t('app.name')}</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.docs')}
            </Link>
            <a
              href="https://t.me/simple_route_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.register')}
            </a>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center space-y-8">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                {t('hero.badge1')}
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('hero.badge2')}
              </Badge>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground tracking-tight">
              {t('hero.title')}
            </h1>

            <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }} />

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {models.map((model) => (
                <Badge key={model.name} variant="outline" className={model.color}>
                  {model.name}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/25">
                <a href="https://t.me/simple_route_bot" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/docs">
                  {t('hero.viewDocs')}
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Plans Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('packages.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('packages.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.nameKey} className="hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${pkg.bgColor} ${pkg.color} flex items-center justify-center`}>
                    <pkg.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className={pkg.color}>{t(pkg.nameKey)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                      <span>
                        {t(feature.textKey)}
                        {feature.highlightKey && <strong className="text-foreground">{t(feature.highlightKey)}</strong>}
                        {feature.suffixKey && t(feature.suffixKey)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://t.me/simple_route_bot" target="_blank" rel="noopener noreferrer">
                    {t('packages.registerButton')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Integrations Strip */}
      <section className="border-y bg-muted/50 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6">
            {t('integrations.title')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {integrations.map((item) => (
              <Badge key={item.name} variant="outline" className="px-4 py-2">
                <div className={`w-2 h-2 rounded-full ${item.color} mr-2`} />
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle>{t(feature.titleKey)}</CardTitle>
                <CardDescription>{t(feature.descriptionKey)}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <Card className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 border-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <CardHeader className="relative text-center space-y-4 py-12">
            <CardTitle className="text-3xl sm:text-4xl text-white">
              {t('cta.title')}
            </CardTitle>
            <CardDescription className="text-lg text-white/80 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </CardDescription>
            <div className="pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <a href="https://t.me/simple_route_bot" target="_blank" rel="noopener noreferrer">
                  {t('cta.button')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.docs')}
            </Link>
            <a
              href="https://t.me/simple_route_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.telegram')}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
