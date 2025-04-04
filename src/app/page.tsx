import ContactUs from "@/components/common/ContactUs";
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

const HomePage = () => {
  return (
    <main className="relative">
      {/* <Image
        src="/svg/blue-blur.svg"
        width={200}
        height={200}
        alt="blue-blur"
        className="w-[800px] h-[800px] object-cover absolute -top-24 -right-[25%]"
      /> */}
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
      <ContactUs />
      <Footer />
    </main>
  );
};

export default HomePage;
