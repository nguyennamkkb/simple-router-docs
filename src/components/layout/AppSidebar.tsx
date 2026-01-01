import { NavLink, useLocation } from 'react-router-dom';
import { Home, ExternalLink, Layers, Code, Info } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { integrationRoutes } from '@/data/routes';

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <NavLink to="/" className="flex items-center gap-3 group">
          <img 
            src="/images/web-logo.png" 
            alt="Simple Router" 
            className="w-9 h-9"
          />
          <span className="font-bold text-foreground text-lg tracking-tight">
            Simple Router
          </span>
        </NavLink>
      </SidebarHeader>

      <SidebarContent className="scrollbar-thin">
        {/* Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === '/docs'}>
                  <NavLink to="/docs" className="transition-all duration-200">
                    <Info className="w-4 h-4" />
                    <span>Giới thiệu</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === '/docs/models'}>
                  <NavLink to="/docs/models" className="transition-all duration-200">
                    <Layers className="w-4 h-4" />
                    <span>Danh sách Model</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === '/docs/api-guide'}>
                  <NavLink to="/docs/api-guide" className="transition-all duration-200">
                    <Code className="w-4 h-4" />
                    <span>Hướng dẫn API</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Integrations */}
        <SidebarGroup>
          <SidebarGroupLabel>Tích hợp</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {integrationRoutes.map((route) => (
                <SidebarMenuItem key={route.path}>
                  <SidebarMenuButton asChild isActive={location.pathname === route.path}>
                    <NavLink to={route.path} className="transition-all duration-200">
                      <div className={`w-2 h-2 rounded-full ${route.color} transition-transform duration-200 ${location.pathname === route.path ? 'scale-125' : ''}`} />
                      <span>{route.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Links */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Liên kết</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/" className="transition-all duration-200">
                    <Home className="w-4 h-4" />
                    <span>Trang chủ</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a 
                    href="https://t.me/simple_route_bot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Telegram Bot</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground">
          © 2025 Simpleverse
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
