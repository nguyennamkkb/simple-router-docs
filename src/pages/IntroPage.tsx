import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send, Sparkles, Shield, Gauge, Layers, BookOpen } from 'lucide-react';

const quickLinks = [
  {
    path: '/docs/models',
    title: 'Danh sách Model',
    description: 'Xem tất cả model AI có sẵn',
    icon: Layers,
    color: 'text-brand',
    bgColor: 'bg-brand/10',
  },
  {
    path: '/docs/api-guide',
    title: 'Hướng dẫn API',
    description: 'Bắt đầu với OpenAI-compatible API',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/10',
  },
];

const integrations = [
  {
    path: '/docs/claude-code',
    title: 'Claude Code',
    description: 'CLI của Anthropic cho terminal',
    color: 'bg-blue-500',
  },
  {
    path: '/docs/opencode',
    title: 'OpenCode',
    description: 'Agent AI nguồn mở cho terminal',
    color: 'bg-emerald-500',
  },
  {
    path: '/docs/droid',
    title: 'Droid',
    description: 'Agent coding của Factory',
    color: 'bg-purple-500',
  },
  {
    path: '/docs/kilo',
    title: 'Kilo Code',
    description: 'Extension AI cho VS Code',
    color: 'bg-red-500',
  },
  {
    path: '/docs/roo-code',
    title: 'Roo Code',
    description: 'Agent tự chủ cho VS Code',
    color: 'bg-yellow-500',
  },
  {
    path: '/docs/cline',
    title: 'Cline',
    description: 'Agent lập trình mã nguồn mở',
    color: 'bg-indigo-500',
  },
];

const features = [
  {
    icon: Sparkles,
    title: 'Truy cập Hợp nhất',
    description: 'Một endpoint duy nhất cho Claude, Gemini, GPT và nhiều model khác.',
  },
  {
    icon: Gauge,
    title: 'Hiệu năng Cao',
    description: 'Tối ưu hóa độ trễ và caching thông minh cho agent.',
  },
  {
    icon: Shield,
    title: 'Bảo mật',
    description: 'Dữ liệu của bạn được bảo vệ an toàn.',
  },
];

export function IntroPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <header className="max-w-3xl">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          Giới thiệu
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Simple Router là cổng API hợp nhất cho các AI coding agent. Kết nối Claude Code, OpenCode và nhiều công cụ khác
          với các model mới nhất: <span className="font-semibold text-blue-500">Claude Opus 4.5</span>,{' '}
          <span className="font-semibold text-emerald-500">Gemini 3 Pro</span>.
        </p>
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
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
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
                Đăng ký sử dụng
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Đăng ký qua Telegram để nhận API key miễn phí
              </p>
            </div>
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/25">
              <a href="https://t.me/simple_route_bot" target="_blank" rel="noopener noreferrer">
                @simple_route_bot
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
            Tích hợp
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {integrations.map((item) => (
            <Link key={item.path} to={item.path} className="group">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Simple Router */}
      <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Tại sao chọn Simple Router?
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
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
