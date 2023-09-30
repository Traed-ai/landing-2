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

export default function Home() {
  return (
    <div>
      <Header />
      <TopBanner />
      {/* <TraedBusinessSection /> */}
      <AboutUsSection />
      <SellInvoice />
      <FlexibleSection />
      <TradeSection />
      <ItsEasySection />
      
      <FAQ />
      <Footer />
    </div>
  );
}
