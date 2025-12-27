import type React from "react";

type LicenseItem = {
  key: string;
  label: string;
  hours: number;
  iconSrc: string;
};

type InfoRow = {
  label: string;
  value: React.ReactNode;
  valueClassName?: string;
};

interface CenterPanelProps {
  licenses: LicenseItem[];

  houseTitle: string;
  houseName: string;
  houseLocation: string;
  houseImageSrc: string;

  businessTitle: string;
  businessName: string;
  businessLocation: string;
  businessImageSrc: string;

  statsLeft: InfoRow[];
  statsMid: InfoRow[];
  statsRight: InfoRow[];
  statsFarRight: InfoRow[];
}

export const CenterPanel: React.FC<CenterPanelProps> = ({
  licenses,
  houseTitle,
  houseName,
  houseLocation,
  houseImageSrc,
  businessTitle,
  businessName,
  businessLocation,
  businessImageSrc,
  statsLeft,
  statsMid,
  statsRight,
  statsFarRight,
}) => {
  return (
    <section className="flex-1 min-w-0">
      <div className="grid grid-cols-2 gap-3 py-4 px-4 rounded-[10px] bg-black/85 border border-white/10">
        {licenses.map((l) => (
          <div
            key={l.key}
            className="h-12 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md
                       flex items-center justify-between px-4 min-w-0"
          >
            <div className="flex items-center gap-3 min-w-0">
              <img src={l.iconSrc} alt="" className="h-10 w-10 shrink-0" />
              <span className="text-[14px] font-bold tracking-[0.14em] uppercase text-white truncate">
                {l.label}
              </span>
            </div>

            <span className="text-[14px] font-bold tracking-[0.12em] uppercase text-white shrink-0">
              {l.hours} HOURS
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-6 min-w-0">
        <div className="relative h-40 rounded-[10px] border border-white/10 overflow-hidden min-w-0">
          <div className="absolute inset-0 opacity-15 bg-linear-to-r from-[#FF0000] to-[#FF7461]" />
          <img
            src={houseImageSrc}
            alt=""
            className="absolute right-0 top-0 h-full w-[38%] object-cover opacity-95"
          />

          <div className="relative z-10 h-full p-5 flex flex-col justify-between min-w-0">
            <div className="min-w-0">
              <div className="text-[15px] font-bold tracking-[0.22em] uppercase text-white">
                {houseTitle}
              </div>
              <div className="mt-1 text-[19px] font-bold tracking-wide text-white truncate">
                {houseName}
              </div>
            </div>

            <div className="flex items-center gap-2 text-[12px] font-bold text-white min-w-0">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
              <span className="truncate">{houseLocation}</span>
            </div>
          </div>
        </div>

        <div className="relative h-40 rounded-[10px] border border-white/10 bg-black/35 overflow-hidden min-w-0">
          <div className="absolute inset-0 bg-linear-to-r opacity-15 from-[#0000FF] to-[#4457FF]" />
          <img
            src={businessImageSrc}
            alt=""
            className="absolute right-0 top-0 h-full w-[45%] object-cover opacity-95"
          />

          <div className="relative z-10 h-full p-5 flex flex-col justify-between min-w-0">
            <div className="min-w-0">
              <div className="text-[15px] font-bold tracking-[0.22em] uppercase text-white">
                {businessTitle}
              </div>
              <div className="mt-1 text-[19px] font-bold tracking-wide text-white truncate">
                {businessName}
              </div>
            </div>

            <div className="flex items-center gap-2 text-[12px] text-white font-bold min-w-0">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
              <span className="truncate">{businessLocation}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-10 min-w-0">
        <StatCol rows={statsLeft} />
        <StatCol rows={statsMid} />
        <StatCol rows={statsRight} />
        <StatCol rows={statsFarRight} />
      </div>

      <div className="mt-6 h-22 rounded-xl border border-white/10 bg-black/35 overflow-hidden">
        <div className="h-full w-full bg-linear-to-br from-black/50 via-black/30 to-indigo-900/25" />
      </div>
    </section>
  );
};

const StatCol: React.FC<{ rows: InfoRow[] }> = ({ rows }) => {
  return (
    <div className="space-y-4 min-w-0">
      {rows.map((r, idx) => (
        <div key={idx} className="min-w-0">
          <div className="text-[15px] font-bold tracking-[0.24em] uppercase text-[#4D4D4D]">
            {r.label}
          </div>
          <div
            className={[
              "mt-1 text-[18px] font-bold tracking-wide text-white min-w-0 truncate",
              r.valueClassName ?? "",
            ].join(" ")}
          >
            {r.value}
          </div>
        </div>
      ))}
    </div>
  );
};
