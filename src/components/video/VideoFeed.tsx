'use client';

import React, { useEffect, useRef, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { mockVideos } from '../../data/mockVideos';
import styles from './VideoFeed.module.css';

export default function VideoFeed() {
  const [activeVideoId, setActiveVideoId] = useState<string>(mockVideos[0]?.id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveVideoId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, // Trigger when 60% of the video is visible
      }
    );

    const elements = document.querySelectorAll('[data-video-item]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className={styles.feed}>
      {mockVideos.map((video) => (
        <div key={video.id} id={video.id} data-video-item style={{ height: '100%' }}>
          <VideoPlayer 
            video={video} 
            isActive={activeVideoId === video.id} 
          />
        </div>
      ))}
    </div>
  );
}
