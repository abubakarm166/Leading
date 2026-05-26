"use client";
import Button from "@/components/common/Button";
import ProductContentHtml from "@/components/common/ProductContentHtml";
import Reveal from "@/components/common/Reveal";
import { PRODUCT_KEY_INFO, PRODUCTS } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const ProductKeyInfo = () => {
  return (
    <div className="border border-black px-5 lg:px-[50px] pt-[50px] lg:pt-[150px] pb-[50px] rounded-[20px] mt-[100px] lg:mt-[300px] mx-5 lg:mx-[100px] relative">
      <div className="rounded-[20px] bg-primary p-2 lg:p-6 absolute -top-10 lg:-top-20 left-1/2 -translate-x-1/2 lg:translate-x-0 w-[350px] lg:w-auto text-center lg:left-10">
        <p className="font-semibold font-league-spartan text-[30px] lg:text-[70px] text-white">Key Information For You</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10">
        {PRODUCT_KEY_INFO.map((item) => (
          <Reveal key={item.id} delay={0.2 * item.id} motionContainerClassName="flex min-h-full">
            <div className={`lg:pl-10 ${item.id % 3 === 0 ? "border-none" : "lg:border-r-[0.5px]"} border-r-[#8B8B8B]`}>
              <Image src={item.img} width={75} height={75} alt="item" sizes="75px" className="w-[75px] h-[75px] object-contain" />
              <p className="font-league-spartan font-semibold text-[20px] text-black mt-5">{item.title}</p>
              <div className="max-w-[70%] lg:max-w-[80%] 2xl:max-w-[70%]">
                <p className="font-gilroy-regular font-extralight text-[18px] my-5">{item.content}</p>
                <p className="font-gilroy-regular font-extralight text-[18px] my-5">{item.quote}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="text-center mt-10 w-full">
        <Reveal>
          <p className="text-[40px] lg:text-[70px] font-semibold font-league-spartan text-primary">One Deal, One Manager!</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-5 text-[24px] font-gilroy-regular max-w-full lg:max-w-[80%] 2xl:max-w-[50%] mx-auto">
            We make it simple! Talk to one account manager from enquiry to completion for all your queries! No hassle and
            extremely simple to follow{" "}
          </p>
        </Reveal>
      </div>
    </div>
  );
};

const ProductHighlights = ({ id }: { id: string }) => {
  const product = PRODUCTS.find((item) => `${item.slug}` === id);

  return (
    <div className="bg-primary-bg">
      <Reveal>
        <h2 className="font-semibold text-center font-league-spartan text-primary text-[40px] lg:text-[70px] mb-[50px]">
          Highlights Of The Product
        </h2>
      </Reveal>
      <div
        className={`flex flex-col lg:flex-row items-center justify-center space-y-5 lg:space-y-0 lg:space-x-12 flex-wrap px-10`}
      >
        {product &&
          product?.highlights?.length > 0 &&
          product.highlights.map((el, idx) => (
            <Reveal delay={0.2} key={idx} className="lg:mt-10">
              <div className="w-[225px] h-[225px] bg-white rounded-[32px] flex items-center justify-center flex-col px-5">
                <Image src={el.img} width={120} height={120} alt="discount" sizes="120px" className="w-[120px] h-[120px] object-contain" />
                <p className="font-gilroy-regular text-[14px] font-extralight mt-[6px] text-center">{el.title}</p>
              </div>
            </Reveal>
          ))}
      </div>
    </div>
  );
};

const ProductHero = ({ id }: { id: string }) => {
  const router = useRouter();
  // const product = PRODUCTS.find((p) => p.slug === id);

  const product = useMemo(() => {
    return PRODUCTS.find(p => p.slug === id);
  }, [id])

  const handleOnCalculatorClick = () => {
    const calc = document.getElementById("calculator");

    if (calc) {
      calc.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-x-hidden bg-primary-bg px-5 pb-8 pt-5 sm:px-6 md:pt-6 lg:mx-auto lg:max-w-[1440px] lg:px-8 lg:pb-10 lg:pt-8 xl:px-10">
      {/* Same card hero for every product slug — stack on small screens, row from lg */}
      <div className="flex flex-col gap-8 rounded-[28px] border border-primary/[0.14] bg-white p-6 shadow-[0_16px_56px_-16px_rgba(20,41,84,0.18)] sm:p-8 lg:flex-row lg:items-start lg:gap-8 lg:p-10 xl:gap-10 xl:p-11 2xl:min-h-[430px]">
        <div className="min-w-0 flex-1 lg:basis-[50%]">
          <Reveal>
            <h1 className="font-league-spartan text-[32px] font-bold leading-[1.12] text-primary sm:text-[38px] lg:text-[44px] xl:text-[48px]">
              {product?.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <ProductContentHtml
              html={product?.content ?? ""}
              className="product-hero-body mt-4 max-w-full text-[15px] font-extralight text-[#2c2c2c] sm:mt-5 sm:text-[16px] lg:mt-6 lg:max-w-[46ch] xl:text-[17px]"
            />
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-row flex-wrap items-center gap-3 sm:mt-7 lg:mt-8 lg:gap-4">
              <Button
                className="bg-transparent border border-primary h-[46px] w-[170px] px-3 lg:h-[52px] lg:w-[210px] lg:px-5"
                onClick={() => router.push("/contact-us")}
              >
                <p className="w-full text-center font-bold text-primary text-[13px] lg:text-[16px] uppercase">
                  Enquire Now
                </p>
              </Button>
              <Button className="h-[46px] w-[170px] px-3 lg:h-[52px] lg:w-[210px] lg:px-5" onClick={handleOnCalculatorClick}>
                <p className="w-full text-center font-bold text-white text-[13px] lg:text-[16px] uppercase">
                  Calculate Now
                </p>
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal
          delay={0.35}
          className="flex w-full shrink-0 justify-center lg:w-[46%] lg:min-w-[320px] lg:max-w-[580px] lg:justify-center"
        >
          <div className="relative w-full max-w-[min(100%,580px)] lg:max-w-none">
            <Image
              src={product?.img as string}
              width={640}
              height={480}
              alt={product?.title ?? ""}
              className="h-auto w-full object-contain object-center drop-shadow-[0_20px_40px_rgba(20,41,84,0.15)]"
              sizes="(max-width:1024px) min(580px,100vw) 560px"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default function ProductPageClient({ productSlug }: { productSlug: string }) {
  return (
    <>
      <ProductHero id={productSlug} />
      <ProductHighlights id={productSlug} />
      <ProductKeyInfo />
    </>
  );
}
