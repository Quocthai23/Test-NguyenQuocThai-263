'use client';

import React from 'react';
import { Home, Compass, User, Radio, PlusSquare, Moon, Sun } from 'lucide-react';
import { Button } from '../shares/atoms/button';
import { Switch } from '../shares/atoms/switch';
import { useTheme } from 'next-themes';

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <aside className="flex bg-[var(--color-app-bg)] text-[var(--color-app-text)] border-t border-[var(--color-app-border)] z-50 w-full md:w-[240px] md:h-screen md:border-t-0 md:border-r md:flex-col md:justify-between">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex w-full justify-around items-center py-[var(--spacing-md)] md:flex-col md:justify-start md:gap-[var(--spacing-xs)] md:border-b md:border-[var(--color-app-border)] md:py-[var(--spacing-md)]">
          <Button 
            variant="neutral-ghost" 
            className="!flex !flex-col !items-center !justify-center !gap-[var(--spacing-base)] !text-[var(--color-primary-500)] !no-underline !text-[var(--font-size-xs)] !h-auto !p-[var(--spacing-sm)] !bg-transparent md:!flex-row md:!w-[calc(100%-var(--spacing-xl))] md:!mx-[var(--spacing-md)] md:!p-[var(--spacing-md)] md:!justify-start md:!text-[var(--typography-headings-h3-fontSize)] md:!font-[var(--font-weight-bold)] md:!gap-[var(--spacing-md)] md:!rounded-md"
          >
            <Home className="w-6 h-6 stroke-2" />
            <span>Trang chủ</span>
          </Button>

          <Button 
            variant="neutral-ghost" 
            className="!flex !flex-col !items-center !justify-center !gap-[var(--spacing-base)] !text-[var(--color-text-neutral-secondary)] !no-underline !text-[var(--font-size-xs)] !h-auto !p-[var(--spacing-sm)] !bg-transparent hover:!text-[var(--color-text-neutral-primary)] hover:!bg-[var(--color-app-surface-muted)] md:!flex-row md:!w-[calc(100%-var(--spacing-xl))] md:!mx-[var(--spacing-md)] md:!p-[var(--spacing-md)] md:!justify-start md:!text-[var(--typography-headings-h3-fontSize)] md:!font-[var(--font-weight-semibold)] md:!gap-[var(--spacing-md)] md:!rounded-md"
          >
            <Compass className="w-6 h-6 stroke-2" />
            <span>Khám phá</span>
          </Button>

          <Button 
            variant="neutral-ghost" 
            className="!flex !flex-col !items-center !justify-center !gap-[var(--spacing-base)] !text-[var(--color-text-neutral-secondary)] !no-underline !text-[var(--font-size-xs)] !h-auto !p-[var(--spacing-sm)] !bg-transparent hover:!text-[var(--color-text-neutral-primary)] hover:!bg-[var(--color-app-surface-muted)] md:!flex-row md:!w-[calc(100%-var(--spacing-xl))] md:!mx-[var(--spacing-md)] md:!p-[var(--spacing-md)] md:!justify-start md:!text-[var(--typography-headings-h3-fontSize)] md:!font-[var(--font-weight-semibold)] md:!gap-[var(--spacing-md)] md:!rounded-md"
          >
            <User className="w-6 h-6 stroke-2" />
            <span>Đã follow</span>
          </Button>

          <Button 
            variant="neutral-ghost" 
            className="!flex !flex-col !items-center !justify-center !gap-[var(--spacing-base)] !text-[var(--color-text-neutral-secondary)] !no-underline !text-[var(--font-size-xs)] !h-auto !p-[var(--spacing-sm)] !bg-transparent hover:!text-[var(--color-text-neutral-primary)] hover:!bg-[var(--color-app-surface-muted)] md:!flex-row md:!w-[calc(100%-var(--spacing-xl))] md:!mx-[var(--spacing-md)] md:!p-[var(--spacing-md)] md:!justify-start md:!text-[var(--typography-headings-h3-fontSize)] md:!font-[var(--font-weight-semibold)] md:!gap-[var(--spacing-md)] md:!rounded-md"
          >
            <Radio className="w-6 h-6 stroke-2" />
            <span>LIVE</span>
          </Button>

          <Button 
            variant="neutral-ghost" 
            className="!flex !flex-col !items-center !justify-center !gap-[var(--spacing-base)] !text-[var(--color-text-neutral-secondary)] !no-underline !text-[var(--font-size-xs)] !h-auto !p-[var(--spacing-sm)] !bg-transparent hover:!text-[var(--color-text-neutral-primary)] hover:!bg-[var(--color-app-surface-muted)] md:!flex-row md:!w-[calc(100%-var(--spacing-xl))] md:!mx-[var(--spacing-md)] md:!p-[var(--spacing-md)] md:!justify-start md:!text-[var(--typography-headings-h3-fontSize)] md:!font-[var(--font-weight-semibold)] md:!gap-[var(--spacing-md)] md:!rounded-md"
          >
            <PlusSquare className="w-6 h-6 stroke-2" />
            <span>Tải lên</span>
          </Button>

          <Button 
            variant="neutral-ghost" 
            className="!flex !flex-col !items-center !justify-center !gap-[var(--spacing-base)] !text-[var(--color-text-neutral-secondary)] !no-underline !text-[var(--font-size-xs)] !h-auto !p-[var(--spacing-sm)] !bg-transparent hover:!text-[var(--color-text-neutral-primary)] hover:!bg-[var(--color-app-surface-muted)] md:!flex-row md:!w-[calc(100%-var(--spacing-xl))] md:!mx-[var(--spacing-md)] md:!p-[var(--spacing-md)] md:!justify-start md:!text-[var(--typography-headings-h3-fontSize)] md:!font-[var(--font-weight-semibold)] md:!gap-[var(--spacing-md)] md:!rounded-md"
          >
            <User className="w-6 h-6 stroke-2" />
            <span>Hồ sơ</span>
          </Button>
        </nav>
        
        <div className="hidden md:flex md:flex-col md:p-[var(--spacing-xl)] md:pb-[var(--spacing-lg)] md:border-b md:border-[var(--color-app-border)] md:gap-[var(--spacing-md)]">
          <p className="text-[var(--typography-body-medium-fontSize)] text-[var(--color-text-neutral-secondary)] m-0 leading-[var(--typography-body-medium-lineHeight)]">Đăng nhập để follow tác giả, thích video và xem bình luận.</p>
          <Button variant="primary-outline" className="w-full !h-12 text-[var(--typography-headings-h4-fontSize)] !font-[var(--font-weight-bold)]">
            Đăng nhập
          </Button>
        </div>
      </div>

      <div className="hidden md:flex md:flex-col md:p-[var(--spacing-xl)] md:gap-[var(--spacing-lg)]">
        <div className="flex items-center gap-[var(--spacing-md)] text-[var(--color-text-neutral-secondary)]">
          <Sun size={20} className="text-[var(--color-text-neutral-secondary)]" />
          <Switch 
            checked={theme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
          <Moon size={20} className="text-[var(--color-text-neutral-secondary)]" />
        </div>
        <p className="text-[var(--font-size-xs)] text-[var(--color-text-neutral-tertiary)] m-0">© 2026 TikTok Clone</p>
      </div>
    </aside>
  );
}
