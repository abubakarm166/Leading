import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import { TBlog } from "@/types";
import { getBlog, listBlogs } from "@/utils/api/blogs";
import {
  sanitizeBlogArticleHtml,
  stripHtmlToPlainText,
  truncatePlainText,
} from "@/utils/helpers";
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

  // Truncate title to ensure total length (with " | Lending Bridge") is max 65 characters
  const maxTitleLength = 45; // Leave room for " | Lending Bridge" (18 chars)
  const truncatedTitle =
    blog.title.length > maxTitleLength
      ? `${blog.title.slice(0, maxTitleLength).trim()}...`
      : blog.title;
  const pageTitle = `${truncatedTitle} | Lending Bridge`;

  const plainDescription = truncatePlainText(
    stripHtmlToPlainText(blog.content || ""),
    150
  );

  return {
    title: pageTitle,
    description: blog.metaDescription || plainDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: blog.metaDescription || plainDescription,
      url,
      type: "article",
      siteName: "Lending Bridge",
      images: blog.img ? [{ url: blog.img, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: truncatedTitle,
      description: blog.metaDescription || plainDescription,
      images: blog.img ? [blog.img] : [],
    },
  };
}

export default async function BlogPage(props: { params: BlogPageProps }) {
  const params = await props.params;
  const blog = await getBlog(params.slug);

  if (!blog) {
    return <div className="px-5 py-10 text-center">Blog not found.</div>;
  }

  const formattedContent = sanitizeBlogArticleHtml(blog.content);

  return (
    <>
      <main className="bg-primary-bg">
        <Navbar />
        <div className="px-5 lg:px-[100px] mt-[50px]">
          <header className="overflow-hidden rounded-[20px] bg-[#142954] shadow-[0_8px_40px_rgba(10,22,40,0.35)]">
            <div className="flex flex-col lg:flex-row lg:items-stretch">
              {blog.img ? (
                <div className="flex w-full shrink-0 flex-col justify-center border-b border-white/[0.08] bg-[linear-gradient(165deg,rgba(26,53,96,0.55)_0%,#142954_55%)] lg:w-[min(54%,680px)] lg:border-b-0 lg:border-r lg:border-white/[0.08]">
                  <div className="flex min-h-[220px] items-center justify-center px-5 py-8 sm:min-h-[260px] md:px-8 md:py-10 lg:min-h-[min(520px,58vh)] lg:px-10 lg:py-12">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={1600}
                      height={900}
                      priority
                      className="h-auto w-full rounded-xl object-contain shadow-[0_16px_48px_rgba(0,0,0,0.35)] max-h-[min(52vw,320px)] sm:max-h-[380px] lg:max-h-[min(460px,48vh)]"
                      sizes="(max-width: 1024px) 100vw, 680px"
                    />
                  </div>
                </div>
              ) : null}
              <div
                className={`flex min-w-0 flex-col justify-center px-6 py-10 md:px-10 md:py-12 lg:flex-1 lg:py-14 lg:pl-10 lg:pr-12 xl:pl-14 xl:pr-16 ${blog.img ? "" : "lg:py-16"}`}
              >
                <h1 className="font-league-spartan font-semibold leading-[1.1] text-white text-[32px] sm:text-[40px] lg:text-[46px] xl:text-[52px]">
                  {blog.title}
                </h1>
                <p className="font-gilroy-medium mt-5 text-[17px] text-white/75 md:text-[18px]">
                  {moment(blog.createdAt).format("MMM DD, YYYY")}
                </p>
              </div>
            </div>
          </header>

          <article
            className="mt-12 w-full font-gilroy-regular text-[18px] leading-relaxed text-[#1a1a1a] md:text-[20px] whitespace-pre-line lg:mt-14"
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
    </>
  );
}

// ✅ (Optional) For static site generation
export async function generateStaticParams() {
  const blogs = await listBlogs();
  return blogs
    .map((b: TBlog) => b.slug || String(b.id))
    .filter(Boolean)
    .map((slug) => ({ slug }));
}
