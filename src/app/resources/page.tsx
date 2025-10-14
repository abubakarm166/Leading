"use client";
import Button from "@/components/common/Button";
import ContactUs from "@/components/common/ContactUs";
import FAQ from "@/components/common/FAQ";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Resource } from "@/types";
import { listFiles } from "@/utils/api/files";
import { useEffectAsync } from "@/utils/hooks";
import Image from "next/image";
import { useState } from "react";
const ResourcesPage = () => {
  const [resources, setResources] = useState<Resource[]>([]);

  const handleDownload = (type: string) => {
    if (resources && resources?.length > 0) {
      const item = resources?.find((el) => el.title === type);

      if (item) {
        window.open(item.file, "_blank");
      }
    }
  };

  useEffectAsync(async () => {
    const res = await listFiles();
    setResources(res);
  }, []);

  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px] pt-[50px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="order-2 lg:order-1 mt-10 lg:mt-0">
            <h1 className="font-league-spartan font-semibold text-[50px] lg:text-[70px] text-primary">
              Resources For Brokers
              <br />
              And Clients
            </h1>
            <p className="font-gilroy-regular font-extralight text-[24px] mt-5 lg:mt-[50px]">
              Access our essential resources below to help guide you
              <br />
              through our processes, products, and more.
            </p>
          </div>
          <Image
            src="/svg/resources.svg"
            width={200}
            height={200}
            alt="resources"
            className="w-[400px] h-[300px] object-cover order-1 lg:order-2"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-[50px] space-y-5 lg:space-y-0 mt-[70px] mb-[30px] lg:mb-[90px]">
          <div className="w-[350px] h-[300px] bg-white rounded-[32px] flex flex-col items-center justify-center">
            <Image
              src="/gif/introducer-agreement.gif"
              width={120}
              height={120}
              alt="gif"
              className="w-[120px] h-[120px] object-contain"
            />
            <p className="font-gilroy-bold font-bold text-[20px] mt-[10px] mb-[30px]">
              Introducer&apos;s Agreement
            </p>
            <Button onClick={() => handleDownload("introAgreement")}>
              <p className="text-white text-[15px]">DOWNLOAD</p>
            </Button>
          </div>
          <div className="w-[350px] h-[300px] bg-white rounded-[32px] flex flex-col items-center justify-center">
            <Image
              src="/gif/introducer-guide.gif"
              width={120}
              height={120}
              alt="gif"
              className="w-[120px] h-[120px] object-contain"
            />
            <p className="font-gilroy-bold font-bold text-[20px] mt-[10px] mb-[30px]">
              Product Guide
            </p>
            <Button onClick={() => handleDownload("productGuide")}>
              <p className="text-white text-[15px]">DOWNLOAD</p>
            </Button>
          </div>
          <div className="w-[350px] h-[300px] bg-white rounded-[32px] flex flex-col items-center justify-center">
            <Image
              src="/gif/introducer-form.gif"
              width={120}
              height={120}
              alt="gif"
              className="w-[120px] h-[120px] object-contain"
            />
            <p className="font-gilroy-bold font-bold text-[20px] mt-[10px] mb-[30px]">
              Application Form
            </p>
            <Button onClick={() => handleDownload("applicationForm")}>
              <p className="text-white text-[15px]">DOWNLOAD</p>
            </Button>
          </div>
        </div>
        <FAQ type="general" />
      </div>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default ResourcesPage;
