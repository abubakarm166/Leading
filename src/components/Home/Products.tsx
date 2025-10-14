"use client";
import { PRODUCTS } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const Products = () => {
  const router = useRouter();

  return (
    <section className="relative w-screen bg-primary-bg pt-[50px] lg:pt-[100px] px-5 lg:px-[80px] overflow-x-hidden">
      <Reveal>
        <h2 className="font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px] text-left lg:text-center lg:mb-[50px]">
          Explore <br className="block lg:hidden" />
          Our Products
        </h2>
      </Reveal>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <Reveal delay={0.3}>
          <Image
            src="/svg/explore-products.svg"
            width={200}
            height={200}
            alt="explore"
            className="w-[280px] h-[280px] 2xl:w-[340px] 2xl:h-[380px] object-cover hidden lg:block"
          />
        </Reveal>
        <div className="font-gilroy-regular font-extralight max-w-full mt-5 lg:mt-0 lg:max-w-[70%]">
          <Reveal delay={0.5}>
            <p className="text-[18px] mb-5">
              Discover our diverse range of products designed to meet the most
              complex needs. Our product range is crafted to suit every
              situation.
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <p className="text-[18px] mb-5">
              We also want to add a point that mentions how we custom-make
              products based on very complex situations. We are determined to
              find the perfect solution for you!
            </p>
          </Reveal>
          <Reveal
            delay={1}
            className="w-full border border-black rounded-[20px] p-5"
          >
            <div
              className="overflow-x-scroll overflow-y-hidden flex flex-row items-center space-x-5"
              id="products-container"
            >
              {PRODUCTS.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[350px] h-[133px] rounded-[10px] bg-white p-5 flex flex-col justify-between"
                >
                  <p className="text-[20px] font-league-spartan font-medium">
                    {item.title}
                  </p>
                  <Button
                    className="w-[200px] h-[50px] p-0"
                    onClick={() => router.push(`/products/${item.slug}`)}
                  >
                    <p className="uppercase text-white">Read More</p>
                  </Button>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Products;
