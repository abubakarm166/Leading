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
    <div className="relative mx-5 mt-[100px] rounded-[20px] border border-black px-5 pb-[50px] pt-[50px] lg:mx-[100px] lg:mt-[300px] lg:px-[50px] lg:pt-[150px]">
      <div className="absolute -top-10 left-1/2 w-[min(100%,calc(100vw-2.5rem))] max-w-[520px] -translate-x-1/2 rounded-[20px] bg-primary p-2 text-center lg:left-10 lg:top-[-5rem] lg:w-auto lg:max-w-none lg:translate-x-0 lg:p-6">
        <p className="font-league-spartan text-[24px] font-semibold leading-tight text-white sm:text-[30px] lg:text-[70px]">
          Key Information For You
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3">
        {PRODUCT_KEY_INFO.map((item) => (
          <Reveal
            key={item.id}
            delay={0.2 * item.id}
            motionContainerClassName="flex min-h-full"
          >
            <div
              className={`lg:pl-10 ${item.id % 3 === 0 ? "border-none" : "lg:border-r-[0.5px]"} border-r-[#8B8B8B]`}
            >
              <Image
                src={item.img}
                width={75}
                height={75}
                alt="item"
                sizes="75px"
                className="h-[75px] w-[75px] object-contain"
              />
              <p className="mt-5 font-league-spartan text-[20px] font-semibold text-black">
                {item.title}
              </p>
              <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%]">
                <p className="my-5 font-gilroy-regular text-[18px] font-extralight">
                  {item.content}
                </p>
                <p className="my-5 font-gilroy-regular text-[18px] font-extralight">
                  {item.quote}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 w-full text-center">
        <Reveal>
          <p className="font-league-spartan text-[40px] font-semibold text-primary lg:text-[70px]">
            One Deal, One Manager!
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-5 max-w-full font-gilroy-regular text-[24px] lg:max-w-[80%] 2xl:max-w-[50%]">
            We make it simple! Talk to one account manager from enquiry to
            completion for all your queries! No hassle and extremely simple to
            follow.
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
        <h2 className="mb-[50px] text-center font-league-spartan text-[40px] font-semibold text-primary lg:text-[70px]">
          Highlights Of The Product
        </h2>
      </Reveal>
      <div className="flex flex-col flex-wrap items-center justify-center space-y-5 px-10 lg:flex-row lg:space-x-12 lg:space-y-0">
        {product &&
          product.highlights?.length > 0 &&
          product.highlights.map((el, idx) => (
            <Reveal delay={0.2} key={idx} className="lg:mt-10">
              <div className="flex min-h-[225px] w-[225px] flex-col items-center justify-center rounded-[32px] bg-white px-4 py-5">
                <Image
                  src={el.img}
                  width={120}
                  height={120}
                  alt="discount"
                  sizes="120px"
                  className="h-[100px] w-[100px] shrink-0 object-contain"
                />
                <p className="mt-2 text-center font-gilroy-regular text-[14px] font-extralight leading-snug">
                  {el.title}
                </p>
              </div>
            </Reveal>
          ))}
      </div>
    </div>
  );
};

const ProductHero = ({ id }: { id: string }) => {
  const router = useRouter();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.slug === id);
  }, [id]);

  const handleOnCalculatorClick = () => {
    const calc = document.getElementById("calculator");

    if (calc) {
      calc.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-x-hidden bg-primary-bg px-5 pb-8 pt-5 sm:px-6 md:pt-6 lg:mx-auto lg:max-w-[1440px] lg:px-8 lg:pb-10 lg:pt-8 xl:px-10">
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
                className="h-[46px] w-[170px] border border-primary bg-transparent px-3 lg:h-[52px] lg:w-[210px] lg:px-5"
                onClick={() => router.push("/contact-us")}
              >
                <p className="w-full text-center text-[13px] font-bold uppercase text-primary lg:text-[16px]">
                  Enquire Now
                </p>
              </Button>
              <Button
                className="h-[46px] w-[170px] px-3 lg:h-[52px] lg:w-[210px] lg:px-5"
                onClick={handleOnCalculatorClick}
              >
                <p className="w-full text-center text-[13px] font-bold uppercase text-white lg:text-[16px]">
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
              sizes="(max-width:1024px) min(580px,100vw), 560px"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default function ProductPageClient({
  productSlug,
}: {
  productSlug: string;
}) {
  return (
    <>
      <ProductHero id={productSlug} />
      <ProductHighlights id={productSlug} />
      <ProductKeyInfo />
    </>
  );
}
