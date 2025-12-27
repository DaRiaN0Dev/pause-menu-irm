import type { ReactNode } from "react";
import type { HeaderItem } from "../../types/header_item";
import { LeftArrowIcon } from "../icons/LeftArrow.component";
import { RightArrowIcon } from "../icons/RightComponent";
import { BattlePassIcon } from "../../components/icons/BattlePass.component";

type KeyHint = {
  key: string;
  label: ReactNode;
};

const DEFAULT_KEY_HINTS: KeyHint[] = [
  { key: "q", label: "Q" },
  {
    key: "arrows",
    label: (
      <span className="flex items-center gap-2">
        <LeftArrowIcon />
        <RightArrowIcon />
      </span>
    ),
  },
  { key: "e", label: "E" },
];

interface HeaderProps {
  pageLabel: string;
  navItems: HeaderItem[];
  rightStatus?: ReactNode;
  onClose?: () => void;
}

export function Header({
  pageLabel,
  navItems,
  rightStatus,
  onClose,
}: HeaderProps) {
  return (
    <header className="w-full h-14 backdrop-blur-md text-white mt-5">
      <div dir="ltr" className="h-full flex items-center justify-around">
        <div className="flex items-center gap-25">
          <div className="text-[25px] font-semibold text-white/80 uppercase whitespace-nowrap">
            {pageLabel}
          </div>

          <div className="flex items-center gap-2">
            {DEFAULT_KEY_HINTS.map((h) => (
              <div
                key={h.key}
                className="h-6 min-w-6 px-2 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 text-[12px] font-semibold text-white/70"
              >
                {h.label}
              </div>
            ))}
          </div>
        </div>

        <nav className="flex items-center justify-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname.includes(item.link);
            return (
              <a
                href={item.link}
                key={`Header-Item-${item.title}`}
                className={[
                  "group flex items-center gap-2 whitespace-nowrap",
                  "text-[18px] font-semibold tracking-[0.12em] uppercase",
                  "transition-colors",
                  isActive
                    ? "text-amber-400"
                    : "text-white/55 hover:text-white/80",
                ].join(" ")}
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            );
          })}

          <a
            href="/battle-pass"
            className={[
              "group flex items-center gap-2 whitespace-nowrap text-money-green",
              "text-[18px] font-semibold tracking-[0.12em] uppercase",
              "transition-colors",
            ].join(" ")}
          >
            <BattlePassIcon />
            <span>Battle Pass</span>
          </a>
        </nav>

        <div className="flex items-center gap-4 justify-end">
          {rightStatus && (
            <div className="flex items-center gap-2 ensure-flex text-[12px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap">
              {rightStatus}
            </div>
          )}

          <div className="flex items-center gap-2 shrink-0">
            <div className="h-8 px-2 flex items-center justify-center rounded-sm bg-white/5 border border-white/10">
              <span className="text-[12px] font-semibold text-white/70">
                F1
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="h-8 px-3 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 text-[12px] font-semibold tracking-[0.16em] uppercase text-white/75 hover:text-white hover:bg-white/10 transition whitespace-nowrap"
            >
              CLOSE
            </button>

            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="h-8 w-8 flex items-center justify-center rounded-sm bg-red-600/70 border border-red-400/30 hover:bg-red-600/90 transition"
            >
              <span className="text-[14px] leading-none">×</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
