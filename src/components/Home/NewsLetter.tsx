"use client";
import { addNewsletter } from "@/utils/api/newsletter";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../common/Button";
import Input from "../common/Input";

const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddSubscription = async () => {
    if (!name || !email) {
      return toast.error("Please enter your name and email");
    }

    setIsLoading(true);
    await addNewsletter({
      name,
      email,
    });
    setName("");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="w-screen relative bg-primary-bg px-0 lg:px-[50px] 2xl:px-[100px] lg:py-[100px]">
      <div className="flex flex-row items-stretch lg:rounded-[20px] overflow-hidden">
        <div className="bg-[#C5D3DD] px-5 py-[50px] lg:p-[50px] w-full lg:w-[60%] 2xl:w-[70%]">
          <div className="w-full bg-primary px-5 py-[30px] lg:p-[50px] rounded-[20px]">
            <p className="font-league-spartan text-white font-semibold text-[40px]">
              Subscibe to Our Newsletter
            </p>
            <Input
              placeholder="Full Name"
              className="mt-[30px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email Address"
              className="mt-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="bg-white mt-[30px] w-full lg:w-auto"
              isLoading={isLoading}
              onClick={handleAddSubscription}
            >
              <p className="text-primary text-[16px] font-bold uppercase">
                Subscribe
              </p>
            </Button>
          </div>
        </div>
        <div className="w-[40%] 2xl:w-[30%] min-h-full bg-white items-center justify-center hidden lg:flex">
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
