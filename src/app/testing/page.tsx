import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import LatestInsightsTestingSection from "@/components/testing/LatestInsightsTestingSection";
import TestingSection from "@/components/testing/TestingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing | Lending Bridge",
  description: "Internal page for QA and experiments.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const TestingPage = () => {
  return (
    <main className="min-h-screen bg-primary-bg">
      <Navbar />
      <div className="px-5 pb-10 pt-[50px] lg:px-[100px] lg:pt-[70px]">
        <h1 className="font-league-spartan text-[40px] font-bold text-primary lg:text-[56px]">
          Testing
        </h1>
        <p className="mt-2 max-w-xl font-gilroy-regular text-neutral-700">
          Sandbox for manual checks and feature spikes. Not linked from the main site navigation.
        </p>
      </div>

      <LatestInsightsTestingSection />

      <div className="px-5 pb-16 pt-10 lg:px-[100px] lg:pb-24">
        <div className="max-w-4xl">
          <TestingSection />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TestingPage;
