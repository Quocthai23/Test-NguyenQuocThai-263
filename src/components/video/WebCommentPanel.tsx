'use client';

import React, { useState } from 'react';
import { Sheet, SheetContent } from '../shares/atoms/web/sheet';
import { X, Heart, Send, User } from 'lucide-react';
import { Button } from '../shares/atoms/button';
import { Input } from '../shares/atoms/input';
import { mockComments } from '../../data/mockComments';
import { toast } from 'sonner';

interface WebCommentPanelProps {
  videoId: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  user: any;
}

export default function WebCommentPanel({ videoId, isOpen, setIsOpen, user }: WebCommentPanelProps) {
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({});
  const [commentText, setCommentText] = useState('');

  const comments = mockComments[videoId] || [];

  const toggleCommentLike = (commentId: string) => {
    setLikedComments(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    toast.success('Đã gửi bình luận!');
    setCommentText('');
  };

  if (!isOpen) return null;

  return (
    <div className="hidden md:flex w-[350px] lg:w-[400px] h-full flex-col gap-0 border border-app-border bg-app-bg rounded-xl shadow-lg overflow-hidden shrink-0 animate-[fadeIn_0.2s_ease-out] ml-2">
      <div className="flex items-center justify-between p-4 border-b border-app-border shrink-0 relative">
        <h3 className="font-bold text-lg m-0 flex-1 text-center">Bình luận ({comments.length})</h3>
        <Button variant="neutral-ghost" className="!p-2 !w-auto !h-auto absolute right-2 top-3 text-app-text-muted hover:text-app-text bg-background" onClick={() => setIsOpen(false)}>
          <X size={20} />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden shrink-0">
              <img src={comment.userAvatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-app-text-muted mb-1">{comment.userName}</h4>
              <p className="text-sm text-app-text">{comment.content}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs text-app-text-tertiary">{comment.timestamp}</span>
                <span className="text-xs text-app-text-tertiary font-semibold cursor-pointer">Trả lời</span>
              </div>
            </div>
            <button
              onClick={() => toggleCommentLike(comment.id)}
              className={`flex flex-col items-center justify-start transition-colors duration-200 ${likedComments[comment.id] ? 'text-red-500' : 'text-app-text-muted hover:text-red-500'}`}
            >
              <Heart
                size={16}
                fill={likedComments[comment.id] ? 'currentColor' : 'none'}
              />
              <span className="text-xs mt-1">
                {comment.likesCount + (likedComments[comment.id] ? 1 : 0)}
              </span>
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-app-border bg-app-bg shrink-0">
        <form onSubmit={handleSendComment} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden shrink-0">
            {user ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <User size={24} className="m-2 text-neutral-400" />
            )}
          </div>
          <Input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Thêm bình luận..."
            className="flex-1 rounded-full bg-app-surface border-none"
          />
          <Button type="submit" variant="primary-ghost" className="!p-2 !w-auto !h-auto text-primary-500 disabled:text-app-text-tertiary" disabled={!commentText.trim()}>
            <Send size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
}
