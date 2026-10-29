'use client';

import React, { useState } from 'react';
import { WhatsAppButton } from './whatsapp-button';
import { ChatLauncher } from './chat-launcher';
import { ChatPanel } from './chat-panel';

/**
 * FloatingContactActions Component
 *
 * Coordinates the global floating action system:
 * - Bottom-left: WhatsApp click-to-chat button
 * - Bottom-right: Celebration chat assistant launcher and panel
 * - Handles collision prevention, z-index hierarchy, and safe-area offsets
 */
export function FloatingContactActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen((prev) => !prev);
  const closeChat = () => setIsChatOpen(false);

  return (
    <>
      {/* Bottom-Left WhatsApp Action */}
      <WhatsAppButton />

      {/* Bottom-Right Chat Assistant Panel */}
      <ChatPanel isOpen={isChatOpen} onClose={closeChat} />

      {/* Bottom-Right Chat Assistant Launcher */}
      <ChatLauncher isOpen={isChatOpen} onToggle={toggleChat} />
    </>
  );
}
