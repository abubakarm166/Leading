import Image from "next/image";
import BlogsCarousel from "../common/BlogsCarousel";

const Blogs = () => {
  return (
    <section className="w-screen relative overflow-x-hidden bg-primary px-5 lg:px-[50px] 2xl:px-[80px] py-10">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-row lg:flex-col items-center w-full lg:w-auto mb-5 lg:mb-0">
          <Image
            src="/svg/calendar.svg"
            width={200}
            height={200}
            alt="calendar"
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] 2xl:w-[200px] 2xl:h-[200px] object-cover hidden lg:block"
          />
          <h2 className="font-bold text-white mx-auto lg:mx-0 text-[70px] font-league-spartan">
            Latest
            <br className="hidden lg:block" /> Insights
          </h2>
        </div>
        <div className="w-full lg:w-[75%] ml-auto">
          <BlogsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
