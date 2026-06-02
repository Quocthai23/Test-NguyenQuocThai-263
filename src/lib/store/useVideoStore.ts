import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  name: string;
  avatar: string;
}

interface VideoStore {
  likedVideos: Record<string, boolean>;
  toggleLike: (videoId: string) => void;
  isLiked: (videoId: string) => boolean;
  isLoggedIn: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
  isCommentPanelOpen: boolean;
  setCommentPanelOpen: (isOpen: boolean) => void;
}

export const useVideoStore = create<VideoStore>()(
  persist(
    (set, get) => ({
      likedVideos: {},
      toggleLike: (videoId: string) => {
        set((state) => ({
          likedVideos: {
            ...state.likedVideos,
            [videoId]: !state.likedVideos[videoId],
          },
        }));
      },
      isLiked: (videoId: string) => !!get().likedVideos[videoId],
      isLoggedIn: false,
      user: null,
      login: () => set({ isLoggedIn: true, user: { name: 'Test User', avatar: 'https://i.pravatar.cc/150?u=test' } }),
      logout: () => set({ isLoggedIn: false, user: null }),
      isCommentPanelOpen: false,
      setCommentPanelOpen: (isOpen) => set({ isCommentPanelOpen: isOpen }),
    }),
    {
      name: 'video-storage',
      partialize: (state) => ({ likedVideos: state.likedVideos, isLoggedIn: state.isLoggedIn, user: state.user }), // Don't persist isCommentPanelOpen
    }
  )
);
