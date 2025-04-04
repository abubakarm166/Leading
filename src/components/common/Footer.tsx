import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="w-screen rounded-t-[20px] bg-primary px-[100px] py-[60px] pb-[35px]">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="font-league-spartan font-semibold text-white text-[44px]">
              Lending Bridge
            </p>
            <p className="font-gilroy-regular font-extralight text-[18px] text-white my-10 max-w-[60%] 2xl:max-w-[40%]">
              At Lending Bridge we specialize in bridge loans on buy-to-let and
              commercial properties. Our fast, efficient and reliable short-term
              financial solutions are made simple and stress-free.
            </p>
            <div className="flex flex-row space-x-5">
              <Image
                src="/svg/footer-google.svg"
                width={35}
                height={35}
                alt="google"
                className="w-[35px] h-[35px] cursor-pointer"
              />
              <Image
                src="/svg/footer-fb.svg"
                width={35}
                height={35}
                alt="fb"
                className="w-[35px] h-[35px] cursor-pointer"
              />
              <Image
                src="/svg/footer-insta.svg"
                width={35}
                height={35}
                alt="insta"
                className="w-[35px] h-[35px] cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col items-end space-y-5 w-[30%]">
            <p className="font-league-spartan text-[18px] text-white font-bold">
              Quick Links
            </p>
            <a className="font-gilroy-regular font-extralight text-[16px] text-white">
              About Us
            </a>
            <a className="font-gilroy-regular font-extralight text-[16px] text-white">
              Process
            </a>
            <a className="font-gilroy-regular font-extralight text-[16px] text-white">
              Team
            </a>
            <a className="font-gilroy-regular font-extralight text-[16px] text-white">
              Resources
            </a>
            <a className="font-gilroy-regular font-extralight text-[16px] text-white">
              Case Studies
            </a>
          </div>
        </div>
      </section>
      <div className="bg-primary-bg py-5 w-full flex flex-row items-center justify-between px-[100px]">
        <p className="font-gilroy-regular font-extralight text-[18px]">
          © 2025 Lending Bridge all rights reserved
        </p>
        <p className="font-gilroy-regular font-extralight text-[18px]">
          Powered by Tech<span className="text-[#FF0000]">G</span>y Innovations
        </p>
      </div>
    </>
  );
};

export default Footer;
