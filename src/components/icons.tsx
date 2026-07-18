type IconProps = {
  className?: string;
  size?: number;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconGem({ className, size = 28 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M8 4h8l5 6-9 11L3 10z" />
      <path d="M3 10h18" />
      <path d="M8 4 12 10 16 4" />
      <line x1="12" y1="10" x2="12" y2="21" />
    </svg>
  );
}

export function IconPin({ className, size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 0 1 18.5 10c0 4.9-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function IconGlobe({ className, size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.6 2.3 4 5.2 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.2-4-8.5s1.4-6.2 4-8.5z" />
    </svg>
  );
}

export function IconPalette({ className, size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M12 3.5A8.5 8.3 0 1 0 12.7 20c1 0 1.5-.6 1.5-1.4 0-.4-.2-.7-.4-1-.2-.3-.4-.6-.4-1 0-.8.6-1.4 1.4-1.4H16a4.5 4.3 0 0 0 4.5-4.3c0-4.6-4-7.4-8.5-7.4z" />
      <circle cx="8.2" cy="10.6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.8" cy="10.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCamera({ className, size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M8.5 7 9.8 4.8h4.4L15.5 7" />
      <rect x="3" y="7" width="18" height="12.5" rx="3" />
      <circle cx="12" cy="13.2" r="3.4" />
      <circle cx="17.3" cy="10.3" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconInstagram({ className, size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCheck({ className, size = 20 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  );
}

export function IconArrowRight({ className, size = 18 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <path d="M13 6.5 19 12l-6 5.5" />
    </svg>
  );
}

export function IconWhatsApp({ className, size = 20 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" stroke="none">
      <path d="M6.5 17.5 4.5 20l2.6-.8A8 8 0 1 0 4.5 12a7.9 7.9 0 0 0 1 3.9z" />
      <path d="M9.2 9.6c.3-.7.6-.7.9-.7h.5c.2 0 .4 0 .6.5s.7 1.6.7 1.7 0 .3-.1.4c-.2.2-.3.3-.5.5s-.3.3-.1.6c.2.3.8 1.2 1.6 1.9 1.1 1 1.9 1.2 2.2 1.4.3.1.4.1.6-.1s.7-.7.9-1 .4-.2.6-.1l1.5.8c.2.1.4.2.4.3s0 .8-.3 1.5-1.6 1.2-2.2 1.2-1.6 0-3.6-1.1c-2.4-1.4-3.9-3.9-4-4.1s-.9-1.2-.9-2.3.6-1.6.8-1.9z" />
    </svg>
  );
}

export function IconSearch({ className, size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <line x1="15.5" y1="15.5" x2="20.5" y2="20.5" />
    </svg>
  );
}

export function IconBolt({ className, size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M12.5 3 5 13.5h5.5L11 21l7.5-10.5H13z" />
    </svg>
  );
}

export function IconLayers({ className, size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M12 3.5 20.5 8 12 12.5 3.5 8z" />
      <path d="m3.5 12 8.5 4.5L20.5 12" />
      <path d="m3.5 16 8.5 4.5L20.5 16" />
    </svg>
  );
}

export function IconTrendUp({ className, size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M4 16 10 10 14 14 20 6" />
      <path d="M14.5 6h5.5v5.5" />
    </svg>
  );
}

export function IconTrendDown({ className, size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M4 8 10 14 14 10 20 18" />
      <path d="M14.5 18h5.5v-5.5" />
    </svg>
  );
}
