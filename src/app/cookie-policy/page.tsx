import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata = {
  title: "Cookie Policy | Lending Bridge UK",
  description:
    "Learn how we use cookies to improve website performance and user experience. You can review and update your cookie preferences anytime.",
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Lending Bridge UK",
    description:
      "Learn how we use cookies to improve website performance and user experience. You can review and update your cookie preferences anytime.",
    url: "https://www.lendingbridge.co.uk/cookie-policy",
    type: "website",
    siteName: "Lending Bridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Lending Bridge UK",
    description:
      "Learn how we use cookies to improve website performance and user experience. You can review and update your cookie preferences anytime.",
  },
};

const CookiePolicyPage = () => {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px] mt-[50px]">
        <div className="flex flex-col gap-y-3 font-gilroy-regular text-[18px]">
          <h1 className="font-gilroy-bold text-[20px] md:text-[32px]">
            Cookie Policy
          </h1>
          <p>
            This Cookies Policy explains how Lending Bridge (&quot;we&quot; or
            &quot;us&quot;) uses cookies and similar technologies on our website
            (the &quot;Site&quot;). By using the Site, you agree to the use of
            cookies and similar technologies in accordance with this policy.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">What are cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you
            visit a website. Cookies allow the website to recognize your device
            and remember your preferences or actions over time.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            What types of cookies do we use?
          </h2>
          <p>We use the following types of cookies on our Site:</p>
          <p>
            Strictly necessary cookies: These cookies are essential for the
            operation of our Site and cannot be turned off in our system. They
            enable basic functions like page navigation and access to secure
            areas of the Site.
          </p>
          <p>
            Performance cookies: These cookies allow us to collect information
            about how visitors use our Site, including which pages are most
            popular and how long visitors spend on each page. This helps us
            improve the performance of our Site.
          </p>
          <p>
            Functionality cookies: These cookies allow us to remember your
            preferences, such as your language or location, and provide enhanced
            features and personalized content.
          </p>
          <p>
            Targeting cookies: These cookies are used to deliver advertising
            that is more relevant to you and your interests. They may also be
            used to limit the number of times you see an advertisement and to
            measure the effectiveness of advertising campaigns.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            How can you control cookies?
          </h2>
          <p>
            Most web browsers allow you to control cookies through their
            settings. You can set your browser to refuse all cookies or to
            indicate when a cookie is being sent. However, some features of our
            Site may not function properly if you disable cookies.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Third-party cookies</h2>
          <p>
            We may also use third-party cookies on our Site, including those
            provided by Google Analytics, a web analytics service provided by
            Google, Inc. (&quot;Google&quot;). Google Analytics uses cookies to
            help us analyse how visitors use our Site. The information generated
            by the cookie about your use of the Site (including your IP address)
            will be transmitted to and stored by Google on servers in the United
            States. Google will use this information for the purpose of
            evaluating your use of the Site, compiling reports on website
            activity for website operators, and providing other services
            relating to website activity and internet usage. Google may also
            transfer this information to third parties where required to do so
            by law, or where such third parties process the information on
            Google&apos;s behalf.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">
            Changes to this policy
          </h2>
          <p>
            We may update this Cookies Policy from time to time. We will notify
            you of any changes by posting the new policy on this page. You are
            advised to review this policy periodically for any changes.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Contact us</h2>
          <p>
            If you have any questions or concerns about our use of cookies and
            similar technologies, please contact us at
            <a
              href="mailto:info@lendingbridge.co.uk"
              className="text-primary underline"
            >
              info@lendingbridge.co.uk
            </a>
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <ClientBroker />
      </div>
      <div className="mt-5 lg:mt-[100px]">
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
};

export default CookiePolicyPage;
