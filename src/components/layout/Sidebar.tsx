import React from 'react';
import { Home, Compass, User } from 'lucide-react';
import { Button } from '../shares/atoms/button';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <Button variant="neutral-ghost" className={`${styles.navItem} ${styles.active}`}>
          <Home className={styles.icon} />
          <span>Trang chủ</span>
        </Button>
        <Button variant="neutral-ghost" className={styles.navItem}>
          <Compass className={styles.icon} />
          <span>Khám phá</span>
        </Button>
        <Button variant="neutral-ghost" className={styles.navItem}>
          <User className={styles.icon} />
          <span>Hồ sơ</span>
        </Button>
      </nav>
    </aside>
  );
}
