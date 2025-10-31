import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { getCaseStudy } from "@/utils/api/caseStudy";
import Image from "next/image";

type CaseStudyDetailPageProps = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: CaseStudyDetailPageProps;
}) {
  const params = await props.params;
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Lending Bridge",
      description: "This case study could not be found.",
    };
  }

  const url = `https://www.lendingbridge.co.uk/case-studies/${params.slug}`;

  return {
    title: `${caseStudy.location} | Lending Bridge`,
    description:
      caseStudy.metaDescription || caseStudy.description.slice(0, 150),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${caseStudy.location} | Lending Bridge`,
      description:
        caseStudy.metaDescription || caseStudy.description.slice(0, 150),
      url,
      type: "article",
      siteName: "Lending Bridge",
      images: caseStudy.img
        ? [{ url: caseStudy.img, width: 1200, height: 630 }]
        : [],
    },
  };
}

const CaseStudyDetailPage = async (props: {
  params: CaseStudyDetailPageProps;
}) => {
  const params = await props.params;
  const caseStudy = await getCaseStudy(params.slug);

  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px] mt-[50px]">
        {caseStudy?.img && (
          <Image
            src={caseStudy.img}
            width={700}
            height={700}
            alt={caseStudy?.location}
            className="w-full h-[190px] md:h-[500px] object-cover rounded-[20px]"
          />
        )}
        <h1 className="mt-[50px] font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px]">
          {caseStudy?.location}
        </h1>
        <div className="mt-10 flex flex-col gap-y-3">
          <div className="flex items-center">
            <p className="font-gilroy-bold text-[18px] w-[35%] md:w-[12%]">
              Location
            </p>
            <p className="w-[5%]">:</p>
            <p className="font-gilroy-regular text-[18px] text-primary">
              {caseStudy?.location}
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-gilroy-bold text-[18px] w-[35%] md:w-[12%]">
              Value of Loan
            </p>
            <p className="w-[5%]">:</p>
            <p className="font-gilroy-regular text-[18px] text-primary">
              {new Intl.NumberFormat("en-us").format(
                Number(caseStudy?.loan || 0)
              )}
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-gilroy-bold text-[18px] w-[35%] md:w-[12%]">
              LTV
            </p>
            <p className="w-[5%]">:</p>
            <p className="font-gilroy-regular text-[18px] text-primary">
              {caseStudy?.ltv}%
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-gilroy-bold text-[18px] w-[35%] md:w-[12%]">
              Property Type
            </p>
            <p className="w-[5%]">:</p>
            <p className="font-gilroy-regular text-[18px] text-primary">
              {caseStudy?.propertyType}
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-gilroy-bold text-[18px] w-[35%] md:w-[12%]">
              Type of Deal
            </p>
            <p className="w-[5%]">:</p>
            <p className="font-gilroy-regular text-[18px] text-primary">
              {caseStudy?.dealType}
            </p>
          </div>
        </div>
        <p
          className="mt-10 font-gilroy-regular text-[16px]"
          dangerouslySetInnerHTML={{ __html: caseStudy?.description }}
        />
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

export default CaseStudyDetailPage;
