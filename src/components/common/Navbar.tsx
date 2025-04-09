"use client";
import { PRODUCTS } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavItem from "./NavItem";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="px-[50px] pt-[50px] bg-primary-bg hidden lg:block">
        <nav className="bg-white rounded-[15px] px-[50px] py-6 h-[116px]">
          <div className="flex flex-row items-center justify-between h-full">
            <Image
              src="/svg/logo.svg"
              width={200}
              height={200}
              alt="logo"
              className="w-[160px] h-[32px] cursor-pointer"
              onClick={() => router.push("/")}
            />
            <div className="flex flex-row items-center justify-between w-[70%] lg:w-[80%] 2xl:w-[70%] font-league-spartan font-medium text-[18px]">
              <NavItem
                title="Our Product"
                options={PRODUCTS.map((item) => ({
                  title: item.title,
                  href: `/product/${item.id}`,
                }))}
              />
              <NavItem
                title="Our Work"
                options={[
                  { title: "Blogs", href: "/blogs" },
                  { title: "Case Studies", href: "/case-studies" },
                ]}
              />
              <NavItem title="Team" href="/team" />
              <NavItem
                title="Intermediaries"
                options={[
                  { title: "Intermediaries", href: "/broker" },
                  { title: "Resources", href: "/resources" },
                ]}
              />
              <NavItem title="Contact Us" href="/contact-us" />
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
        </nav>
      </div>
      <div className="p-5 bg-primary-bg">
        <div className="bg-white rounded-[15px] flex flex-row items-center justify-between p-5">
          <div className="flex flex-row items-center space-x-5">
            <Image
              src="/svg/burger-menu.svg"
              width={36}
              height={36}
              alt="menu"
              className="w-9 h-9 object-cover"
            />
            <Image
              src="/svg/logo-mobile.svg"
              width={131}
              height={26}
              alt="logo"
              className="w-[131px] h-[26px] object-cover"
            />
          </div>
          <div className="flex flex-row items-center space-x-[10px]">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <Image
                src="/svg/mail-white.svg"
                width={200}
                height={200}
                alt="mail-white"
                className="w-3 h-3"
              />
            </div>
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <Image
                src="/svg/phone-white.svg"
                width={200}
                height={200}
                alt="phone-white"
                className="w-3 h-3 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
