'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Play, Bookmark, User } from 'lucide-react';
import { Button } from '../shares/atoms/button';
import { VideoData } from '../../data/mockVideos';

interface VideoPlayerProps {
  video: VideoData;
  isActive: boolean;
}

export default function VideoPlayer({ video, isActive }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(video.likesCount);
  const [showPlayIcon, setShowPlayIcon] = useState(false);

  useEffect(() => {
    if (isActive) {
      videoRef.current?.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowPlayIcon(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowPlayIcon(false);
      }
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
    if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
    return count.toString();
  };

  return (
    <div className="w-full h-full snap-start relative bg-[var(--color-neutral-1000)] flex justify-center items-center overflow-hidden">
      <div className="w-full h-full relative md:h-full md:aspect-[9/16] md:bg-[var(--color-neutral-900)] md:rounded-xl md:overflow-hidden md:shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover cursor-pointer"
          loop
          playsInline
          onClick={togglePlayPause}
        />
        
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-[var(--color-base-overlay-black)] rounded-full flex justify-center items-center text-[var(--color-base-white)] pointer-events-none opacity-0 transition-opacity duration-300 ${showPlayIcon && !isPlaying ? '!opacity-100 animate-[fadeOut_1s_forwards]' : ''}`}>
          <Play className="ml-1.5" size={36} fill="currentColor" />
        </div>

        <div className="absolute inset-0 p-[var(--spacing-lg)] pb-[var(--spacing-xl)] flex justify-between items-end pointer-events-none bg-gradient-to-t from-black/60 to-transparent from-0% to-30%">
          <div className="flex-1 text-[var(--color-base-white)] pr-[var(--spacing-xl)] pointer-events-auto max-w-[80%]">
            <h3 className="text-[var(--typography-headings-h3-fontSize)] font-[var(--font-weight-bold)] leading-[var(--typography-headings-h3-lineHeight)] m-0 mb-[var(--spacing-xs)] [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">{video.authorName}</h3>
            <p className="text-[var(--typography-body-medium-fontSize)] leading-[var(--typography-body-medium-lineHeight)] m-0 [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">{video.description}</p>
          </div>

          <div className="flex flex-col gap-[var(--spacing-xl)] pointer-events-auto items-center mb-[var(--spacing-md)]">
            <div className="flex flex-col items-center gap-[var(--spacing-xs)]">
              <div className="relative w-12 h-12 mb-[var(--spacing-md)]">
                <div className="w-full h-full rounded-full border border-[var(--color-base-white)] bg-[var(--color-neutral-500)] flex justify-center items-center overflow-hidden">
                  <User size={24} color="#fff" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-[var(--color-primary-500)] text-[var(--color-base-white)] rounded-full flex justify-center items-center text-sm font-bold cursor-pointer border-2 border-[var(--color-base-white)]">+</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-[var(--spacing-xs)]">
              <Button 
                variant={isLiked ? "red-ghost" : "white-ghost"}
                className={`!w-12 !h-12 !rounded-full !bg-transparent !flex !justify-center !items-center !p-0 transition-transform duration-200 active:scale-90 !shadow-none ${isLiked ? '!text-[var(--color-red-500)] animate-[pop_0.3s_cubic-bezier(0.175,0.885,0.32,1.275)]' : ''}`} 
                onClick={handleLike}
                title="Thích"
              >
                <Heart size={32} fill={isLiked ? "currentColor" : "none"} strokeWidth={isLiked ? 0 : 2} className="[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.8))] text-white" />
              </Button>
              <span className="text-[var(--font-size-xs)] font-[var(--font-weight-semibold)] text-[var(--color-base-white)] [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">{formatCount(likesCount)}</span>
            </div>

            <div className="flex flex-col items-center gap-[var(--spacing-xs)]">
              <Button variant="white-ghost" className="!w-12 !h-12 !rounded-full !bg-transparent !flex !justify-center !items-center !p-0 transition-transform duration-200 active:scale-90 !shadow-none" title="Bình luận">
                <MessageCircle size={32} strokeWidth={2} className="[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.8))] text-white" />
              </Button>
              <span className="text-[var(--font-size-xs)] font-[var(--font-weight-semibold)] text-[var(--color-base-white)] [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">128</span>
            </div>

            <div className="flex flex-col items-center gap-[var(--spacing-xs)]">
              <Button variant="white-ghost" className="!w-12 !h-12 !rounded-full !bg-transparent !flex !justify-center !items-center !p-0 transition-transform duration-200 active:scale-90 !shadow-none" title="Lưu">
                <Bookmark size={32} strokeWidth={2} className="[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.8))] text-white" />
              </Button>
              <span className="text-[var(--font-size-xs)] font-[var(--font-weight-semibold)] text-[var(--color-base-white)] [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">7</span>
            </div>

            <div className="flex flex-col items-center gap-[var(--spacing-xs)]">
              <Button variant="white-ghost" className="!w-12 !h-12 !rounded-full !bg-transparent !flex !justify-center !items-center !p-0 transition-transform duration-200 active:scale-90 !shadow-none" title="Chia sẻ">
                <Share2 size={32} strokeWidth={2} className="[filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.8))] text-white" />
              </Button>
              <span className="text-[var(--font-size-xs)] font-[var(--font-weight-semibold)] text-[var(--color-base-white)] [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
