import ResourcesClient from "@/components/Resources/ResourcesClient";
import React from "react";

export const metadata = {
  title: "Finance Guides & Resources | Lending Bridge UK",
  description:
    "Access helpful resources and guides to understand bridging finance, UK property funding options, and key lending processes.",
  keywords: [
    "bridging loan",
    "property finance",
    "latest news",
    "insights",
    "market trends",
    "investment opportunities",
  ],
  robots:
    "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/resources",
  },
  openGraph: {
    title: "Finance Guides & Resources | Lending Bridge UK",
    description:
      "Access helpful resources and guides to understand bridging finance, UK property funding options, and key lending processes.",
    url: "https://www.lendingbridge.co.uk/resources",
    siteName: "Lending Bridge",
    type: "website",
  },
};

const ResourcePage = () => {
  return (
    <>
      <ResourcesClient />
    </>
  );
};

export default ResourcePage;
