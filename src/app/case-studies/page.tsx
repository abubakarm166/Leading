import CaseStudiesCarousel from "@/components/common/CaseStudiesCarousel";
import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata = {
  title: "Case Studies | Lending Bridge UK",
  description:
    "Explore real client case studies to see how we support property investors and developers with fast, flexible bridging finance solutions.",
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
    canonical: "https://www.lendingbridge.co.uk/case-studies",
  },
  openGraph: {
    title: "Case Studies | Lending Bridge UK",
    description:
      "Explore real client case studies to see how we support property investors and developers with fast, flexible bridging finance solutions.",
    url: "https://www.lendingbridge.co.uk/case-studies",
    siteName: "Lending Bridge",
    type: "website",
  },
};

const CaseStudiesPage = () => {
  return (
    <>
      <main className="bg-primary-bg">
        <Navbar />
        <div className="px-5 lg:px-[100px]">
          <h1 className="font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px] py-[50px]">
            Case Studies
          </h1>
          <CaseStudiesCarousel />
        </div>
        <div className="mt-[50px]">
          <ClientBroker />
        </div>
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default CaseStudiesPage;
