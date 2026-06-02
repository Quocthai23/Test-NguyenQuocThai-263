'use client';

import React, { useEffect, useRef, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { mockVideos } from '../../data/mockVideos';

export default function VideoFeed() {
  const [activeVideoId, setActiveVideoId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lastWatchedVideoId') || mockVideos[0]?.id;
    }
    return mockVideos[0]?.id;
  });
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the active video on initial load if it was saved
    const savedVideoId = localStorage.getItem('lastWatchedVideoId');
    if (savedVideoId && containerRef.current) {
      setTimeout(() => {
        const el = document.getElementById(savedVideoId);
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveVideoId(entry.target.id);
            localStorage.setItem('lastWatchedVideoId', entry.target.id);
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
    <div ref={containerRef} className="w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      {mockVideos.map((video) => (
        <div key={video.id} id={video.id} data-video-item className="h-full">
          <VideoPlayer 
            video={video} 
            isActive={activeVideoId === video.id} 
          />
        </div>
      ))}
    </div>
  );
}
