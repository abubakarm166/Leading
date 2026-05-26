import ContactUs from "@/components/common/ContactUs";
import { ClientOnly } from "@/components/common/ClientOnly";
import FAQ from "@/components/common/FAQ";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Calculator from "@/components/Home/Calculator";
import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/Home/About"));
const Affiliations = dynamic(() => import("@/components/Home/Affiliations"));
const Awards = dynamic(() => import("@/components/Home/Awards"));
const Blogs = dynamic(() => import("@/components/Home/Blogs"));
const CaseStudies = dynamic(() => import("@/components/Home/CaseStudies"));
const Features = dynamic(() => import("@/components/Home/Features"));
const Highlights = dynamic(() => import("@/components/Home/Highlights"));
const LoanProcess = dynamic(() => import("@/components/Home/LoanProcess"));
const NewsLetter = dynamic(() => import("@/components/Home/NewsLetter"));

export const metadata = {
  title: "Bridging Finance Experts | Lending Bridge",
  description:
    "Get quick, reliable bridging loans for residential & commercial properties in the UK. Expert support, fast approvals.",
  keywords: ["bridging loan", "property finance", "latest news", "insights", "market trends", "investment opportunities"],

  // ✅ Robots meta
  robots: "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/",
  },

  openGraph: {
    title: "Latest News & Insights on Bridging Loans | Lending Bridge",
    description:
      "Discover the latest insights, tips, and market news on bridging loans and property finance from Lending Bridge.",
    // images: [{ url: '/og-about.jpg', width: 1200, height: 630 }],
  },
};

const HomePage = () => {
  return (
    <>
      <main className="relative overflow-x-clip bg-primary-bg">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <LoanProcess />
        <ClientOnly
          fallback={
            <section
              className="relative min-h-[480px] w-screen overflow-x-hidden bg-primary-bg px-5 pt-[150px] lg:px-[80px] lg:pt-[200px]"
              aria-hidden
            />
          }
        >
          <Calculator />
        </ClientOnly>
        <ClientOnly
          fallback={
            <section
              className="relative min-h-[280px] w-screen overflow-x-hidden bg-primary-bg px-5 pt-[50px] lg:px-[80px] lg:pt-[100px]"
              aria-hidden
            />
          }
        >
          <Products />
        </ClientOnly>
        <Highlights />
        <Affiliations />
        <CaseStudies />
        <Awards />
        <Blogs />
        <NewsLetter />
        <div className="px-5 lg:px-[80px] pt-10 lg:pt-20 bg-primary-bg">
          <FAQ type="general" />
        </div>
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
