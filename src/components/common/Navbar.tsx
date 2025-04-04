import Image from "next/image";

const Navbar = () => {
  return (
    <div className="px-[50px] pt-[50px] bg-primary-bg">
      <nav className="bg-white rounded-[15px] px-[50px] py-6 h-[116px]">
        <div className="flex flex-row items-center justify-between h-full">
          <Image
            src="/svg/logo.svg"
            width={200}
            height={200}
            alt="logo"
            className="w-[160px] h-[32px]"
          />
          <div className="flex flex-row items-center justify-between w-[70%] font-league-spartan font-medium text-[18px]">
            <p>Our Product</p>
            <p>Our Work</p>
            <p>Team</p>
            <p>Intermediaries</p>
            <a href="/contact-us">Contact Us</a>
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
  );
};

export default Navbar;
