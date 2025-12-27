import type React from "react";

interface ProfileHeroProps {
  imageUrl: string;
  name: string;
  id: string | number;
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({
  imageUrl,
  name,
  id,
}) => {
  return (
    <aside className="ml-14 relative shrink-0 w-111.25 h-212.25">
      <div className="relative w-full h-full rounded-[14px] overflow-visible">
        <div
          className="absolute inset-0 rounded-[14px]"
          style={{
            background:
              "linear-gradient(112deg, rgba(6,8,12,0.96) 0%, rgba(10,14,18,0.78) 42%, rgba(3,122,132,0.62) 100%)",
          }}
        />
        <div
          className="absolute inset-0 rounded-[14px]"
          style={{
            background:
              "radial-gradient(820px 540px at 82% 10%, rgba(0,220,220,0.14) 0%, rgba(0,0,0,0) 56%), radial-gradient(720px 620px at 18% 45%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0) 62%)",
          }}
        />
        <div className="absolute inset-0 rounded-[14px] bg-black/25" />

        <div className="absolute top-0 left-10 -translate-y-1/2 z-30">
          <div className="inline-flex items-center gap-2 rounded-md bg-[#1E1E1E] px-3 py-1 text-white">
            <span className="inline-block h-3.5 w-3.5 rounded-[3px] bg-[#FF9900]" />
            <span className="text-[14px] font-bold tracking-wide">
              06/06/2026&nbsp;&nbsp;15:30
            </span>
          </div>
        </div>

        <div className="relative z-20 p-10 pt-12">
          <div className="text-[25px] uppercase tracking-[0.26em] text-white/70">
            HELLO
          </div>

          <div className="mt-2 flex items-end gap-3">
            <div className="text-[40px] font-bold leading-none text-white uppercase">
              {name}
            </div>
            <div className="pb-1 text-[12px] tracking-wide text-white/55">
              ID&nbsp;{id}
            </div>
          </div>
        </div>

        <img
          src={imageUrl}
          alt=""
          className="absolute -left-20 -bottom-0.5 z-30 pointer-events-none select-none"
          style={{
            height: "85%",
            width: "auto",
            maxWidth: "none",
          }}
        />
      </div>
    </aside>
  );
};
