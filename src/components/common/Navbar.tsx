"use client";
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
      <div className="hidden xl:block bg-primary-bg px-[50px] pt-6 lg:pt-8">
        <nav className="bg-white rounded-[15px] px-[50px] py-6 h-[116px]">
          <div className="flex flex-row items-center justify-between h-full">
            <div
              className="relative h-[64px] w-[200px] shrink-0 cursor-pointer"
              role="presentation"
              onClick={() => router.push("/")}
            >
              <Image
                src="/images/logo.png"
                alt="Lending Bridge logo"
                fill
                sizes="200px"
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="flex flex-row items-center justify-between w-[70%] font-league-spartan font-medium text-[18px]">
              <NavItem title="Our Products" href="/products" />
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
              <NavItem title="Enquire Now" href="/contact-us" />
              <div className="ml-1 flex min-w-0 shrink-0 flex-col gap-1 border-l border-primary/15 pl-3 min-[1536px]:flex-row min-[1536px]:items-center min-[1536px]:gap-3 min-[1536px]:pl-4">
                <a
                  href="mailto:enquiries@lendingbridge.co.uk"
                  className="group flex min-w-0 items-center gap-1.5 text-left transition-opacity hover:opacity-85"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Image
                      src="/svg/mail-white.svg"
                      width={200}
                      height={200}
                      alt="mail"
                      className="h-2.5 w-2.5"
                    />
                  </span>
                  <span className="font-league-spartan text-[12px] font-medium leading-none text-primary underline decoration-primary/35 underline-offset-2">
                    enquiries@lendingbridge.co.uk
                  </span>
                </a>
                <span
                  className="hidden h-9 w-px shrink-0 bg-primary/12 min-[1536px]:block"
                  aria-hidden
                />
                <a
                  href="tel:02037250589"
                  className="group flex shrink-0 items-center gap-1.5 text-left whitespace-nowrap transition-opacity hover:opacity-85"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Image
                      src="/svg/phone-white.svg"
                      width={200}
                      height={200}
                      alt="phone"
                      className="h-2.5 w-2.5"
                    />
                  </span>
                  <span className="font-league-spartan text-[12px] font-medium leading-none text-primary">
                    020 3725 0589
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* ===== Tablet Navbar (md–xl) ===== */}
      <div className="hidden md:block xl:hidden bg-primary-bg px-[30px] pt-5">
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
                onClick={() =>
                  window.open("mailto:enquiries@lendingbridge.co.uk")
                }
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
      <div className="block bg-primary-bg p-4 md:hidden">
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
