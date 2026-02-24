export interface RouteItem {
  path: string;
  label: string;
  color: string;
}

export const menuRoutes: RouteItem[] = [
  { path: '/docs', label: 'Giới thiệu', color: 'bg-slate-500' },
  { path: '/docs/models', label: 'Danh sách Model', color: 'bg-brand' },
  { path: '/docs/api-guide', label: 'Hướng dẫn API', color: 'bg-blue-500' },
];

export const integrationRoutes: RouteItem[] = [
  { path: '/docs/claude-code', label: 'Claude Code', color: 'bg-blue-500' },
  // { path: '/docs/cursor', label: 'Cursor', color: 'bg-pink-500' }, // Tạm ẩn theo yêu cầu
  { path: '/docs/opencode', label: 'OpenCode', color: 'bg-emerald-500' },
  // { path: '/docs/amp', label: 'Amp', color: 'bg-orange-500' }, // Tạm ẩn - cấu hình phức tạp
  { path: '/docs/kilo', label: 'Kilo Code', color: 'bg-red-500' },
  { path: '/docs/roo-code', label: 'Roo Code', color: 'bg-yellow-500' },
  { path: '/docs/cline', label: 'Cline', color: 'bg-indigo-500' },
  // { path: '/docs/zed', label: 'Zed', color: 'bg-cyan-500' }, // Tạm ẩn
];
