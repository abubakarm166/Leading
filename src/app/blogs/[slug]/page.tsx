import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { TBlog } from "@/types";
import { getBlog, listBlogs } from "@/utils/api/blogs";
import moment from "moment";

type BlogPageProps = Promise<{ slug: string }>;

// ✅ Generate SEO metadata dynamically
export async function generateMetadata(props: { params: BlogPageProps }) {
  const params = await props.params;
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Lending Bridge",
      description: "This blog could not be found.",
    };
  }

  const url = `https://www.lendingbridge.co.uk/blogs/${params.slug}`;

  return {
    title: `${blog.title} | Lending Bridge`,
    description: blog.metaDescription || blog.content.slice(0, 150),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${blog.title} | Lending Bridge`,
      description: blog.metaDescription || blog.content.slice(0, 150),
      url,
      type: "article",
      siteName: "Lending Bridge",
      images: blog.img ? [{ url: blog.img, width: 1200, height: 630 }] : [],
    },
  };
}

export default async function BlogPage(props: { params: BlogPageProps }) {
  const params = await props.params;
  const blog = await getBlog(params.slug);

  if (!blog) {
    return <div className="px-5 py-10 text-center">Blog not found.</div>;
  }

  const formattedContent = blog.content.replace(/<p><\/p>/g, "<br />");

  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px] mt-[50px]">
        {blog.img && (
          <img
            src={blog.img}
            width={500}
            height={500}
            alt={blog.title}
            className="w-full h-[190px] md:h-[500px] object-cover rounded-[20px]"
          />
        )}
        <h1 className="mt-[50px] font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px]">{blog.title}</h1>
        <p className="font-gilroy-medium text-[18px] text-primary my-5">{moment(blog.createdAt).format("MMM DD, YYYY")}</p>
        <article
          className="font-gilroy-regular text-[20px] whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
      </div>
      <div className="mt-[50px]">
        <ClientBroker />
      </div>
      <div className="mt-5 lg:mt-[100px]">
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}

// ✅ (Optional) For static site generation
export async function generateStaticParams() {
  const blogs = await listBlogs();
  return blogs.map((b: TBlog) => ({ id: b.slug?.toString() }));
}
