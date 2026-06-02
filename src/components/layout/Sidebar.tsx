'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, User, Radio, PlusSquare, Moon, Sun, Languages, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../shares/atoms/button';
import { Switch } from '../shares/atoms/switch';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from '../shares/atoms/dialog';
import { useTheme } from 'next-themes';
import { useLanguageStore } from '../../lib/store/useLanguageStore';
import { LANGUAGES } from '../../lib/i18n/translations';

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguageStore();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: '/', label: t('sidebar.home'), icon: Home },
    { href: '/explore', label: t('sidebar.explore'), icon: Compass },
    { href: '/following', label: t('sidebar.following'), icon: User },
    { href: '/live', label: t('sidebar.live'), icon: Radio },
    { href: '/upload', label: t('sidebar.upload'), icon: PlusSquare },
    { href: '/profile', label: t('sidebar.profile'), icon: User },
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
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex items-center gap-md text-neutral-secondary cursor-pointer hover:text-neutral-primary transition-colors">
              <Languages size={20} />
              <span className="text-sm font-semibold">{mounted ? LANGUAGES.find(l => l.code === language)?.name : 'Language'}</span>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[360px] !p-0 overflow-hidden">
            <DialogHeader className="p-6 pb-2">
              <DialogTitle className="text-xl">Ngôn ngữ (Language)</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col py-2 max-h-[60vh] overflow-y-auto no-scrollbar">
              {LANGUAGES.map((lang) => (
                <DialogClose asChild key={lang.code}>
                  <div
                    className={cn(
                      "px-6 py-3 cursor-pointer text-sm font-medium transition-colors flex items-center justify-between",
                      language === lang.code 
                        ? "text-blue-500" 
                        : "text-app-text hover:bg-app-surface-muted"
                    )}
                    onClick={() => setLanguage(lang.code)}
                  >
                    <span>{lang.name}</span>
                    {language === lang.code && <Check size={18} className="text-blue-500" />}
                  </div>
                </DialogClose>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex items-center gap-md text-neutral-secondary">
          <Sun size={20} className={`transition-colors ${mounted && theme !== 'dark' ? 'text-app-text' : ''}`} />
          <Switch
            className="bg-neutral-300"
            checked={mounted ? theme === 'dark' : false}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
          <Moon size={20} className={`transition-colors ${mounted && theme === 'dark' ? 'text-app-text' : ''}`} />
        </div>
        <p className="text-xs text-neutral-tertiary m-0">{t('sidebar.copyright')}</p>
      </div>
    </aside>
  );
}
