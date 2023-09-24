import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AboutSection1 from "@/components/about/AboutSection1/AboutSection1";
import WhatDrivestraed from "@/components/about/WhatDrivestraed/WhatDrivestraed";
import FAQ from "@/components/FAQ/FAQ";
import OurMission from "@/components/about/OurMission/OurMission";
import ExploreEndlessPossibilities from "@/components/about/ExploreEndlessPossibilities/ExploreEndlessPossibilities";
import WhatOurUserSay from "@/components/about/WhatOurUserSay/WhatOurUserSay";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection1 />
      <WhatDrivestraed />
      <OurMission />
      <WhatOurUserSay />
      <ExploreEndlessPossibilities />
      <FAQ />
      <Footer />
    </div>
  );
}
