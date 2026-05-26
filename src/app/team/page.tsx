import TeamPage from "@/components/Team/TeamClient";
import React from "react";

export const metadata = {
  title: "Meet Our Team | Lending Bridge UK",
  description:
    "Meet the team of property finance specialists at Lending Bridge, dedicated to delivering efficient and tailored bridging loan support.",
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
    canonical: "https://www.lendingbridge.co.uk/team",
  },
  openGraph: {
    title: "Meet Our Team | Lending Bridge UK",
    description:
      "Meet the team of property finance specialists at Lending Bridge, dedicated to delivering efficient and tailored bridging loan support.",
    url: "https://www.lendingbridge.co.uk/team",
    siteName: "Lending Bridge",
    type: "website",
  },
};

const TeamsPage = () => {
  return (
    <>
      <TeamPage />
    </>
  );
};

export default TeamsPage;
