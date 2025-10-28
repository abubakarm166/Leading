import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Head from "next/head";
export const metadata = {
  title: "Contact Lending Bridge UK | Trusted Bridging Loan Experts",
  description:
    "Need help with bridging loans in the UK? Contact Lending Bridge for prompt, expert assistance and smooth financing solutions.",
  keywords: ["bridging loan", "property finance", "latest news", "insights", "market trends", "investment opportunities"],

  // ✅ Robots meta
  robots: "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/contact-us",
  },

  openGraph: {
    title: "Latest News & Insights on Bridging Loans | Lending Bridge",
    description:
      "Discover the latest insights, tips, and market news on bridging loans and property finance from Lending Bridge.",
    // images: [{ url: '/og-about.jpg', width: 1200, height: 630 }],
  },
};
const ContactUsPage = () => {
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
      <main className="bg-primary-bg">
        <Navbar />
        <ContactUs noBorder />
        <Footer />
      </main>
    </>
  );
};

export default ContactUsPage;
