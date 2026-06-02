'use client';

import React, { useRef, useState, useEffect } from 'react';
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
        // Auto-play might be blocked by browser policy
        setIsPlaying(false);
      });
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Reset video when scrolled out
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

  // Format numbers (e.g. 10500 -> 10.5K)
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
        
        {/* Play/Pause indicator */}
        <div className={`${styles.playPauseIndicator} ${showPlayIcon && !isPlaying ? styles.show : ''}`}>
          <svg className={styles.icon} viewBox="0 0 24 24" style={{ width: 32, height: 32 }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        <div className={styles.overlay}>
          <div className={styles.info}>
            <h3 className={styles.author}>{video.authorName}</h3>
            <p className={styles.description}>{video.description}</p>
          </div>

          <div className={styles.actions}>
            <button 
              className={`${styles.actionButton} ${isLiked ? styles.liked : ''}`} 
              onClick={handleLike}
            >
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span className={styles.actionText}>{formatCount(likesCount)}</span>
            </button>

            <button className={styles.actionButton}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24">
                  <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                </svg>
              </div>
              <span className={styles.actionText}>128</span>
            </button>

            <button className={styles.actionButton}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                </svg>
              </div>
              <span className={styles.actionText}>Chia sẻ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
