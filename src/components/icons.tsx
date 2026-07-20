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

export function IconGoldBar({ className, size = 28 }: IconProps) {
  const height = size * (373.4 / 508.47);
  return (
    <svg
      viewBox="0 0 508.47 373.4"
      width={size}
      height={height}
      className={className}
      fill="currentColor"
      stroke="none"
    >
      <path d="M243.06,367.01c-8.51,7.15-19.01,7.64-28.47,4.72l-76.8-23.77-126.53-39.13c-4.66-1.44-7.85-4.11-9.56-7.73-2.5-5.27-2.01-9.94.02-15.17l39.44-101.61c3.79-9.76,11.7-15.23,19.79-20.39L309.5,5.15c8.15-5.21,16.49-6.19,25.39-4.19l112.7,25.3c8.24,1.85,16.86,5.71,20.79,14.54l37.9,85.12c3.72,8.36,2.94,17.31-4.08,23.2l-41.81,35.13-217.33,182.75ZM200.58,249.76l21.86,94.91c.27,1.19,1.82,1.9,2.41,1.62s1.26-1.32,1.14-2.79l-7.3-91.06c-.85-10.61.37-21.66,8.53-28.1l27.1-21.39,92.03-72.55,90.79-72.09c3.09-2.45,5.72-4.29,7.44-8.04-3.02-.09-4.88,1.36-7.03,2.86l-67.9,47.37-148.28,104.51c-8.1,5.71-16.99,10.88-26.63,8.76l-48.03-10.54-78.41-16.94c-1.33-.29-2.29.95-2.13,1.67.09.42.69,1.1,1.35,1.34l33.53,12.3,82.65,29.13c8.22,2.9,14.65,9.32,16.88,19.03Z" />
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

export function IconPlus({ className, size = 18 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}
