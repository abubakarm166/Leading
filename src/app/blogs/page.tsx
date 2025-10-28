import Head from "next/head";
import BlogsClient from "./BlogsClient";

export const metadata = {
  title: " Latest News & Insights on Bridging Loans | Lending Bridge",
  description: "Discover the latest insights, tips, and market news on bridging loans and property finance from Lending Bridge.",
  keywords: ["bridging loan", "property finance", "latest news", "insights", "market trends", "investment opportunities"],
  robots: "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/blogs",
  },
  openGraph: {
    title: "Latest News & Insights on Bridging Loans | Lending Bridge",
    description:
      "Discover the latest insights, tips, and market news on bridging loans and property finance from Lending Bridge.",
    url: "https://www.lendingbridge.co.uk/blogs",
    siteName: "Lending Bridge",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0D1MK5GB75"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0D1MK5GB75');
            `,
          }}
        />
      </Head>
      <BlogsClient />
    </>
  );
}
