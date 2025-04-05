"use client";
import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { TBlog } from "@/types";
import { getBlog } from "@/utils/api/blogs";
import { useEffectAsync } from "@/utils/hooks";
import moment from "moment";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const BlogPage = () => {
  const [blog, setBlog] = useState<TBlog>();

  const params = useParams<{ id: string }>();

  useEffectAsync(async () => {
    const res = await getBlog(params.id);

    setBlog(res);
  }, [params.id]);

  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-[100px] mt-[50px]">
        {blog && blog?.img && (
          <Image
            src={blog.img}
            width={200}
            height={200}
            alt="blog"
            className="w-full h-[500px] object-cover rounded-[20px]"
          />
        )}
        <h1 className="mt-[50px] font-league-spartan font-semibold text-primary text-[70px]">
          {blog?.title}
        </h1>
        <p className="font-gilroy-medium font-extralight text-[18px] text-primary my-5">
          {moment(blog?.createdAt).format("MMM-DD-YYYY")}
        </p>
        <p className="font-gilroy-regular font-extralight text-[20px]">
          {blog?.content}
        </p>
      </div>
      <div className="mt-[50px]">
        <ClientBroker />
      </div>
      <div className="mt-[100px]">
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
};

export default BlogPage;
