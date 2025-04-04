import Button from "@/components/common/Button";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";

const ResourcesPage = () => {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-[100px] mt-[50px]">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="font-league-spartan font-semibold text-[70px] text-primary">
              Resources For Brokers
              <br />
              And Clients
            </h1>
            <p className="font-gilroy-regular font-extralight text-[24px] mt-[50px]">
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
            className="w-[400px] h-[300px] object-cover"
          />
        </div>
        <div className="flex flex-row items-center justify-center space-x-[50px] mt-[70px]">
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
            <Button>
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
            <Button>
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
            <Button>
              <p className="text-white text-[15px]">DOWNLOAD</p>
            </Button>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default ResourcesPage;
