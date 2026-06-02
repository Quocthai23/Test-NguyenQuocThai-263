import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <button className={`${styles.navItem} ${styles.active}`}>
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M12 3L4 9v12h5v-7h6v7h5V9z" />
          </svg>
          Trang chủ
        </button>
        <button className={styles.navItem}>
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          Khám phá
        </button>
        <button className={styles.navItem}>
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Hồ sơ
        </button>
      </nav>
    </aside>
  );
}
