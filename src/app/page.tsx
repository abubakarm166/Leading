import ContactUs from "@/components/common/ContactUs";
import FAQ from "@/components/common/FAQ";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import About from "@/components/Home/About";
import Affiliations from "@/components/Home/Affiliations";
import Awards from "@/components/Home/Awards";
import Blogs from "@/components/Home/Blogs";
import Calculator from "@/components/Home/Calculator";
import CaseStudies from "@/components/Home/CaseStudies";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Highlights from "@/components/Home/Highlights";
import LoanProcess from "@/components/Home/LoanProcess";
import NewsLetter from "@/components/Home/NewsLetter";
import Products from "@/components/Home/Products";
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
    <main className="relative bg-primary-bg">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <LoanProcess />
      <Calculator />
      <Products />
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
  );
};

export default HomePage;
