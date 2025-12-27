import type { HeaderItem } from "../types/header_item";

import { ShopIcon } from "../components/icons/Shop.component";
import { MainIcon } from "../components/icons/Main.component";
import { SettingIcon } from "../components/icons/Setting.component";
import { ChallengeIcon } from "../components/icons/Challange.component";
import { MailBoxIcon } from "../components/icons/MailBox.component";
import { FaqIcon } from "../components/icons/Faq.component";
import { BuildingIcon } from "../components/icons/Faction.component";

export const HeaderItems: HeaderItem[] = [
  { title: "main", icon: <MainIcon />, link: "/main" },
  { title: "shop", icon: <ShopIcon />, link: "/shop" },
  { title: "faction", icon: <BuildingIcon />, link: "/faction" },
  { title: "setting", icon: <SettingIcon />, link: "/setting" },
  { title: "challenge", icon: <ChallengeIcon />, link: "/challenge" },
  { title: "faq", icon: <FaqIcon />, link: "/faq" },
  { title: "mailbox", icon: <MailBoxIcon />, link: "/mailbox" },
];
