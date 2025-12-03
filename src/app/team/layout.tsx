import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team | Lending Bridge - Expert Bridging Finance Professionals",
  description:
    "Meet the experienced team at Lending Bridge. Our dedicated professionals are committed to providing expert bridging finance solutions and exceptional service.",
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/team",
  },
  openGraph: {
    title: "Meet Our Team | Lending Bridge - Expert Bridging Finance Professionals",
    description:
      "Meet the experienced team at Lending Bridge. Our dedicated professionals are committed to providing expert bridging finance solutions and exceptional service.",
    url: "https://www.lendingbridge.co.uk/team",
    type: "website",
    siteName: "Lending Bridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | Lending Bridge",
    description:
      "Meet the experienced team at Lending Bridge. Our dedicated professionals are committed to providing expert bridging finance solutions.",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

