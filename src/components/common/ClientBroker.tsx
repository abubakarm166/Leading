'use client';
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ClientBroker = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center w-full px-5 lg:px-[100px] h-[350px] rounded-[20px] overflow-hidden">
      <div className="w-[50%] h-full bg-white relative flex flex-col items-center justify-center rounded-l-[20px]">
        <p className="text-[18px] lg:text-[24px] font-gilroy-regular font-extralight mb-5">
          Are you a
        </p>
        <p className="text-[20px] lg:text-[50px] font-gilroy-bold font-bold mb-8">
          CLIENT?
        </p>
        <Button className="px-5 lg:px-[56px]" onClick={() => router.push('/contact-us')}>
          <p className="uppercase text-white text-[12px] lg:text-[15px]">
            Get Assistance
          </p>
        </Button>
        <Image
          src="/svg/client.svg"
          width={200}
          height={200}
          alt="client"
          className="w-[200px] h-[200px] absolute left-20 bottom-0 hidden lg:block"
        />
      </div>
      <div className="w-[50%] h-full bg-primary relative flex flex-col items-center justify-center rounded-r-[20px]">
        <p className="text-[18px] lg:text-[24px] font-gilroy-regular font-extralight mb-5 text-white">
          Are you a
        </p>
        <p className="text-[20px] lg:text-[50px] font-gilroy-bold font-bold mb-8 text-white">
          BROKER?
        </p>
        <Button className="bg-white px-5 lg:px-[56px]" onClick={() => router.push('/intermediaries?redirect=register')}>
          <p className="uppercase text-primary text-[12px] lg:text-[15px]">
            Get Assistance
          </p>
        </Button>
        <Image
          src="/svg/broker.svg"
          width={200}
          height={200}
          alt="broker"
          className="w-[238px] h-[238px] object-cover absolute right-0 -bottom-12 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default ClientBroker;
