import type React from "react";
import SnowFlake from "../../../../assets/images/snow-flake.png";

interface BattlePassPanelProps {
  imageUrl: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const BattlePassPanel: React.FC<BattlePassPanelProps> = ({
  imageUrl,
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <aside className="mr-14 relative w-111.25 h-212.25 shrink-0">
      <div className="relative w-full h-full rounded-[14px] border border-cyan-500/40 overflow-visible">
        <div className="absolute inset-0 rounded-[14px] overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/60 to-cyan-900/40" />

          <img
            src={SnowFlake}
            alt=""
            className="absolute -right-6 -top-6 w-61.75 h-63 opacity-90 pointer-events-none select-none"
          />
        </div>

        <div className="relative z-10 p-6">
          <div className="text-[25px] tracking-[0.22em] font-bold text-[#AAAAAA] uppercase">
            Battle Pass
          </div>
          <div className="mt-1 text-[42px] font-bold tracking-wide text-[#5ECAF0] uppercase">
            Winter
          </div>
        </div>

        <div className="absolute left-6 top-35 z-20 flex flex-col gap-3">
          {[
            { label: "DAY", value: days },
            { label: "HOUR", value: hours },
            { label: "MIN", value: minutes },
            { label: "SEC", value: seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="w-14 h-14 rounded-lg bg-white flex flex-col items-center justify-center shadow-md"
            >
              <div className="text-[25px] font-bold text-black">
                {item.value}
              </div>
              <div className="text-[10px] tracking-wide text-[#737373] font-bold uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <img
          src={imageUrl}
          alt=""
          className="absolute -left-80 bottom-0 z-30 pointer-events-none select-none"
          style={{
            height: "92%",
            width: "auto",
            maxWidth: "none",
          }}
        />
      </div>
    </aside>
  );
};
