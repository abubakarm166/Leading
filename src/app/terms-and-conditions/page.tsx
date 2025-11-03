import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const generateMetadata = () => {
  const url = "https://www.lendingbridge.co.uk/terms-and-conditions";

  return {
    title: "Terms and Conditions",
    description: "Terms and Conditions page for lending bridge",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Terms and Conditions",
      description: "Terms and Conditions page for lending bridge",
      url,
      type: "article",
      siteName: "Lending Bridge",
    },
  };
};

const TermsConditionsPage = () => {
  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px] mt-[50px]">
        <div className="flex flex-col gap-y-3 font-gilroy-regular text-[18px]">
          <h1 className="font-gilroy-bold text-[20px] md:text-[32px]">
            Terms and Conditions for Lending Bridge Holdings Limited T/a Lending
            Bridge
          </h1>
          <p>
            These terms and conditions (&quot;Agreement&quot;) govern your use of Lending
            Bridge Holdings Limited T/a Lending Bridge website and services
            (&quot;Services&quot;). By using the Services, you agree to be bound by this
            Agreement. If you do not agree to this Agreement, you may not use
            the Services.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Use of Services</h2>
          <p>
            You may use the Services only for lawful purposes and in accordance
            with this Agreement. You may not use the Services:
          </p>
          <p>- To violate any applicable law or regulation</p>
          <p>
            - To infringe the intellectual property rights of Lending Bridge
            Holdings Limited T/a Lending Bridge or any third party
          </p>
          <p>- To transmit any viruses, malware, or other harmful code</p>
          <p>
            - To engage in any activity that could damage, disable, overburden,
            or impair the Services
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Eligibility</h2>
          <p>
            You must be at least 18 years old and a resident of the United
            Kingdom to use the Services.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Loan Application</h2>
          <p>
            If you apply for a loan through the Services, you agree to provide
            accurate and complete information about yourself and your financial
            situation. You authorise Lending Bridge Holdings Limited T/a Lending
            Bridge to verify your creditworthiness and financial information and
            to share your information with third-party lenders who may provide
            you with loan offers.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Fees and Charges</h2>
          <p>
            Lending Bridge Holdings Limited T/a Lending Bridge may charge fees
            for certain Services, such as loan application fees or late payment
            fees. You agree to pay all fees and charges in a timely manner.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Intellectual Property</h2>
          <p>
            The Services and all content and materials on the Lending Bridge
            Holdings Limited T/a Lending Bridge website, including but not
            limited to text, graphics, logos, images, and software, are the
            property of Lending Bridge Holdings Limited T/a Lending Bridge or
            its licensors and are protected by copyright, trademark, and other
            intellectual property laws. You may not use or reproduce any content
            or materials on Lending Bridge Holdings Limited T/a Lending Bridge
            website without the express written consent of Lending Bridge
            Holdings T/a Lending Bridge.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Disclaimer of Warranties</h2>
          <p>
            The Services are provided &quot;as is&quot; and without warranty of any kind,
            express or implied. Lending Bridge Holdings Limited T/a Lending
            Bridge does not warrant that the Services will be uninterrupted or
            error-free, or that any defects in the Services will be corrected.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Lending Bridge Holdings
            Limited T/a Lending Bridge and its affiliates, officers, directors,
            employees, and agents shall not be liable for any indirect,
            incidental, special, or consequential damages arising out of or in
            connection with the Services, including but not limited to damages
            for loss of profits, goodwill, use, data, or other intangible
            losses.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Lending Bridge Holdings
            Limited T/a Lending Bridge and its affiliates, officers, directors,
            employees, and agents from any and all claims, damages, liabilities,
            costs, and expenses (including reasonable attorneys&apos; fees) arising
            out of or in connection with your use of the Services or your breach
            of this Agreement.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Termination</h2>
          <p>
            Lending Bridge Holdings Limited T/a Lending Bridge may terminate
            this Agreement and your access to the Services at any time and for
            any reason without notice. Upon termination, you must immediately
            cease all use of the Services.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Governing Law and Jurisdiction</h2>
          <p>
            This Agreement shall be governed by and construed in accordance with
            the laws of England and Wales, and any disputes arising out of or in
            connection with this Agreement shall be subject to the exclusive
            jurisdiction of the English courts.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Entire Agreement</h2>
          <p>
            This Agreement constitutes the entire agreement between you and
            Lending Bridge Holdings Limited T/a Lending Bridge with respect to
            the Services and supersedes all prior or contemporaneous
            communications and proposals, whether oral or written, between you
            and Lending Bridge Holdings Limited T/a Lending Bridge.
          </p>
          <h2 className="font-gilroy-bold text-[20px]">- Amendments</h2>
          <p>
            Lending Bridge Holdings Limited T/a Lending Bridge may amend this
            Agreement at any time by posting a revised version on theLending
            Bridge Holdings Limited T/a Lending Bridge website.
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

export default TermsConditionsPage;
