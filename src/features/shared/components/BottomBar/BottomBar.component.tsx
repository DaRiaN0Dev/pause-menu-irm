import type React from "react";

interface BottomBarProps {
  donateLabel?: string;
  donateValue: string;
  levelLabel?: string;
  levelValue: number;
  percent: number;
  ctaLabel?: string;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  donateLabel = "DONATE BALANCE",
  donateValue,
  levelLabel = "YOUR LEVEL ( 90/120 RESPECT )",
  levelValue,
  percent,
  ctaLabel = "BUY LEVEL",
}) => {
  const safePercent = Math.max(0, Math.min(100, percent));

  return (
    <footer className="w-full px-6 pb-5">
      <div className="mb-4 h-px w-full" />
      <div className="mx-14 flex items-center gap-0">
        <div className="h-10 w-auto flex items-center px-4 gap-3">
          <div className="h-15.5 w-11.25 rounded-lg flex items-center justify-center text-white/85 border border-white/12">
            <span className="rounded-[10px] text-center text-[18px] leading-none font-bold">
              +
            </span>
          </div>

          <div className="flex flex-col font-bold leading-tight">
            <span className="text-[13px] tracking-[0.22em] text-white/55 uppercase text-nowrap">
              {donateLabel}
            </span>
            <span className="mt-1 text-[13px] text-[#FFB800]">
              {donateValue}
            </span>
          </div>
        </div>

        <div className="flex-1 h-14.5 px-6 flex items-center">
          <div className="flex-1">
            <div className="text-[18px] font-bold tracking-[0.22em] text-white/55 uppercase">
              {levelLabel}
            </div>

            <div className="mt-0.5 flex items-end gap-4">
              <div className="text-[35px] font-bold leading-none text-white/90">
                {levelValue}
              </div>

              <div className="flex-1 pb-1.5">
                <div
                  className="relative h-0.75 w-full rounded-full bg-white/14 overflow-hidden
                             before:content-[''] before:absolute before:inset-y-0 before:left-0
                             before:w-(--p) before:rounded-full
                             before:bg-indigo-400/90
                             after:content-[''] after:absolute after:inset-0
                             after:rounded-full after:shadow-[0_0_18px_rgba(99,102,241,0.35)]"
                  style={{ ["--p" as never]: `${safePercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="ml-6 text-[18px] font-bold text-white/70 whitespace-nowrap">
            {safePercent} %
          </div>
        </div>

        <button
          type="button"
          className="h-14.5 w-52.5 rounded-[10px]
                     bg-linear-to-b from-white/8 to-white/3
                     border border-white/12
                     shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                     backdrop-blur-md
                     text-[20px] tracking-[0.18em] uppercase font-bold text-white/80
                     hover:text-white hover:bg-white/5 transition"
        >
          {ctaLabel}
        </button>
      </div>
    </footer>
  );
};
