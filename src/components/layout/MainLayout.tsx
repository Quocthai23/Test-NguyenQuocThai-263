import React from 'react';
import Sidebar from './Sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-app-bg md:flex-row">
      {/* PC: Sidebar is on the left. Mobile: visually it will be moved to bottom using CSS order or flex-direction column */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-hidden relative">
        {children}
      </main>
      <div className="block md:hidden">
         <Sidebar />
      </div>
    </div>
  );
}
