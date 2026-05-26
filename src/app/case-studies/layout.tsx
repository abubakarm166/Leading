import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Lending Bridge - Success Stories & Client Testimonials",
  description:
    "Explore real case studies and success stories from Lending Bridge clients. Learn how our bridging finance solutions have helped property investors and developers.",
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/case-studies",
  },
  openGraph: {
    title: "Case Studies | Lending Bridge - Success Stories & Client Testimonials",
    description:
      "Explore real case studies and success stories from Lending Bridge clients. Learn how our bridging finance solutions have helped property investors and developers.",
    url: "https://www.lendingbridge.co.uk/case-studies",
    type: "website",
    siteName: "Lending Bridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Lending Bridge",
    description:
      "Explore real case studies and success stories from Lending Bridge clients. Learn how our bridging finance solutions have helped property investors.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

