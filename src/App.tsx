import "./App.css";

import { Header } from "./features/shared/components/Header/Header.component";
import { HeaderItems } from "./features/shared/data/header_items";
import { BottomBar } from "./features/shared/components/BottomBar/BottomBar.component";
import { ProfileHero } from "./features/shared/components/ProfileHero/ProfileHero.component";
import { BattlePassPanel } from "./features/main_page/components/BattlePassPanel/BattlePassPanel.component";
import { CenterPanel } from "./features/main_page/components/CenterPanel/CenterPanel.component";

import CharacterImage from "./assets/images/character-1.png";
import BattlePassCharacter from "./assets/images/battle-pass-character.png";

import DrivingIcon from "./assets/icons/car.png";
import BikeIcon from "./assets/icons/motorcycle.png";
import PilotIcon from "./assets/icons/airplane.png";
import SailIcon from "./assets/icons/boat.png";
import GunIcon from "./assets/icons/gun.png";
import MaterialIcon from "./assets/icons/material.png";

import HouseImg from "./assets/images/house.png";
import SafeImg from "./assets/images/safe.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900">
      <Header
        pageLabel="MAIN PAGE"
        navItems={HeaderItems}
        rightStatus={<></>}
        onClose={() => console.log("close")}
      />

      <main className="px-6 py-6 flex-1">
        <div className="flex gap-6 h-[calc(100dvh-56px-78px-48px)] min-w-0">
          <ProfileHero imageUrl={CharacterImage} name="Saleh" id={123} />

          <div className="flex-1 min-w-0 overflow-hidden">
            <CenterPanel
              licenses={[
                {
                  key: "driving",
                  label: "DRIVING LICENCE",
                  hours: 350,
                  iconSrc: DrivingIcon,
                },
                {
                  key: "bike",
                  label: "BIKE LICENCE",
                  hours: 350,
                  iconSrc: BikeIcon,
                },
                {
                  key: "pilot",
                  label: "PILOT LICENCE",
                  hours: 350,
                  iconSrc: PilotIcon,
                },
                {
                  key: "sail",
                  label: "SAIL LICENCE",
                  hours: 350,
                  iconSrc: SailIcon,
                },
                {
                  key: "gun",
                  label: "GUN LICENCE",
                  hours: 350,
                  iconSrc: GunIcon,
                },
                {
                  key: "material",
                  label: "MATERIAL LICENCE",
                  hours: 350,
                  iconSrc: MaterialIcon,
                },
              ]}
              houseTitle="YOUR HOUSE"
              houseName="HOUSE #6666"
              houseLocation="Los Santos, Jefferson"
              houseImageSrc={HouseImg}
              businessTitle="YOUR BUSINESS"
              businessName="WEAPON SHOP #6666"
              businessLocation="San Fierro, Clarkson"
              businessImageSrc={SafeImg}
              statsLeft={[
                { label: "NAME", value: "Saleh" },
                { label: "REFERRAL", value: "66666" },
                {
                  label: "FACTION",
                  value: (
                    <span className="text-[#5FA8FF]">Police Department</span>
                  ),
                },
                {
                  label: "MARRIED",
                  value: <span className="text-[#FF5050]">Yes / Jennifer</span>,
                },
                { label: "BANK ROBBERY", value: "20/40" },
              ]}
              statsMid={[
                { label: "REAL NAME", value: "MohammadSaleh" },
                { label: "WARNS", value: "0/3" },
                { label: "FACTION PUNISH", value: "100 FP" },
                { label: "MARRIED PUNISH", value: "100 MP" },
                { label: "BUSINESS ROBBERY", value: "5/10" },
              ]}
              statsRight={[
                { label: "EMAIL", value: "MohammadSaleh@gmail.com" },
                { label: "LAST LOGIN", value: "2023/01/01" },
                { label: "FACTION WARN", value: "1/3" },
                {
                  label: "BANK AMOUNT",
                  value: "$1,234,000",
                  valueClassName: "money-green",
                },
                { label: "PHONE NUMBER", value: "666-6666" },
              ]}
              statsFarRight={[
                { label: "REAL NUMBER", value: "0966****66" },
                { label: "REGISTER DATE", value: "2023/01/01" },
                { label: "TIME PLAYED", value: "6666 Hour" },
                {
                  label: "CASH AMOUNT",
                  value: "$352,000",
                  valueClassName: "money-green",
                },
                { label: "VEHICLE SLOT", value: "1/2" },
              ]}
            />
          </div>

          <BattlePassPanel
            imageUrl={BattlePassCharacter}
            days={66}
            hours={66}
            minutes={66}
            seconds={66}
          />
        </div>
      </main>

      <BottomBar donateValue="6,666 CC" levelValue={99} percent={70} />
    </div>
  );
}

export default App;
