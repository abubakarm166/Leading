import Image from "next/image";
import BlogsCarousel from "../common/BlogsCarousel";

const Blogs = () => {
  return (
    <section className="relative w-screen overflow-x-hidden bg-[#142954] px-5 sm:px-6 lg:px-8 2xl:px-12 py-10">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#21558a]/35 via-transparent to-[#0a1628]/90"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 xl:gap-10">
        <div className="flex flex-row lg:flex-col items-center lg:items-start w-full shrink-0 lg:max-w-[220px] xl:max-w-[260px] mb-5 lg:mb-0">
          <Image
            src="/svg/calendar.svg"
            width={200}
            height={200}
            alt="calendar"
            className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px] object-cover hidden lg:block shrink-0"
          />
          <h2 className="font-bold text-white mx-auto lg:mx-0 text-[40px] sm:text-[48px] lg:text-[50px] xl:text-[55px] font-league-spartan lg:mt-4 text-center lg:text-left">
            Latest
            <br className="hidden lg:block" /> Insights
          </h2>
        </div>
        <div className="min-w-0 w-full flex-1">
          <BlogsCarousel arrowTheme="light" />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
