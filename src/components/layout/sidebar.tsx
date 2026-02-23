import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  FolderKanban,
  FileCheck,
  LayoutTemplate,
  Download,
  Bell,
  Settings,
  BarChart3,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/dashboard/projects', icon: FolderKanban, label: 'Projects' },
  { to: '/dashboard/decisions', icon: FileCheck, label: 'Decisions' },
  { to: '/dashboard/templates', icon: LayoutTemplate, label: 'Templates' },
  { to: '/dashboard/exports', icon: Download, label: 'Exports' },
  { to: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
  { to: '/dashboard/analytics', icon: BarChart3, label: 'Analytics' },
]

const bottomItems = [
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
  { to: '/help', icon: HelpCircle, label: 'Help' },
]

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
  isMobile?: boolean
  onMobileClose?: () => void
  desktopOnly?: boolean
}

export function Sidebar({ isCollapsed, onToggle, isMobile, onMobileClose, desktopOnly }: SidebarProps) {
  const effectiveCollapsed = isMobile ? false : isCollapsed

  return (
    <aside
      className={cn(
        'flex h-screen flex-col border-r border-border bg-[rgb(245,246,250)]',
        'transition-all duration-300 ease-in-out',
        !isMobile && 'fixed left-0 top-0 z-40',
        desktopOnly && 'hidden lg:flex',
        isMobile ? 'w-64' : effectiveCollapsed ? 'w-[72px]' : 'w-64'
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        {(!effectiveCollapsed || isMobile) && (
          <NavLink to="/dashboard" className="flex items-center gap-2" onClick={onMobileClose}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <FileCheck className="h-5 w-5" />
            </div>
            <span className="font-semibold text-foreground">Archject</span>
          </NavLink>
        )}
        {isMobile && onMobileClose ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={onMobileClose}
            className="ml-auto"
            aria-label="Close menu"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="ml-auto"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </Button>
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                'hover:bg-muted hover:text-foreground',
                isActive
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted-foreground'
              )
            }
          >
            <item.icon className="h-5 w-5 shrink-0" aria-hidden />
            {(!effectiveCollapsed || isMobile) && <span>{item.label}</span>}
          </NavLink>
        ))}

        <div className="mt-auto border-t border-border pt-3">
          {bottomItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                  'hover:bg-muted hover:text-foreground',
                  isActive
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted-foreground'
                )
              }
            >
              <item.icon className="h-5 w-5 shrink-0" aria-hidden />
              {(!effectiveCollapsed || isMobile) && <span>{item.label}</span>}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  )
}
