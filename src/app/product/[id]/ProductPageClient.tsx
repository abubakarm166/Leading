"use client";
import Button from "@/components/common/Button";
import Reveal from "@/components/common/Reveal";
import { PRODUCT_KEY_INFO, PRODUCTS } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductKeyInfo = () => {
  return (
    <div className="border border-black px-5 lg:px-[50px] pt-[50px] lg:pt-[150px] pb-[50px] rounded-[20px] mt-[100px] lg:mt-[300px] mx-5 lg:mx-[100px] relative">
      <div className="rounded-[20px] bg-primary p-2 lg:p-6 absolute -top-10 lg:-top-20 left-1/2 -translate-x-1/2 lg:-translate-x-0 w-[350px] lg:w-auto text-center lg:left-10">
        <p className="font-semibold font-league-spartan text-[30px] lg:text-[70px] text-white">Key Information For You</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10">
        {PRODUCT_KEY_INFO.map((item) => (
          <Reveal key={item.id} delay={0.2 * item.id} motionContainerClassName="flex min-h-full">
            <div className={`lg:pl-10 ${item.id % 3 === 0 ? "border-none" : "lg:border-r-[0.5px]"} border-r-[#8B8B8B]`}>
              <Image src={item.img} width={75} height={75} alt="item" className="w-[75px] h-[75px] object-contain" />
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
                <Image src={el.img} width={120} height={120} alt="discount" className="w-[120px] h-[120px] object-contain" />
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
  const product = PRODUCTS.find((p) => p.slug === id);

  const handleOnCalculatorClick = () => {
    const calc = document.getElementById("calculator");

    if (calc) {
      calc.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-screen xl:min-h-dvh overflow-x-hidden bg-primary-bg px-5 lg:px-[100px] pt-5 lg:pt-[100px] mb-20 xl:mb-0">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="order-2 lg:order-1 mt-5 lg:mt-0">
          <Reveal>
            <h1 className="text-[40px] lg:text-[50px] 2xl:text-[75px] font-bold text-primary font-league-spartan max-w-full lg:max-w-[60%]">
              {product?.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="my-[50px] text-[16px] 2xl:text-[25px] font-gilroy-regular font-extralight max-w-full lg:max-w-[60%]">
              {product?.content}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-row items-center space-x-5">
              <Button
                className="bg-transparent border border-primary w-[180px] lg:w-auto px-4 lg:px-[56px]"
                onClick={() => router.push("/contact-us")}
              >
                <p className="font-bold text-primary text-[14px] lg:text-[20px] uppercase">Enquire Now</p>
              </Button>
              <Button className="w-[180px] lg:w-auto px-4 lg:px-[56px]" onClick={handleOnCalculatorClick}>
                <p className="font-bold text-white text-[14px] lg:text-[20px] uppercase">Calculate Now</p>
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.6} className="order-1 lg:order-2 w-full">
          <Image
            src={product?.img as string}
            width={200}
            height={200}
            alt="hero"
            className="w-[460px] h-[302px] 2xl:w-[560px] 2xl:h-[402px] object-contain"
          />
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
