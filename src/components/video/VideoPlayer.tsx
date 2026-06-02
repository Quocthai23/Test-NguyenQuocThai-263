'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Play } from 'lucide-react';
import { Button } from '../shares/atoms/button';
import styles from './VideoPlayer.module.css';
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
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src={video.videoUrl}
          className={styles.video}
          loop
          playsInline
          onClick={togglePlayPause}
        />
        
        <div className={`${styles.playPauseIndicator} ${showPlayIcon && !isPlaying ? styles.show : ''}`}>
          <Play className={styles.playIcon} size={36} fill="currentColor" />
        </div>

        <div className={styles.overlay}>
          <div className={styles.info}>
            <h3 className={styles.author}>{video.authorName}</h3>
            <p className={styles.description}>{video.description}</p>
          </div>

          <div className={styles.actions}>
            <div className={styles.actionItem}>
              <Button 
                variant={isLiked ? "red-ghost" : "white-ghost"}
                className={`${styles.actionButton} ${isLiked ? styles.liked : ''}`} 
                onClick={handleLike}
                title="Thích"
              >
                <Heart size={28} fill={isLiked ? "currentColor" : "none"} strokeWidth={isLiked ? 0 : 2} />
              </Button>
              <span className={styles.actionText}>{formatCount(likesCount)}</span>
            </div>

            <div className={styles.actionItem}>
              <Button variant="white-ghost" className={styles.actionButton} title="Bình luận">
                <MessageCircle size={28} strokeWidth={2} />
              </Button>
              <span className={styles.actionText}>128</span>
            </div>

            <div className={styles.actionItem}>
              <Button variant="white-ghost" className={styles.actionButton} title="Chia sẻ">
                <Share2 size={28} strokeWidth={2} />
              </Button>
              <span className={styles.actionText}>Chia sẻ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
