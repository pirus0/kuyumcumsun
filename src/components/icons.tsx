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
    <svg
      viewBox="0 0 1103 1050"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      stroke="none"
    >
      <path
        fillRule="evenodd"
        d="M 236.132 43.516 C 182.030 67.379, 137.581 87.085, 137.358 87.309 C 137.134 87.532, 181.625 107.362, 236.226 131.376 L 335.500 175.036 552 174.984 L 768.500 174.932 866.811 131.604 C 920.882 107.773, 965.032 87.876, 964.922 87.388 C 964.812 86.899, 920.572 67.048, 866.611 43.274 L 768.500 0.049 551.500 0.089 L 334.500 0.130 236.132 43.516 M 58.633 177.087 C 26.807 220.031, 1.157 255.520, 1.633 255.952 C 4.340 258.404, 242.249 397.085, 242.801 396.532 C 244.166 395.168, 320.743 189.473, 320.134 188.809 C 319.596 188.222, 117.538 98.994, 116.770 99.003 C 116.621 99.005, 90.460 134.143, 58.633 177.087 M 884.255 143.838 C 828.570 168.402, 783.007 188.887, 783.005 189.360 C 782.996 190.987, 860.377 397, 860.997 397 C 863.158 397, 1101.482 255.990, 1101.387 254.767 C 1101.256 253.078, 987.205 98.957, 986.184 99.088 C 985.808 99.136, 939.940 119.274, 884.255 143.838 M 337.170 198.248 C 336.084 201.136, 318.665 247.600, 298.461 301.500 C 278.257 355.400, 261.515 400.063, 261.256 400.750 C 260.881 401.748, 319.345 402, 551.501 402 L 842.217 402 841.615 399.750 C 841.284 398.512, 823.787 351.600, 802.733 295.500 L 764.453 193.500 551.799 193.248 L 339.145 192.995 337.170 198.248 M 24.700 296.327 C 27.890 300.907, 135.575 456.115, 264 641.234 C 392.425 826.352, 497.618 977.699, 497.763 977.560 C 497.908 977.421, 440.071 851.351, 369.236 697.405 L 240.446 417.502 130.077 352.751 C 69.373 317.138, 19.525 288, 19.303 288 C 19.081 288, 21.510 291.747, 24.700 296.327 M 974.500 352.076 C 914.550 387.291, 864.922 416.444, 864.216 416.860 C 863.509 417.277, 806.105 541.116, 736.650 692.059 C 594.617 1000.736, 604.477 979.173, 606.573 976.500 C 611.477 970.242, 1084.409 287.977, 1083.809 288.024 C 1083.639 288.038, 1034.450 316.861, 974.500 352.076 M 263.360 423.250 C 265.925 429.262, 548.200 1042.461, 550.032 1046 L 551.843 1049.500 556.505 1039.500 C 573.481 1003.086, 841 421.154, 841 420.640 C 841 420.288, 710.719 420, 551.487 420 L 261.973 420 263.360 423.250"
      />
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
