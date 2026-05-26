import Image from "next/image";
import Reveal from "../common/Reveal";

const Affiliations = () => {
  return (
    <section className="relative overflow-x-hidden bg-primary-bg -mt-10 lg:-mt-10 2xl:-mt-0">
      <Reveal>
        <div className="bg-white w-full py-[50px] flex flex-col lg:flex-row items-center justify-center border-y border-y-primary">
          <p className="font-league-spartan font-medium text-[30px] text-primary lg:mr-[165px] mb-6 lg:mb-0">
            Our Affiliations:
          </p>
          <div className="flex flex-row items-center space-x-5 lg:space-x-20">
            {/* <Image
              src="/svg/affiliation-one.svg"
              width={200}
              height={200}
              alt="one"
              className="w-[122px] h-[46px] lg:h-[45px] object-contain"
            />
            <Image
              src="/images/fiba-logo.png"
              width={200}
              height={200}
              alt="two"
              className="w-[80px] lg:w-[200px] h-[80px] lg:h-[80px] object-contain"
            /> */}
            <Image
              src="/svg/affiliation-three.svg"
              width={200}
              height={200}
              alt="three"
              className="w-[85px] h-[56px] object-contain"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Affiliations;
