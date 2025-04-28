"use client";
import { PRODUCTS } from "@/utils/constants";
import useNavStore from "@/utils/store/nav";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const WORK_OPTIONS = [
  { title: "Blogs", href: "/blogs" },
  { title: "Case Studies", href: "/case-studies" },
];

const BROKER_OPTIONS = [
  { title: "Intermediaries", href: "/intermediaries" },
  { title: "Resources", href: "/resources" },
];

const MobileNav = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [menuItemSelected, setMenuItemSelected] = useState<
    "product" | "work" | "broker" | ""
  >("");
  const isNavOpen = useNavStore((state) => state.isOpen);
  const onNavChange = useNavStore((state) => state.onChange);

  const router = useRouter();

  const handleOnClickItem = (link: string) => {
    onNavChange(false);
    router.push(link);
  };

  const getSubMenu = () => {
    return (
      <div className="flex-col items-center space-y-[30px] mt-[130px]">
        {menuItemSelected === "product"
          ? PRODUCTS.map((item) => (
              <p
                key={item.id}
                className="font-semibold font-league-spartan text-[25px]"
                onClick={() => {
                  setMenuItemSelected("");
                  setIsSubMenuOpen(false);
                  onNavChange(false);
                  router.push(`/product/${item.slug}`);
                }}
              >
                {item.title}
              </p>
            ))
          : menuItemSelected === "work"
          ? WORK_OPTIONS.map((item) => (
              <p
                key={item.title}
                className="font-semibold font-league-spartan text-[25px]"
                onClick={() => {
                  setMenuItemSelected("");
                  setIsSubMenuOpen(false);
                  onNavChange(false);
                  router.push(item.href);
                }}
              >
                {item.title}
              </p>
            ))
          : BROKER_OPTIONS.map((item) => (
              <p
                key={item.title}
                className="font-semibold font-league-spartan text-[25px]"
                onClick={() => {
                  setMenuItemSelected("");
                  setIsSubMenuOpen(false);
                  onNavChange(false);
                  router.push(item.href);
                }}
              >
                {item.title}
              </p>
            ))}
      </div>
    );
  };

  useEffect(() => {
    const root = document.querySelector("html");
    if (root) {
      if (isNavOpen) {
        root.style.overflowY = "hidden";
      } else {
        root.style.overflowY = "visible";
      }
    }
  }, [isNavOpen]);

  return (
    <>
      {isNavOpen && (
        <motion.div
          className="w-screen h-screen bg-white absolute left-0 top-0 opacity-80"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0.8 },
          }}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/svg/mobile-nav-close.svg"
            width={26}
            height={46}
            alt="close"
            className="w-[26px] h-[46px] object-contain absolute top-[30px] right-[40px]"
            onClick={() => {
              setMenuItemSelected("");
              setIsSubMenuOpen(false);
              onNavChange(false);
            }}
          />
          {isSubMenuOpen && (
            <Image
              src="/svg/arrow-left.svg"
              width={14}
              height={24}
              className="w-10 h-10 object-cover absolute top-[30px] left-10"
              alt="arrow-left"
              onClick={() => {
                setIsSubMenuOpen(false);
                setMenuItemSelected("");
              }}
            />
          )}
          <div className="h-full flex flex-col items-center justify-between">
            {isSubMenuOpen ? (
              getSubMenu()
            ) : (
              <div className="flex flex-col space-y-12 mt-[130px]">
                <Reveal>
                  <div
                    className="flex flex-row items-center space-x-4"
                    onClick={() => {
                      setMenuItemSelected("product");
                      setIsSubMenuOpen(true);
                    }}
                  >
                    <p className="font-semibold font-league-spartan text-[25px]">
                      Our Products
                    </p>
                    <Image
                      src="/svg/chevron-down-black.svg"
                      width={11}
                      height={7}
                      alt="chevron-black"
                      className="w-[11px] h-[7px] object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div
                    className="flex flex-row items-center space-x-4"
                    onClick={() => {
                      setMenuItemSelected("work");
                      setIsSubMenuOpen(true);
                    }}
                  >
                    <p className="font-semibold font-league-spartan text-[25px]">
                      Our Work
                    </p>
                    <Image
                      src="/svg/chevron-down-black.svg"
                      width={11}
                      height={7}
                      alt="chevron-black"
                      className="w-[11px] h-[7px] object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <p
                    className="font-semibold font-league-spartan text-[25px]"
                    onClick={() => handleOnClickItem("/team")}
                  >
                    Team
                  </p>
                </Reveal>
                <Reveal delay={0.6}>
                  <div
                    className="flex flex-row items-center space-x-4"
                    onClick={() => {
                      setMenuItemSelected("broker");
                      setIsSubMenuOpen(true);
                    }}
                  >
                    <p className="font-semibold font-league-spartan text-[25px]">
                      Intermediaries
                    </p>
                    <Image
                      src="/svg/chevron-down-black.svg"
                      width={11}
                      height={7}
                      alt="chevron-black"
                      className="w-[11px] h-[7px] object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.8}>
                  <p
                    className="font-semibold font-league-spartan text-[25px]"
                    onClick={() => handleOnClickItem("/contact-us")}
                  >
                    Contact Us
                  </p>
                </Reveal>
              </div>
            )}
            <div className="mb-[30px] flex flex-col items-center">
              <Image
                src="/svg/logo-mobile.svg"
                width={131}
                height={26}
                alt="logo"
                className="w-[131px] h-[26px] object-cover mb-[30px]"
              />
              <div>
                <div className="flex flex-row space-x-[10px] items-center">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <Image
                      src="/svg/mail-white.svg"
                      width={200}
                      height={200}
                      alt="mail-white"
                      className="w-3 h-3"
                    />
                  </div>
                  <a
                    href="mailto:enquires@lendingbridge.co.uk"
                    className="underline"
                  >
                    enquires@lendingbridge.co.uk
                  </a>
                </div>
                <div className="flex flex-row space-x-[10px] items-center mt-[10px]">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <Image
                      src="/svg/phone-white.svg"
                      width={200}
                      height={200}
                      alt="phone-white"
                      className="w-3 h-3"
                    />
                  </div>
                  <a href="tel:02037250589">020 3725 0589</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MobileNav;
