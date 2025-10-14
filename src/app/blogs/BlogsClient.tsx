"use client";
import BlogsCarousel from "@/components/common/BlogsCarousel";
import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Reveal from "@/components/common/Reveal";

export default function BlogsClient() {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px] py-[50px]">
        <Reveal>
          <h1 className="font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px]">
            Blogs, News And Updates
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-gilroy-regular font-extralight text-[24px] mb-[50px]">
            “Stay informed with the latest updates, news, and insights.”
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <BlogsCarousel slidesToShow={4} />
        </Reveal>
      </div>
      <Reveal delay={0.6}>
        <ClientBroker />
      </Reveal>
      <ContactUs />
      <Footer />
    </main>
  );
}
