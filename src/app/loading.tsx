export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ivory text-charcoal transition-opacity duration-normal"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-gold/20 border-t-gold" />
        <span className="font-display text-sm tracking-widest uppercase text-charcoal/70">
          Tumkur Events
        </span>
      </div>
    </div>
  );
}

