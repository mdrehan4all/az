export function Ornament({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="180"
      height="18"
      viewBox="0 0 180 18"
      fill="none"
      aria-hidden="true"
    >
      <path d="M8 9H72" stroke="currentColor" strokeWidth="1" />
      <path d="M108 9H172" stroke="currentColor" strokeWidth="1" />
      <path d="M90 2.5 L97 9 L90 15.5 L83 9 Z" fill="currentColor" />
    </svg>
  );
}

export function CrescentMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22.2 6.2a12.4 12.4 0 1 0 7.6 21.4A13.2 13.2 0 1 1 22.2 6.2Z"
        fill="currentColor"
      />
      <circle cx="27.4" cy="9.4" r="1.5" fill="currentColor" />
    </svg>
  );
}
