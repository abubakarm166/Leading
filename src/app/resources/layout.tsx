import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources for Brokers and Clients | Lending Bridge - Download Forms & Guides",
  description:
    "Access essential resources for brokers and clients including introducer agreements, product guides, application forms, and reviews from Lending Bridge.",
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/resources",
  },
  openGraph: {
    title: "Resources for Brokers and Clients | Lending Bridge",
    description:
      "Access essential resources for brokers and clients including introducer agreements, product guides, application forms, and reviews from Lending Bridge.",
    url: "https://www.lendingbridge.co.uk/resources",
    type: "website",
    siteName: "Lending Bridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources for Brokers and Clients | Lending Bridge",
    description:
      "Access essential resources for brokers and clients including introducer agreements, product guides, application forms, and reviews.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

