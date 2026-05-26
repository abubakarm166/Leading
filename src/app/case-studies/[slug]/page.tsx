import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import CaseStudyHeroImage from "@/components/common/CaseStudyHeroImage";
import Navbar from "@/components/common/Navbar";
import { getCaseStudy } from "@/utils/api/caseStudy";

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
      <div className="mt-[50px] px-5 lg:px-[100px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          {caseStudy?.img && (
            <div className="w-full shrink-0 lg:sticky lg:top-8 lg:w-[38%] lg:max-w-[440px] xl:max-w-[480px]">
              <CaseStudyHeroImage
                src={caseStudy.img}
                alt={caseStudy?.location ?? "Case study"}
                priority
                size="sidebar"
              />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h1 className="font-league-spartan text-[40px] font-semibold text-primary sm:text-[48px] lg:text-[56px] xl:text-[64px]">
              {caseStudy?.location}
            </h1>

            <dl className="mt-8 flex flex-col gap-y-3 sm:mt-10">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <dt className="font-gilroy-bold text-[18px]">Location</dt>
                <span className="text-[18px] text-neutral-500">:</span>
                <dd className="font-gilroy-regular text-[18px] text-primary">
                  {caseStudy?.location}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <dt className="font-gilroy-bold text-[18px]">Value of Loan</dt>
                <span className="text-[18px] text-neutral-500">:</span>
                <dd className="font-gilroy-regular text-[18px] text-primary">
                  {new Intl.NumberFormat("en-us").format(
                    Number(caseStudy?.loan || 0)
                  )}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <dt className="font-gilroy-bold text-[18px]">LTV</dt>
                <span className="text-[18px] text-neutral-500">:</span>
                <dd className="font-gilroy-regular text-[18px] text-primary">
                  {caseStudy?.ltv}%
                </dd>
              </div>
              {caseStudy?.propertyType && (
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <dt className="font-gilroy-bold text-[18px]">Property Type</dt>
                  <span className="text-[18px] text-neutral-500">:</span>
                  <dd className="font-gilroy-regular text-[18px] text-primary">
                    {caseStudy.propertyType}
                  </dd>
                </div>
              )}
              {caseStudy?.dealType && (
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <dt className="font-gilroy-bold text-[18px]">Type of Deal</dt>
                  <span className="text-[18px] text-neutral-500">:</span>
                  <dd className="font-gilroy-regular text-[18px] text-primary">
                    {caseStudy.dealType}
                  </dd>
                </div>
              )}
            </dl>

            {caseStudy?.description && (
              <div
                className="mt-8 font-gilroy-regular text-[16px] leading-relaxed sm:mt-10 [&_a]:text-primary [&_a]:underline [&_p+p]:mt-4"
                dangerouslySetInnerHTML={{ __html: caseStudy.description }}
              />
            )}
          </div>
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

export default CaseStudyDetailPage;
