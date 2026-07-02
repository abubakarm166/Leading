import { MetadataRoute } from "next";
import { PRODUCTS } from "@/utils/constants";
import { getAllBlogs } from "@/utils/api/blogs";
import { listCaseStudies } from "@/utils/api/caseStudy";
import { TCaseStudy, TBlog } from "@/types";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.lendingbridge.co.uk";

  let blogs: TBlog[] = [];
  let caseStudies: TCaseStudy[] = [];

  try {
    [blogs, caseStudies] = await Promise.all([
      getAllBlogs(),
      listCaseStudies(),
    ]);
  } catch (error) {
    console.error("[sitemap] upstream fetch failed:", error);
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/intermediaries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs
    .filter((blog) => blog.slug)
    .map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(blog.createdAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const caseStudiesPages: MetadataRoute.Sitemap = caseStudies
    .filter((caseStudy) => caseStudy.slug)
    .map((caseStudy) => ({
      url: `${baseUrl}/case-studies/${caseStudy.slug}`,
      lastModified: new Date(caseStudy.createdAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...productPages, ...blogPages, ...caseStudiesPages];
}
