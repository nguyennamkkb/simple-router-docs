export interface RouteItem {
  path: string;
  label: string;
  color: string;
}

export const menuRoutes: RouteItem[] = [
  { path: '/', label: 'Trang chủ', color: '' },
  { path: '/models', label: 'Danh sách Model', color: 'bg-brand' },
];

export const integrationRoutes: RouteItem[] = [
  { path: '/claude-code', label: 'Claude Code', color: 'bg-blue-500' },
  { path: '/cursor', label: 'Cursor', color: 'bg-pink-500' },
  { path: '/opencode', label: 'OpenCode', color: 'bg-emerald-500' },
  { path: '/droid', label: 'Droid', color: 'bg-purple-500' },
  // { path: '/amp', label: 'Amp', color: 'bg-orange-500' }, // Tạm ẩn - cấu hình phức tạp
  { path: '/kilo', label: 'Kilo Code', color: 'bg-red-500' },
  { path: '/roo-code', label: 'Roo Code', color: 'bg-yellow-500' },
  { path: '/cline', label: 'Cline', color: 'bg-indigo-500' },
  // { path: '/zed', label: 'Zed', color: 'bg-cyan-500' }, // Tạm ẩn
];
