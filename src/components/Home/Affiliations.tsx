import Image from "next/image";
import Reveal from "../common/Reveal";

const Affiliations = () => {
  return (
    <section className="relative overflow-x-hidden bg-primary-bg pt-[100px]">
      <Reveal>
        <div className="bg-white w-full py-[50px] flex items-center justify-center border-y border-y-primary">
          <p className="font-medium text-[30px] text-primary mr-[100px]">
            Our Affiliations:
          </p>
          <div className="flex flex-row items-center space-x-20">
            <Image
              src="/svg/affiliation-one.svg"
              width={200}
              height={200}
              alt="one"
              className="w-[122px] h-[45px] object-contain"
            />
            <Image
              src="/svg/affiliation-two.svg"
              width={200}
              height={200}
              alt="two"
              className="w-[80px] h-[80px] object-contain"
            />
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
