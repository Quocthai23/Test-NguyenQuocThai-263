import React from 'react';
import Sidebar from './Sidebar';
import styles from './MainLayout.module.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      {/* PC: Sidebar is on the left. Mobile: visually it will be moved to bottom using CSS order or flex-direction column */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className={styles.main}>
        {children}
      </main>
      <div className="block md:hidden">
         <Sidebar />
      </div>
    </div>
  );
}
