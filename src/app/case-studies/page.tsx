"use client";
import CaseStudiesCarousel from "@/components/common/CaseStudiesCarousel";
import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const CaseStudiesPage = () => {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px]">
        <h2 className="font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px] py-[50px]">
          Case Studies
        </h2>
        <CaseStudiesCarousel />
      </div>
      <div className="mt-[50px]">
        <ClientBroker />
      </div>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
