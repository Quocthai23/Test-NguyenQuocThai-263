'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, User, Radio, PlusSquare, Moon, Sun } from 'lucide-react';
import { Button } from '../shares/atoms/button';
import { Switch } from '../shares/atoms/switch';
import { useTheme } from 'next-themes';

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: '/', label: 'Trang chủ', icon: Home },
    { href: '/explore', label: 'Khám phá', icon: Compass },
    { href: '/following', label: 'Đã follow', icon: User },
    { href: '/live', label: 'LIVE', icon: Radio },
    { href: '/upload', label: 'Tải lên', icon: PlusSquare },
    { href: '/profile', label: 'Hồ sơ', icon: User },
  ];

  return (
    <aside className="flex bg-background text-app-text border-t border-app-border z-50 w-full md:w-[240px] md:h-screen md:border-t-0 md:border-r md:flex-col md:justify-between">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex w-full justify-around items-center py-md md:flex-col md:justify-start md:gap-xs md:border-b md:border-app-border md:py-md">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Button
                key={item.href}
                asChild
                variant="neutral-ghost"
                className={`!flex !flex-col !items-center !justify-center !gap-base !no-underline !text-xs !h-auto !p-sm !bg-transparent md:!flex-row md:!w-[calc(100%-24px)] md:!mx-md md:!p-md md:!justify-start md:!text-lg md:!gap-md md:!rounded-md ${isActive
                  ? '!text-blue-500 md:!font-bold'
                  : '!text-neutral-secondary hover:!text-neutral-primary hover:!bg-app-surface-muted md:!font-semibold'
                  }`}
              >
                <Link href={item.href}>
                  <Icon className={`w-6 h-6 stroke-2 ${isActive ? 'text-blue-500' : ''}`} />
                  <span className={isActive ? 'text-blue-500' : ''}>{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>

      <div className="hidden md:flex md:flex-col md:p-xl md:gap-lg">
        <div className="flex items-center gap-md text-neutral-secondary">
          <Sun size={20} className="text-neutral-secondary" />
          <Switch
            className="bg-neutral-300"
            checked={mounted ? theme === 'dark' : false}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
          <Moon size={20} className="text-neutral-secondary" />
        </div>
        <p className="text-xs text-neutral-tertiary m-0">© 2026 TikTok Clone</p>
      </div>
    </aside>
  );
}
