"use client";
import Button from "@/components/common/Button";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Reveal from "@/components/common/Reveal";
import { PRODUCTS } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductList = () => {
  const router = useRouter();

  return (
    <section className="relative w-screen px-5 lg:px-[80px] mt-[150px] lg:mt-[200px]">
      <div className="border border-black rounded-[20px] px-[50px] py-[100px] relative">
        <div className="bg-primary p-3 lg:p-6 rounded-[20px] absolute -top-24 left-14 lg:left-[50px]">
          <p className="font-league-spartan text-[50px] lg:text-[70px] font-semibold text-white">
            List <br className="block lg:hidden" />
            Of Products
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-[50px] lg:gap-y-[100px]">
          {PRODUCTS.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={0.2 * idx}
              motionContainerClassName="flex min-h-full"
            >
              <div
                className={`flex flex-col justify-between space-y-4 max-w-full lg:max-w-[90%] ${
                  item.id % 3 !== 0
                    ? "border-none lg:border-r-[0.5px] border-r-[#8B8B8B] pr-0 lg:pr-5"
                    : ""
                }`}
              >
                <p className="text-[20px] font-semibold font-league-spartan">
                  {item.title}
                </p>
                <p className="font-gilroy-regular font-extralight text-[18px]">
                  {item.content.slice(0, 100)}...
                </p>
                <Button
                  className="max-w-[200px] px-10"
                  onClick={() => router.push(`/product/${item.slug}`)}
                >
                  <p className="uppercase text-white text-[15px]">View More</p>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductsPage = () => {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <section className="relative w-screen mt-[50px] px-5 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-full lg:max-w-[40%] order-2 lg:order-1">
            <Reveal>
              <h1 className="font-league-spartan font-bold text-[50px] lg:text-[75px] text-primary">
                Our Product
                <br />
                Range
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-gilroy-regular font-extralight text-[20px] 2xl:text-[25px] mt-[40px]">
                Discover our diverse range of products designed to meet the most
                complex needs. Our product range is crafted to suit every
                situation. We also want to add a point that mentions how we
                custom-make products based on very complex situations. We are
                determined to find the perfect solution for you!
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.5} className="order-1 lg:order-2 -mt-20 lg:-mt-0">
            <div>
              <Image
                src="/svg/all-products.svg"
                width={580}
                height={480}
                alt="products"
                className="w-[580px] h-[480px] object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <ProductList />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default ProductsPage;
