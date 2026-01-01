import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface StepSectionProps {
  step: number;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function StepSection({ step, title, children, className }: StepSectionProps) {
  return (
    <section className={className}>
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold bg-muted text-muted-foreground border">
          {step}
        </span>
        <h2 className="text-lg font-bold text-foreground m-0">{title}</h2>
      </div>
      {children}
    </section>
  );
}

interface FeatureBoxProps {
  title: string;
  items: string[];
  color: 'brand' | 'emerald' | 'orange' | 'indigo' | 'red' | 'yellow' | 'cyan' | 'purple';
  className?: string;
}

const colorMap = {
  brand: 'bg-primary/10 border-primary/20 text-primary',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  orange: 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400',
  indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400',
  red: 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400',
  yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400',
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400',
};

const dotColorMap = {
  brand: 'bg-primary',
  emerald: 'bg-emerald-500',
  orange: 'bg-orange-500',
  indigo: 'bg-indigo-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  cyan: 'bg-cyan-500',
  purple: 'bg-purple-500',
};

export function FeatureBox({ title, items, color, className }: FeatureBoxProps) {
  return (
    <div className={cn('p-4 rounded-lg border', colorMap[color], className)}>
      <h4 className="text-xs font-bold mb-2 uppercase tracking-wide">{title}</h4>
      <ul className="text-xs space-y-2 list-none p-0 m-0">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={cn('w-1 h-1 rounded-full', dotColorMap[color])} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ConfigTableProps {
  rows: { field: string; value: string; isCode?: boolean }[];
}

export function ConfigTable({ rows }: ConfigTableProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-1/3 font-semibold">Trường cài đặt</TableHead>
            <TableHead className="font-semibold">Giá trị cần nhập</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.field}</TableCell>
              <TableCell className={cn(row.isCode && 'font-mono text-emerald-600 dark:text-emerald-400 break-all')}>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
