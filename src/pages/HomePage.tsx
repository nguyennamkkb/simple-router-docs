import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Sparkles, Shield, Gauge, ChevronRight, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const models = [
  { name: 'Claude Opus 4.5', color: 'text-orange-500' },
  { name: 'Claude Sonnet 4.5', color: 'text-orange-400' },
  { name: 'Gemini 3 Pro', color: 'text-blue-500' },
  { name: 'Gemini 3 Flash', color: 'text-blue-400' },
  { name: 'GPT-OSS 120B', color: 'text-emerald-500' },
];

const integrations = [
  { name: 'Claude Code', color: 'bg-blue-500' },
  { name: 'Cursor', color: 'bg-pink-500' },
  { name: 'OpenCode', color: 'bg-emerald-500' },
  { name: 'Droid', color: 'bg-purple-500' },
  { name: 'Kilo Code', color: 'bg-red-500' },
  { name: 'Roo Code', color: 'bg-yellow-500' },
  { name: 'Cline', color: 'bg-indigo-500' },
];

const features = [
  {
    icon: Zap,
    title: 'Một API cho tất cả',
    description: 'Truy cập Claude, Gemini, GPT qua một endpoint duy nhất. Không cần quản lý nhiều API key.',
  },
  {
    icon: Sparkles,
    title: 'OpenAI Compatible',
    description: 'Tương thích hoàn toàn với OpenAI API. Hoạt động với mọi công cụ hỗ trợ OpenAI.',
  },
  {
    icon: Gauge,
    title: 'Hiệu năng tối ưu',
    description: 'Độ trễ thấp, caching thông minh. Được tối ưu cho AI coding agent.',
  },
  {
    icon: Shield,
    title: 'An toàn & Bảo mật',
    description: 'Dữ liệu của bạn được bảo vệ. Không lưu trữ nội dung conversation.',
  },
];

export function HomePage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/web-logo.png" alt="Simple Router" className="w-8 h-8" />
            <span className="font-bold text-lg">Simple Router</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tài liệu
            </Link>
            <a 
              href="https://t.me/simple_route_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Đăng ký
            </a>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <Sun className={`w-4 h-4 transition-all ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
              <Moon className={`absolute w-4 h-4 transition-all ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
            </Button>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="w-4 h-4" />
              Unified AI Gateway
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground tracking-tight">
              Simple Router
            </h1>

            <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Cổng API hợp nhất cho <span className="text-primary font-semibold">AI Coding Agent</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {models.map((model) => (
                <span 
                  key={model.name}
                  className={`px-3 py-1.5 rounded-full bg-muted text-sm font-medium ${model.color}`}
                >
                  {model.name}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/25">
                <a href="https://t.me/simple_route_bot" target="_blank" rel="noopener noreferrer">
                  Đăng ký sử dụng
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/docs">
                  Xem tài liệu
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Strip */}
      <section className="border-y bg-muted/50 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Tích hợp với các công cụ phổ biến
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {integrations.map((item) => (
              <div 
                key={item.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border"
              >
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tại sao chọn Simple Router?
          </h2>
          <p className="text-lg text-muted-foreground">
            Giải pháp đơn giản cho nhu cầu phức tạp
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-blue-600 p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Đăng ký qua Telegram để nhận API key miễn phí và bắt đầu sử dụng ngay hôm nay.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <a href="https://t.me/simple_route_bot" target="_blank" rel="noopener noreferrer">
                @simple_route_bot
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Simpleverse. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tài liệu
            </Link>
            <a 
              href="https://t.me/simple_route_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
