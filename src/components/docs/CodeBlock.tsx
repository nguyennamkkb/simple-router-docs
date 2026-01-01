import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface CodeTab {
  id: string;
  label: string;
  code: string;
}

interface CodeBlockProps {
  tabs?: CodeTab[];
  code?: string;
  title?: string;
  className?: string;
}

export function CodeBlock({ tabs, code, title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (tabs && tabs.length > 0) {
    return (
      <div className={cn('rounded-xl border border-slate-800 bg-[#0d1117] overflow-hidden shadow-lg', className)}>
        <Tabs defaultValue={tabs[0].id}>
          <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-slate-800">
            <TabsList className="bg-transparent h-auto p-0 gap-4">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="text-[11px] font-bold text-slate-400 data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-sky-500 rounded-none px-2 py-1"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {title && (
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                {title}
              </span>
            )}
          </div>
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="m-0">
              <div className="p-5 font-mono text-sm overflow-x-auto">
                <div className="flex items-start justify-between group">
                  <code className="text-slate-300 whitespace-pre-wrap break-all">{tab.code}</code>
                  <button
                    onClick={() => copyToClipboard(tab.code)}
                    className="p-1.5 hover:bg-white/5 rounded transition-colors opacity-0 group-hover:opacity-100 text-slate-500 flex-shrink-0 ml-4"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  }

  return (
    <div className={cn('rounded-xl border border-slate-800 bg-[#0d1117] overflow-hidden shadow-lg', className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-slate-800">
          <span className="text-[11px] font-bold text-slate-100">{title}</span>
          <button
            onClick={() => copyToClipboard(code || '')}
            className="text-[10px] font-bold text-slate-500 hover:text-slate-100 transition-colors uppercase tracking-widest"
          >
            Copy
          </button>
        </div>
      )}
      <div className="p-5 font-mono text-sm overflow-x-auto">
        <div className="flex items-center justify-between group">
          <code className="text-slate-300 whitespace-pre">{code}</code>
          {!title && (
            <button
              onClick={() => copyToClipboard(code || '')}
              className="p-1.5 hover:bg-white/5 rounded transition-colors opacity-0 group-hover:opacity-100 text-slate-500"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
