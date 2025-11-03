import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const generateMetadata = () => {
    const url = 'https://www.lendingbridge.co.uk/privacy-policy';

    return {
        title: 'Privacy Policy',
        description: 'Privacy policy page for lending bridge',
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: 'Privacy Policy',
            description: 'Privacy Policy page for lending bridge',
            url,
            type: "article",
            siteName: "Lending Bridge",
        }
    }
}

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px] mt-[50px]">
        <div className="flex flex-col gap-y-3 font-gilroy-regular text-[18px]">
          <h1 className="font-gilroy-bold text-[20px] md:text-[32px]">
            Privacy Policy for Lending Bridge Holdings Limited T/a Lending
            Bridge
          </h1>
          <p>
            At Lending Bridge, we are committed to protecting the privacy of our
            website visitors and customers. This privacy policy outlines the
            types of personal information we collect, how we use that
            information, and how we protect your privacy.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Collection of Personal Information</h2>
          <p>
            We may collect personal information from you when you visit our
            website or use our services. The types of personal information we
            collect may include your name, address, email address, phone number,
            financial information, and other information related to your use of
            our services.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Use of Personal Information</h2>
          <p>We may use your personal information to:</p>
          <p>- Provide and improve our services to you</p>
          <p>- Respond to your inquiries or requests</p>
          <p>- Verify your identity and prevent fraud</p>
          <p>- Comply with legal and regulatory requirements</p>
          <p>
            - Communicate with you about our services, promotions, and other
            news
          </p>
          <p>
            We may also use your personal information for other purposes that
            are disclosed to you and to which you have consented.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Protection of Personal Information</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. We use
            industry-standard security measures, including physical, technical,
            and administrative safeguards, to protect your personal information.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Disclosure of Personal Information</h2>
          <p>
            We may share your personal information with third-party service
            providers who perform services on our behalf, such as payment
            processing, customer support, and marketing. These service providers
            are required to maintain the confidentiality of your personal
            information and are prohibited from using your personal information
            for any other purpose.
          </p>
          <p>
            We may also share your personal information with law enforcement
            agencies, government authorities, or other third parties if we are
            required to do so by law or if we believe that such disclosure is
            necessary to protect our rights or the rights of others.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Your Rights and Choices</h2>
          <p>
            You have the right to access and correct your personal information
            that we hold, subject to certain limitations under applicable law.
            You may also request that we delete your personal information,
            although we may be required to retain certain information for legal
            or regulatory purposes.
          </p>
          <p>
            You may choose to opt out of receiving promotional communications
            from us by following the instructions in the communication or by
            contacting us directly.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Changes to this Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time to reflect
            changes in our practices or applicable laws. We encourage you to
            review this privacy policy periodically to stay informed about how
            we are protecting your personal information.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">Contact Us</h2>
          <p>
            If you have any questions or concerns about this privacy policy or
            our privacy practices, please contact us at{" "}
            <a
              href="mailto:info@lendingbridge.co.uk"
              className="text-primary underline"
            >
              info@lendingbridge.co.uk
            </a>
            .
          </p>
          <p>Effective Date: 01 January 2025</p>
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

export default PrivacyPolicyPage;
