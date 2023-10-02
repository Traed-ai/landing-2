"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import SellInvoice from "@/components/sellInvoice/sellInvoice";
import FlexibleSection from "@/components/sellInvoice/FlexibleSection";
import TradeSection from "@/components/sellInvoice/TradeSection";
import AboutUsSection from "@/components/sellInvoice/AboutUsSection";
import TraedBusinessSection from "@/components/Home/TraedBusinessSection/TraedBusinessSection";
import TopBanner from "@/components/Home/TopBanner/TopBanner";
import ItsEasySection from "@/components/Home/ItEasySection/iItsEasySection";
import WhatOurUserSaySection from "@/components/Home/WhatOurUserSaySection/WhatOurUserSaySection";
import ExploreEndlessPossibilities from "@/components/Home/ExploreEndlessPossibilities/ExploreEndlessPossibilities";
import BusinessMatchmaking from "@/components/BusinessMatchmaking/BusinessMatchmaking";

export default function Home() {
  return (
    <div>
      <Header />
      <TopBanner />
      <BusinessMatchmaking />
      {/* <TraedBusinessSection /> */}
      <AboutUsSection />
      <FlexibleSection />
      <SellInvoice />
      <TradeSection />
      <ItsEasySection />
      <WhatOurUserSaySection />
      <ExploreEndlessPossibilities />

      <FAQ />
      <Footer />
    </div>
  );
}
