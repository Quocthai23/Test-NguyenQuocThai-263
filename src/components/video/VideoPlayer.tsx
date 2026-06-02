'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Play, Bookmark, User, X, Send } from 'lucide-react';
import { Button } from '../shares/atoms/button';
import { Input } from '../shares/atoms/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../shares/atoms/dialog';
import { VideoData } from '../../data/mockVideos';
import { mockComments } from '../../data/mockComments';
import { toast } from 'sonner';
import AppCommentPanel from './AppCommentPanel';
import WebCommentPanel from './WebCommentPanel';
import { useVideoStore } from '../../lib/store/useVideoStore';

interface VideoPlayerProps {
  video: VideoData;
  isActive: boolean;
}

export default function VideoPlayer({ video, isActive }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleLike = useVideoStore((state) => state.toggleLike);
  const isGlobalLiked = useVideoStore((state) => state.isLiked(video.id));
  const isLoggedIn = useVideoStore((state) => state.isLoggedIn);
  const user = useVideoStore((state) => state.user);
  const login = useVideoStore((state) => state.login);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const showComments = useVideoStore((state) => state.isCommentPanelOpen);
  const setCommentPanelOpen = useVideoStore((state) => state.setCommentPanelOpen);
  const setShowComments = setCommentPanelOpen;

  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({});
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const comments = mockComments[video.id] || [];

  const isLikedRender = mounted ? isGlobalLiked : false;
  const likesCount = isLikedRender ? video.likesCount + 1 : video.likesCount;

  const wasActiveRef = useRef(isActive);

  useEffect(() => {
    if (isActive) {
      // Don't auto-play if comments are open
      if (!showComments) {
        videoRef.current?.play().catch(() => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
      
      // Only reset global state if this video WAS active and just became INACTIVE
      // This prevents inactive videos from constantly closing the comments when mounted
      if (wasActiveRef.current) {
        setCommentPanelOpen(false); 
        setShowLoginDialog(false);  
      }
      
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
    
    wasActiveRef.current = isActive;
  }, [isActive, showComments, setCommentPanelOpen, setShowLoginDialog]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleLike = () => {
    toggleLike(video.id);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Đã sao chép liên kết thành công!');
    } catch (error) {
      toast.error('Không thể sao chép liên kết.');
    }
  };

  const handleCommentClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!isLoggedIn) {
      setShowLoginDialog(true);
    } else {
      setShowComments(true);
      setCommentPanelOpen(true);
    }
  };

  const handleLoginTest = () => {
    login();
    setShowLoginDialog(false);
    toast.success('Đăng nhập thành công!');
    setShowComments(true);
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
    if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
    return count.toString();
  };

  return (
    <div className="w-full h-full snap-start relative bg-neutral-1000 flex justify-center items-center overflow-hidden">
      <div className="w-full h-full flex flex-row items-center justify-center transition-all duration-300 md:p-4">

        {/* Video Container */}
        <div
          ref={setContainerEl}
          className={`
            w-full h-full relative z-10
            md:h-full md:w-auto md:aspect-[9/16] md:rounded-xl md:overflow-hidden md:shadow-[0_4px_20px_rgba(0,0,0,0.5)] md:bg-neutral-900 md:shrink transition-all duration-300 ease-out
          `}
        >
          <video
            ref={videoRef}
            src={video.videoUrl}
            className="w-full h-full object-cover cursor-pointer"
            loop
            playsInline
            onClick={togglePlayPause}
          />

          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-black/40 rounded-full flex justify-center items-center text-white pointer-events-none transition-all duration-300 ${isActive && !isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
            <Play className="ml-1.5" size={36} fill="currentColor" />
          </div>

          {/* Video Overlays */}
          <div className={`absolute inset-0 p-lg pb-xl flex justify-between items-end pointer-events-none bg-gradient-to-t from-black/60 to-transparent from-0% to-30% transition-opacity duration-300 ${showComments ? 'md:opacity-100 opacity-0' : 'opacity-100'}`}>
            <div className="flex-1 text-white pr-xl pointer-events-auto max-w-[80%]">
              <h3 className="text-lg font-bold leading-7 m-0 mb-xs [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">{video.authorName}</h3>
              <p className="text-base leading-6 m-0 [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">{video.description}</p>
            </div>

            {/* Mobile Actions: only visible on small screens */}
            <div className="flex md:hidden flex-col gap-xs pointer-events-auto items-center mb-md">
              <div className="flex flex-col items-center gap-xs">
                <div className="relative w-12 h-12 mb-md">
                  <div className="w-full h-full rounded-full border border-white bg-neutral-400 flex justify-center items-center overflow-hidden">
                    <User size={24} color="#fff" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-neutral-100 text-neutral-900 rounded-full flex justify-center items-center text-xs font-bold cursor-pointer border-2 border-white">+</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-xs">
                <Button
                  variant={isLikedRender ? "red-ghost" : "white-ghost"}
                  className={`!w-12 !h-12 !rounded-full !bg-transparent !flex !justify-center !items-center !p-0 transition-transform duration-200 active:scale-90 !shadow-none ${isLikedRender ? 'animate-[pop_0.3s_cubic-bezier(0.175,0.885,0.32,1.275)]' : ''}`}
                  onClick={handleLike}
                  title="Thích"
                >
                  <Heart size={32} fill={isLikedRender ? "currentColor" : "none"} strokeWidth={isLikedRender ? 0 : 2} className={`[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.8))] ${isLikedRender ? 'text-red-500' : 'text-white'}`} />
                </Button>
                <span className="text-xs font-semibold text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">{formatCount(likesCount)}</span>
              </div>

              <div className="flex flex-col items-center gap-xs">
                <Button onClick={handleCommentClick} variant="white-ghost" className="!w-12 !h-12 !rounded-full !bg-transparent !flex !justify-center !items-center !p-0 transition-transform duration-200 active:scale-90 !shadow-none" title="Bình luận">
                  <MessageCircle size={32} strokeWidth={2} className="[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.8))] text-white" />
                </Button>
                <span className="text-xs font-semibold text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">{comments.length}</span>
              </div>

              <div className="flex flex-col items-center gap-xs">
                <Button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  variant="white-ghost"
                  className="!w-12 !h-12 !rounded-full !bg-transparent !flex !justify-center !items-center !p-0 transition-transform duration-200 active:scale-90 !shadow-none"
                  title="Lưu"
                >
                  <Bookmark
                    size={32}
                    strokeWidth={2}
                    fill={isBookmarked ? "currentColor" : "none"}
                    className={`[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.8))] ${isBookmarked ? 'text-yellow-500' : 'text-white'}`}
                  />
                </Button>
                <span className="text-xs font-semibold text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">
                  {7 + (isBookmarked ? 1 : 0)}
                </span>
              </div>

              <div className="flex flex-col items-center gap-xs">
                <Button onClick={handleShare} variant="white-ghost" className="!w-12 !h-12 !rounded-full !bg-transparent !flex !justify-center !items-center !p-0 transition-transform duration-200 active:scale-90 !shadow-none" title="Chia sẻ">
                  <Share2 size={32} strokeWidth={2} className="[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.8))] text-white" />
                </Button>
                <span className="text-xs font-semibold text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Web Actions (YouTube Shorts style): outside to the right of the video */}
        {!isMobile && (
          <div className="hidden md:flex flex-col gap-6 items-center justify-end h-full pb-8 z-20 shrink-0 ml-4">
            {/* profile */}
            <div className="flex flex-col items-center gap-1">
              <div className="relative w-12 h-12">
                <div className="w-full h-full rounded-full border border-zinc-700 bg-neutral-800 flex justify-center items-center overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <User size={24} className="text-white" />
                </div>
              </div>
            </div>

            {/* Like */}
            <div className="flex flex-col items-center gap-1">
              <Button
                variant={isLikedRender ? "red-ghost" : "neutral-ghost"}
                className={`!w-12 !h-12 !rounded-full !bg-zinc-800 hover:!bg-zinc-700/80 !flex !justify-center !items-center !p-0 transition-all duration-200 active:scale-90 !text-white ${isLikedRender ? 'animate-[pop_0.3s_cubic-bezier(0.175,0.885,0.32,1.275)]' : ''}`}
                onClick={handleLike}
                title="Thích"
              >
                <Heart size={24} fill={isLikedRender ? "currentColor" : "none"} strokeWidth={isLikedRender ? 0 : 2} className={isLikedRender ? 'text-red-500' : 'text-white'} />
              </Button>
              <span className="text-xs font-medium text-app-text-muted mt-1">{formatCount(likesCount)}</span>
            </div>

            {/* Comment */}
            <div className="flex flex-col items-center gap-1">
              <Button
                onClick={handleCommentClick}
                variant="neutral-ghost"
                className="!w-12 !h-12 !rounded-full !bg-zinc-800 hover:!bg-zinc-700/80 !flex !justify-center !items-center !p-0 transition-all duration-200 active:scale-90 !text-white"
                title="Bình luận"
              >
                <MessageCircle size={24} strokeWidth={2} className="text-white" />
              </Button>
              <span className="text-xs font-medium text-app-text-muted mt-1">{comments.length}</span>
            </div>

            {/* Bookmark */}
            <div className="flex flex-col items-center gap-1">
              <Button
                onClick={() => setIsBookmarked(!isBookmarked)}
                variant="neutral-ghost"
                className="!w-12 !h-12 !rounded-full !bg-zinc-800 hover:!bg-zinc-700/80 !flex !justify-center !items-center !p-0 transition-all duration-200 active:scale-90 !text-white"
                title="Lưu"
              >
                <Bookmark
                  size={24}
                  strokeWidth={2}
                  fill={isBookmarked ? "currentColor" : "none"}
                  className={isBookmarked ? 'text-yellow-500' : 'text-white'}
                />
              </Button>
              <span className="text-xs font-medium text-app-text-muted mt-1">
                {7 + (isBookmarked ? 1 : 0)}
              </span>
            </div>

            {/* Share */}
            <div className="flex flex-col items-center gap-1">
              <Button
                onClick={handleShare}
                variant="neutral-ghost"
                className="!w-12 !h-12 !rounded-full !bg-zinc-800 hover:!bg-zinc-700/80 !flex !justify-center !items-center !p-0 transition-all duration-200 active:scale-90 !text-white"
                title="Chia sẻ"
              >
                <Share2 size={24} strokeWidth={2} className="text-white" />
              </Button>
              <span className="text-xs font-medium text-app-text-muted mt-1">7</span>
            </div>
          </div>
        )}

        {/* Comment Panels */}
        {isActive && (
          isMobile ? (
            <AppCommentPanel videoId={video.id} isOpen={showComments} setIsOpen={setShowComments} user={user} containerRef={containerEl} />
          ) : (
            <WebCommentPanel videoId={video.id} isOpen={showComments} setIsOpen={setShowComments} user={user} />
          )
        )}
      </div>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yêu cầu đăng nhập</DialogTitle>
            <DialogDescription>
              Bạn cần đăng nhập để có thể bình luận về video này.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button variant="neutral-outline" onClick={() => setShowLoginDialog(false)}>Hủy</Button>
            <Button onClick={handleLoginTest}>Test (Đăng nhập Mock)</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
