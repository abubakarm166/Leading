import { ABOUT_ITEMS } from "@/utils/constants";
import Image from "next/image";
import Reveal from "../common/Reveal";

const About = () => {
  return (
    <section className="relative w-screen overflow-x-hidden bg-primary-bg px-5 lg:px-[100px] pt-[100px] lg:pt-[300px]">
      <div className="w-[390px] h-[390px] rounded-full bg-[#F4F8FD] absolute top-[20%] -right-32 hidden lg:block" />
      <div className="bg-primary rounded-[10px] lg:rounded-[20px] absolute top-[8%] lg:top-[40%] left-10 lg:left-42 w-[80%] lg:w-[40%] h-[40px] lg:h-[80px] z-[20] block 2xl:hidden">
        <p className="text-[24px] lg:text-[50px] font-league-spartan font-bold text-white text-center">
          About Lending Bridge
        </p>
      </div>
      <div className="w-[350px] h-[370px] rounded-[20px] bg-primary px-7 py-10 items-end absolute top-[35%] 2xl:top-[30%] left-[150px] z-10 hidden 2xl:flex">
        <p className="font-semibold text-white text-[50px]">
          About
          <br />
          Lending
          <br />
          Bridge
        </p>
      </div>
      <Reveal>
        <div className="relative border border-black rounded-[20px] p-5 lg:p-[50px] z-[5] bg-primary-bg pt-[40px] lg:pt-[80px] 2xl:pt-[40px]">
          <div className="flex flex-col space-y-[30px] lg:space-y-0 lg:flex-row items-center justify-between max-w-full 2xl:max-w-[75%] ml-auto">
            {ABOUT_ITEMS.map((item) => (
              <Reveal key={item.id} delay={item.id * 0.2}>
                <div
                  className={`flex flex-col items-center ${
                    item.id === 2 && "lg:border-x-[0.5px] border-x-[#8B8B8B]"
                  }`}
                >
                  <Image
                    src={item.img}
                    width={74}
                    height={74}
                    alt="img"
                    className="w-[74px] h-[74px] object-contain self-start ml-10"
                  />
                  <p className="text-[18px] mt-6 max-w-[80%]">{item.content}</p>
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
