'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Sparkles } from 'lucide-react';
import { footerConfig } from '@/config/footer';
import { ChatQuickActions } from './chat-quick-actions';

interface ChatPanelProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

/**
 * ChatPanel Component
 *
 * Temporary functional assistance panel for celebration navigation & enquiry.
 * Architected with clean separation of layout and action dispatchers for future
 * Gemini API integration.
 */
export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        // Exclude clicks on the launcher button itself
        const target = e.target as HTMLElement;
        if (target.closest('button[aria-controls="tumkur-chat-assistant-panel"]')) {
          return;
        }
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      id="tumkur-chat-assistant-panel"
      role="dialog"
      aria-modal="false"
      aria-label={footerConfig.chatAssistant.name}
      className="fixed z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[400px] overflow-hidden rounded-md border border-[#C79E22]/50 bg-[#F7F4EE] shadow-[0_20px_50px_rgba(21,21,21,0.35)] transition-all duration-300 animate-in fade-in zoom-in-95"
      style={{
        bottom: 'calc(max(var(--fab-bottom), calc(var(--fab-bottom) + env(safe-area-inset-bottom, 0px))) + var(--fab-size) + 12px)',
        right: 'max(var(--fab-edge), calc(var(--fab-edge) + env(safe-area-inset-right, 0px)))',
        maxHeight: 'min(580px, calc(100vh - 120px))',
      }}
    >
      {/* Header: Charcoal #151515 with TE Emblem & Title */}
      <div className="bg-[#151515] text-[#F7F4EE] px-4 py-3.5 border-b border-[#222222] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-[#C79E22]/60 ring-1 ring-[#C79E22]/30">
            <Image
              src="/brand/tumkur-logo-circle.webp"
              alt="Tumkur Events Emblem"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-display text-sm tracking-wide text-[#F7F4EE]">
                {footerConfig.chatAssistant.name}
              </h3>
              <Sparkles className="w-3 h-3 text-[#C79E22]" aria-hidden="true" />
            </div>
            <p className="font-sans text-[10px] text-[#B8B8B6]">
              {footerConfig.chatAssistant.subtitle}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Assistant"
          className="text-[#B8B8B6] hover:text-[#F7F4EE] p-1 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79E22]"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Body: Warm Ivory with Opening Statement and Quick Actions */}
      <div className="p-4 sm:p-5 overflow-y-auto max-h-[460px] space-y-4">
        {/* Assistant Greeting Speech Bubble */}
        <div className="flex items-start gap-2.5">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#151515] border border-[#C79E22]/50 flex items-center justify-center text-[10px] font-mono text-[#C79E22] mt-0.5 select-none">
            TE
          </div>
          <div className="bg-[#E8DFCF]/50 border border-[#E8DFCF] rounded-sm rounded-tl-none p-3 max-w-[85%]">
            <p className="font-sans text-xs sm:text-sm text-[#151515] leading-relaxed">
              {footerConfig.chatAssistant.openingMessage}
            </p>
          </div>
        </div>

        {/* Predefined Quick Actions */}
        <ChatQuickActions onActionClick={onClose} />

        {/* Local Concierge Note */}
        <div className="pt-2 border-t border-[#E8DFCF]/60 text-center">
          <p className="text-[10px] font-sans text-charcoal/60 leading-normal">
            Bespoke event planning in Tumakuru, Karnataka.
          </p>
        </div>
      </div>
    </div>
  );
}
