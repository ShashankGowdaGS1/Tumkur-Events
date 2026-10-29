'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Package, Send, MessageCircle, ArrowUpRight } from 'lucide-react';
import { footerConfig } from '@/config/footer';

interface ChatQuickActionsProps {
  readonly onActionClick?: () => void;
}

const ACTION_ICONS = {
  'action-events': Sparkles,
  'action-packages': Package,
  'action-quote': Send,
  'action-whatsapp': MessageCircle,
} as const;

/**
 * ChatQuickActions Component
 * Predefined interactive navigation & enquiry paths for the celebration assistant.
 */
export function ChatQuickActions({ onActionClick }: ChatQuickActionsProps) {
  return (
    <div className="space-y-2.5">
      <p className="text-[11px] font-sans uppercase tracking-[0.16em] text-[#8A6714] font-semibold px-1">
        QUICK ASSISTANCE
      </p>

      <div className="grid grid-cols-1 gap-2" role="list">
        {footerConfig.chatAssistant.quickActions.map((action) => {
          const IconComponent =
            ACTION_ICONS[action.id as keyof typeof ACTION_ICONS] || Sparkles;

          const content = (
            <div className="flex items-start gap-3 w-full">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8DFCF]/50 border border-[#E8DFCF] flex items-center justify-center text-[#8A6714] group-hover:bg-[#C79E22] group-hover:text-white transition-colors duration-200 mt-0.5">
                <IconComponent className="w-4 h-4" aria-hidden="true" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-semibold text-xs sm:text-sm text-[#151515] group-hover:text-[#8A6714] transition-colors">
                    {action.label}
                  </span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-[#B8B8B6] group-hover:text-[#8A6714] transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-[#555555] line-clamp-1 mt-0.5">
                  {action.description}
                </p>
              </div>
            </div>
          );

          if (action.isExternal) {
            return (
              <a
                key={action.id}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onActionClick}
                className="group p-3 rounded-sm border border-[#E8DFCF] bg-white/80 hover:bg-white hover:border-[#C79E22]/60 hover:shadow-sm transition-all duration-200 block text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79E22]"
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={action.id}
              href={action.href}
              onClick={onActionClick}
              className="group p-3 rounded-sm border border-[#E8DFCF] bg-white/80 hover:bg-white hover:border-[#C79E22]/60 hover:shadow-sm transition-all duration-200 block text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79E22]"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
