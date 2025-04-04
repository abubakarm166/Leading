"use client";
import BlogsCarousel from "@/components/common/BlogsCarousel";
import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const BlogsPage = () => {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-[100px] mt-[50px]">
        <h1 className="font-league-spartan font-semibold text-primary text-[70px]">
          Blogs, News And Updates
        </h1>
        <p className="font-gilroy-regular font-extralight text-[24px] mb-[50px]">
          “Stay informed with the latest updates, news, and insights.”
        </p>
        <BlogsCarousel slidesToShow={4} />
      </div>
      <ClientBroker />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default BlogsPage;
