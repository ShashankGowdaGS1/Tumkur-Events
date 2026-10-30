'use client';

import React from 'react';
import { MessageSquare, X } from 'lucide-react';

interface ChatLauncherProps {
  readonly isOpen: boolean;
  readonly onToggle: () => void;
}

/**
 * Floating Chat Launcher Button (Bottom-Right)
 *
 * Triggers the branded celebration assistance panel.
 * - Charcoal & Brand Gold design
 * - Responsive sizing: 52px (mobile) / 56px (tablet) / 60px (desktop)
 * - Safe area inset compliant
 * - Subtle hover & press feedback
 * - Restrained status indicator
 */
export function ChatLauncher({ isOpen, onToggle }: ChatLauncherProps) {
  return (
    <div
      className="fixed z-40 select-none"
      style={{
        bottom: 'max(var(--fab-bottom), calc(var(--fab-bottom) + env(safe-area-inset-bottom, 0px)))',
        right: 'max(var(--fab-edge), calc(var(--fab-edge) + env(safe-area-inset-right, 0px)))',
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
        className="group relative flex items-center justify-center rounded-full bg-[#151515] text-[#F7F4EE] border border-[#C79E22] shadow-[0_6px_20px_rgba(21,21,21,0.45)] transition-all duration-200 hover:scale-105 active:scale-95 hover:border-[#D6AC2A] hover:bg-[#202020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79E22] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
        style={{
          width: 'var(--fab-size)',
          height: 'var(--fab-size)',
        }}
      >
        {/* Animated Icon: Chat Bubble vs Close */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: 'var(--fab-icon-size)',
            height: 'var(--fab-icon-size)',
          }}
        >
          <X
            className={`absolute text-[#F7F4EE] transition-all duration-200 ${
              isOpen
                ? 'rotate-0 scale-100 opacity-100'
                : '-rotate-90 scale-50 opacity-0'
            }`}
            style={{
              width: 'var(--fab-icon-size)',
              height: 'var(--fab-icon-size)',
            }}
            aria-hidden="true"
          />
          <MessageSquare
            className={`absolute text-[#C79E22] transition-all duration-200 ${
              isOpen
                ? 'rotate-90 scale-50 opacity-0'
                : 'rotate-0 scale-100 opacity-100'
            }`}
            style={{
              width: 'var(--fab-icon-size)',
              height: 'var(--fab-icon-size)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Static Gold Status Indicator Dot (subtle, non-distracting) */}
        {!isOpen && (
          <span
            className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full border-2 border-[#151515] bg-[#C79E22]"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}
