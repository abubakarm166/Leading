"use client";
import { SOCIAL_LINKS } from "@/utils/constants";
import Image from "next/image";

const Footer = () => {
  const handleOnAboutClick = () => {
    const about = document.getElementById("about");

    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="w-screen rounded-t-[20px] bg-primary px-5 lg:px-[100px] py-[60px] pb-[35px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <p className="font-league-spartan font-semibold text-white text-[44px]">Lending Bridge</p>
            <p className="font-gilroy-regular font-extralight text-[18px] text-white mt-5 lg:my-10 w-full lg:max-w-[60%] 2xl:max-w-[70%]">
              At Lending Bridge we specialize in bridge loans on buy-to-let, residential, commercial and semi-commercial
              properties.. Our fast, efficient and reliable short-term financial solutions are made simple and stress-free.
            </p>
            <div className="flex-row space-x-5 flex mt-6 lg:mt-0">
              <Image
                src="/svg/footer-google.svg"
                width={35}
                height={35}
                alt="google"
                className="w-[35px] h-[35px] cursor-pointer"
                onClick={() => window.open(SOCIAL_LINKS.google, "_blank")}
              />
              <div
                className="w-[35px] h-[35px] flex items-center justify-center bg-white rounded-[4px] cursor-pointer"
                onClick={() => window.open(SOCIAL_LINKS.facebook, "_blank")}
              >
                <Image src="/svg/footer-fb.svg" width={18} height={18} alt="fb" className="w-[18px] h-[18px] cursor-pointer" />
              </div>
              <Image
                src="/svg/footer-insta.svg"
                width={35}
                height={35}
                alt="insta"
                className="w-[35px] h-[35px] cursor-pointer"
                onClick={() => window.open(SOCIAL_LINKS.instagram, "_blank")}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full mt-10 text-right">
            <div className="flex flex-col items-start lg:items-end space-y-5 lg:w-[30%] lg:ml-auto">
              <p className="font-league-spartan text-[18px] text-white font-bold">Quick Links</p>
              <div className="flex flex-row lg:flex-col items-end space-x-5 lg:space-x-0 lg:space-y-5">
                <p
                  className="font-gilroy-regular font-extralight text-[16px] text-white cursor-pointer"
                  onClick={handleOnAboutClick}
                >
                  About Us
                </p>
                {/* <a className="font-gilroy-regular font-extralight text-[16px] text-white">
                Process
              </a> */}
                <a href="/team" className="font-gilroy-regular font-extralight text-[16px] text-white">
                  Team
                </a>
                <a href="/resources" className="font-gilroy-regular font-extralight text-[16px] text-white">
                  Resources
                </a>
                <a href="/case-studies" className="font-gilroy-regular font-extralight text-[16px] text-white">
                  Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-primary-bg py-5 w-full flex flex-row items-center justify-between px-5 lg:px-[100px]">
        <div className="flex-row items-center justify-between hidden lg:flex lg:w-full">
          <p className="font-gilroy-regular font-extralight text-[18px]">© 2025 Lending Bridge all rights reserved</p>
          <p className="font-gilroy-regular font-extralight text-[18px]">
            Powered by Tech<span className="text-[#FF0000]">G</span>y Innovations
          </p>
        </div>
        <p className="font-gilroy-regular mx-auto text-center font-extralight text-[18px] block lg:hidden">
          © 2025 Lending Bridge all rights reserved <br />
          Powered by Tech
          <span className="text-[#FF0000]">G</span>y Innovations
        </p>
      </div>
    </>
  );
};

export default Footer;
