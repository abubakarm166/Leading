import { ABOUT_ITEMS } from "@/utils/constants";
import Image from "next/image";
import Reveal from "../common/Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-screen overflow-x-hidden bg-primary-bg px-5 md:px-10 lg:px-[80px] pt-[120px] md:pt-[150px] lg:pt-[300px]"
    >
      {/* Soft circular background for desktop */}
      <div
        className="hidden lg:block absolute rounded-full bg-[#F4F8FD]
          w-[40vw] h-[40vw] md:w-[35vw] md:h-[35vw] lg:w-[390px] lg:h-[390px]
          top-[15%] md:top-[20%] -right-16 md:-right-24 lg:-right-32"
      />

      {/* Mobile & Tablet Card */}
      <div
        className="flex items-center justify-start bg-primary rounded-[16px] absolute
          top-[5%] left-[5%] w-[90%] h-[90px] md:w-[60%] md:h-[70px]
          px-4 z-20 lg:hidden"
      >
        <p className="text-[28px] md:text-[22px] font-league-spartan font-bold text-white leading-tight">
          About <br className="md:hidden" /> Lending Bridge
        </p>
      </div>

      {/* Desktop Card */}
      <div
        className="hidden lg:flex flex-col justify-end absolute
          top-[30%] md:top-[32%] left-[80px] md:left-[100px] lg:left-[120px]
          w-[40%] lg:w-[250px] lg:h-[200px] 2xl:w-[350px] 2xl:h-[370px] h-[370px] rounded-[20px] bg-primary
          px-7 py-10 z-10"
      >
        <p className="text-[50px]  lg:text-[28px] 2xl:text-[60px] font-league-spartan font-semibold text-white leading-tight">
          About <br /> Lending <br /> Bridge
        </p>
      </div>

      {/* Features Section */}
      <Reveal>
        <div className="relative border border-black rounded-[20px] p-5 lg:p-[50px] bg-primary-bg z-5 pt-[70px] lg:pt-[20px] 2xl:pt-[40px] lg:max-h-[354px]">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:max-w-[72%] 2xl:max-w-[75%] ml-auto">
            {ABOUT_ITEMS.map((item) => (
              <Reveal key={item.id} delay={item.id * 0.2}>
                <div
                  className={`flex flex-col items-start lg:items-center ${
                    item.id === 2 ? "lg:border-x-[0.5px] border-x-[#8B8B8B]" : ""
                  }`}
                >
                  <Image
                    src={item.img}
                    width={74}
                    height={74}
                    alt={item.content}
                    className="w-[74px] h-[74px] object-contain self-start lg:ml-10"
                  />
                  <p className="text-[16px] md:text-[16px] mt-4 max-w-[80%] font-gilroy-regular">
                    {item.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
