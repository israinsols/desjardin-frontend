import Hero from "../components/Hero";
import WhatToDo from "../components/WhatToDo";
import AlarmClock from "../components/AlarmClock";
import InterestRates from "../components/InterestRates";
import ToolsCalculators from "../components/ToolsCalculators";
import OnlineAccess from "../components/OnlineAccess";
import NeedHelp from "../components/NeedHelp";
import CountOnUs from "../components/CountOnUs";
import Together from "../components/Together";
import ContactUs from "../components/ContactUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatToDo />
      <AlarmClock />
      <InterestRates />
      <ToolsCalculators />
      <OnlineAccess />
      <NeedHelp />
      <CountOnUs />
      <Together />
      <ContactUs />
    </main>
  );
}
