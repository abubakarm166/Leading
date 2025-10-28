"use client";
import CaseStudiesCarousel from "@/components/common/CaseStudiesCarousel";
import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Head from "next/head";

const CaseStudiesPage = () => {
  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0D1MK5GB75"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0D1MK5GB75');
            `,
          }}
        />
      </Head>
      <main className="bg-primary-bg">
        <Navbar />
        <div className="px-5 lg:px-[100px]">
          <h2 className="font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px] py-[50px]">Case Studies</h2>
          <CaseStudiesCarousel />
        </div>
        <div className="mt-[50px]">
          <ClientBroker />
        </div>
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default CaseStudiesPage;
