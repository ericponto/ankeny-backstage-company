export default function Logo() {
  return (
    <svg
      id="logo-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="190 210 820 340"
      role="img"
      aria-labelledby="logo-title logo-desc"
      width="160"
      className="h-auto"
    >
      <title id="logo-title">Ankeny Backstage Company</title>
      <desc id="logo-desc">
        Minimalist logo for Ankeny Backstage Company with maroon vertical stage
        curtain lines framing stacked black text.
      </desc>

      <g className="curtain-2 curtain-left">
        <line x1="210" y1="225" x2="210" y2="525" />
        <line opacity="0.9" x1="245" y1="225" x2="245" y2="500" />
        <line opacity="0.8" x1="280" y1="225" x2="280" y2="475" />
      </g>

      <g className="curtain-2 curtain-right">
        <line x1="990" y1="225" x2="990" y2="525" />
        <line opacity="0.9" x1="955" y1="225" x2="955" y2="500" />
        <line opacity="0.8" x1="920" y1="225" x2="920" y2="475" />
      </g>

      <line className="bar" x1="350" y1="270" x2="390" y2="270" />
      <line className="bar" x1="810" y1="270" x2="850" y2="270" />
      <line className="bar bar-2" x1="350" y1="432" x2="390" y2="432" />
      <line className="bar bar-2" x1="810" y1="432" x2="850" y2="432" />

      <text
        className="text-2"
        x="610"
        y="277"
        fontSize="72"
        fontWeight="300"
        letterSpacing="18"
      >
        ANKENY
      </text>

      <text
        className="text-2 text-lg-2 text-m"
        x="600"
        y="360"
        fontSize="92"
        fontWeight="600"
        letterSpacing="2"
      >
        BACKSTAGE
      </text>

      <text
        className="text-2"
        x="605"
        y="440"
        fontSize="68"
        fontWeight="300"
        letterSpacing="8"
      >
        COMPANY
      </text>
    </svg>
  );
}
