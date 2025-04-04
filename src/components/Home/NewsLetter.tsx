import Image from "next/image";
import Button from "../common/Button";
import Input from "../common/Input";

const NewsLetter = () => {
  return (
    <section className="w-screen relative bg-primary-bg px-[50px] 2xl:px-[100px] py-[100px]">
      <div className="flex flex-row items-stretch rounded-[20px] overflow-hidden">
        <div className="bg-[#C5D3DD] p-[50px] w-[70%]">
          <div className="w-full bg-primary p-[50px] rounded-[20px]">
            <p className="text-white font-semibold text-[40px]">
              Subscibe to Our Newsletter
            </p>
            <Input placeholder="Full Name" className="mt-[30px]" />
            <Input placeholder="Email Address" className="mt-5" />
            <Button className="bg-white mt-[30px]">
              <p className="text-primary text-[16px] font-bold uppercase">
                Subscribe
              </p>
            </Button>
          </div>
        </div>
        <div className="w-[30%] min-h-full bg-white flex items-center justify-center">
          <Image
            src="/gif/newsletter.gif"
            width={200}
            height={200}
            alt="newsletter"
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
