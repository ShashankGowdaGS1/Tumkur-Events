'use client';

import React from 'react';
import { MessageSquare, X } from 'lucide-react';
import { footerConfig } from '@/config/footer';

interface ChatLauncherProps {
  readonly isOpen: boolean;
  readonly onToggle: () => void;
}

/**
 * Floating Chat Launcher Button (Bottom-Right)
 *
 * Triggers the branded celebration assistance panel.
 * - Charcoal & Brand Gold design
 * - Animated morph between chat icon and close (X)
 * - Gold live status indicator dot
 */
export function ChatLauncher({ isOpen, onToggle }: ChatLauncherProps) {
  return (
    <div
      className="fixed z-40"
      style={{
        bottom: 'max(1.25rem, calc(1.25rem + env(safe-area-inset-bottom, 0px)))',
        right: 'max(1.25rem, calc(1.25rem + env(safe-area-inset-right, 0px)))',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="tumkur-chat-assistant-panel"
        aria-label={
          isOpen
            ? 'Close Tumkur Events Celebration Assistant'
            : 'Open Tumkur Events Celebration Assistant'
        }
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#151515] text-[#F7F4EE] border border-[#C79E22] shadow-[0_8px_24px_rgba(21,21,21,0.5)] transition-all duration-300 hover:scale-105 hover:border-[#D6AC2A] hover:bg-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79E22] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
      >
        {/* Animated Icon: Chat Bubble vs Close */}
        <div className="relative h-6 w-6 flex items-center justify-center">
          <X
            className={`absolute h-6 w-6 text-[#F7F4EE] transition-all duration-300 ${
              isOpen
                ? 'rotate-0 scale-100 opacity-100'
                : '-rotate-90 scale-50 opacity-0'
            }`}
            aria-hidden="true"
          />
          <MessageSquare
            className={`absolute h-6 w-6 text-[#C79E22] transition-all duration-300 ${
              isOpen
                ? 'rotate-90 scale-50 opacity-0'
                : 'rotate-0 scale-100 opacity-100 group-hover:scale-110'
            }`}
            aria-hidden="true"
          />
        </div>

        {/* Ambient Gold Status Pulse */}
        {!isOpen && (
          <span
            className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5"
            aria-hidden="true"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C79E22] opacity-60" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#151515] bg-[#C79E22]" />
          </span>
        )}
      </button>
    </div>
  );
}
