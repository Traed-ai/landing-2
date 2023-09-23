import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AboutSection1 from "@/components/about/AboutSection1/AboutSection1";
import WhatDrivestraed from "@/components/about/WhatDrivestraed/WhatDrivestraed";
import FAQ from "@/components/FAQ/FAQ";
import OurMission from "@/components/about/OurMission/OurMission";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection1 />
      <WhatDrivestraed />
      <OurMission />
      <FAQ />
      <Footer />
    </div>
  );
}
