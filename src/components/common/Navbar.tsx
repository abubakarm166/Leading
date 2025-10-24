"use client";
import { PRODUCTS } from "@/utils/constants";
import useNavStore from "@/utils/store/nav";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavItem from "./NavItem";

const Navbar = () => {
  const router = useRouter();
  const onNavChange = useNavStore((state) => state.onChange);

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <div className="hidden xl:block px-[50px] pt-[50px] bg-primary-bg">
        <nav className="bg-white rounded-[15px] px-[50px] py-6 h-[116px]">
          <div className="flex flex-row items-center justify-between h-full">
            <Image
              src="/images/logo.png"
              width={200}
              height={200}
              alt="logo"
              className="w-[200px] h-[64px] cursor-pointer object-contain"
              onClick={() => router.push("/")}
            />
            <div className="flex flex-row items-center justify-between w-[70%] font-league-spartan font-medium text-[18px]">
              <NavItem
                title="Our Products"
                options={PRODUCTS.map((item) => ({
                  title: item.title,
                  href: `/product/${item.slug}`,
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
                  { title: "Intermediaries", href: "/intermediaries" },
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
                      alt="mail"
                      className="w-3 h-3"
                    />
                  </div>
                  <a href="mailto:enquiries@lendingbridge.co.uk" className="underline">
                    enquiries@lendingbridge.co.uk
                  </a>
                </div>
                <div className="flex flex-row space-x-[10px] items-center mt-[10px]">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <Image
                      src="/svg/phone-white.svg"
                      width={200}
                      height={200}
                      alt="phone"
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

      {/* ===== Tablet Navbar (md–xl) ===== */}
      <div className="hidden md:block xl:hidden px-[30px] pt-[30px] bg-primary-bg">
        <nav className="bg-white rounded-[15px] px-[30px] py-4 shadow-sm">
          <div className="flex flex-row items-center justify-between">
            {/* Left: Logo */}
            <Image
              src="/images/logo.png"
              width={160}
              height={50}
              alt="logo"
              className="w-[160px] h-[50px] cursor-pointer object-contain"
              onClick={() => router.push("/")}
            />



            {/* Right: Contact icons + Menu */}
            <div className="flex flex-row items-center space-x-[10px]">
              <div
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer"
                onClick={() => window.open("mailto:enquiries@lendingbridge.co.uk")}
              >
                <Image
                  src="/svg/mail-white.svg"
                  width={200}
                  height={200}
                  alt="mail"
                  className="w-4 h-4"
                />
              </div>
              <div
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer"
                onClick={() => window.open("tel:02037250589")}
              >
                <Image
                  src="/svg/phone-white.svg"
                  width={200}
                  height={200}
                  alt="phone"
                  className="w-4 h-4"
                />
              </div>
              <Image
                src="/svg/burger-menu.svg"
                width={36}
                height={36}
                alt="menu"
                className="w-8 h-8 cursor-pointer"
                onClick={() => onNavChange(true)}
              />
            </div>
          </div>
        </nav>
      </div>

      {/* ===== Mobile Navbar (below md) ===== */}
      <div className="block md:hidden p-5 bg-primary-bg">
        <div className="bg-white rounded-[15px] flex flex-row items-center justify-between p-5">
          <div className="flex flex-row items-center space-x-5">
            <Image
              src="/svg/burger-menu.svg"
              width={36}
              height={36}
              alt="menu"
              className="w-9 h-9 object-cover"
              onClick={() => onNavChange(true)}
            />
            <Image
              src="/svg/logo-mobile.svg"
              width={131}
              height={26}
              alt="logo"
              className="w-[131px] h-[26px] object-cover"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="flex flex-row items-center space-x-[10px]">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <Image
                src="/svg/mail-white.svg"
                width={200}
                height={200}
                alt="mail"
                className="w-3 h-3"
                onClick={() =>
                  window.open("mailto:enquiries@lendingbridge.co.uk", "_blank")
                }
              />
            </div>
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <Image
                src="/svg/phone-white.svg"
                width={200}
                height={200}
                alt="phone"
                className="w-3 h-3 object-cover"
                onClick={() => window.open("tel:02037250589", "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
