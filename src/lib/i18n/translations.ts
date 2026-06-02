export type Language = 'vi' | 'en' | 'ko' | 'ja' | 'zh';

export const LANGUAGES: { code: Language; name: string }[] = [
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'en', name: 'English' },
  { code: 'ko', name: '한국어 (Korean)' },
  { code: 'ja', name: '日本語 (Japanese)' },
  { code: 'zh', name: '中文 (Chinese)' },
];

export const translations = {
  vi: {
    sidebar: {
      home: 'Trang chủ',
      explore: 'Khám phá',
      following: 'Đã follow',
      live: 'LIVE',
      upload: 'Tải lên',
      profile: 'Hồ sơ',
      copyright: '© 2026 TikTok Clone'
    }
  },
  en: {
    sidebar: {
      home: 'Home',
      explore: 'Explore',
      following: 'Following',
      live: 'LIVE',
      upload: 'Upload',
      profile: 'Profile',
      copyright: '© 2026 TikTok Clone'
    }
  },
  ko: {
    sidebar: {
      home: '홈',
      explore: '탐색',
      following: '팔로잉',
      live: '라이브',
      upload: '업로드',
      profile: '프로필',
      copyright: '© 2026 TikTok Clone'
    }
  },
  ja: {
    sidebar: {
      home: 'ホーム',
      explore: '見つける',
      following: 'フォロー中',
      live: 'LIVE',
      upload: 'アップロード',
      profile: 'プロフィール',
      copyright: '© 2026 TikTok Clone'
    }
  },
  zh: {
    sidebar: {
      home: '首页',
      explore: '探索',
      following: '关注',
      live: '直播',
      upload: '上传',
      profile: '个人主页',
      copyright: '© 2026 TikTok Clone'
    }
  }
};
