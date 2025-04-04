import Image from "next/image";
import BlogsCarousel from "../common/BlogsCarousel";

const Blogs = () => {
  return (
    <section className="w-screen relative overflow-x-hidden bg-primary px-[50px] 2xl:px-[100px] py-10">
      <div className="flex flex-row items-center">
        <div>
          <Image
            src="/svg/calendar.svg"
            width={200}
            height={200}
            alt="calendar"
            className="w-[150px] h-[150px] 2xl:w-[200px] 2xl:h-[200px] object-cover"
          />
          <h2 className="font-bold text-white text-[50px] 2xl:text-[70px] font-league-spartan">
            Latest
            <br />
            Insights
          </h2>
        </div>
        <div className="w-[80%] ml-auto">
          <BlogsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
