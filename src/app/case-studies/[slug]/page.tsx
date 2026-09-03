import ClientBroker from "@/components/common/ClientBroker";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import CaseStudyHeroImage from "@/components/common/CaseStudyHeroImage";
import Navbar from "@/components/common/Navbar";
import { TCaseStudy } from "@/types";
import { getCaseStudyCached } from "@/utils/api/cache";
import { listCaseStudies } from "@/utils/api/caseStudy";

type CaseStudyDetailPageProps = Promise<{ slug: string }>;

export const revalidate = 3600;

export async function generateMetadata(props: {
  params: CaseStudyDetailPageProps;
}) {
  const params = await props.params;
  const caseStudy = await getCaseStudyCached(params.slug);

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

const formatLoan = (loan: string | number | undefined) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(Number(loan || 0));

const MetaRow = ({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) => {
  if (!value) return null;

  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <dt className="font-gilroy-bold text-[17px] text-primary sm:text-[18px]">
        {label}
      </dt>
      <span className="text-[17px] text-primary/50 sm:text-[18px]">:</span>
      <dd className="font-gilroy-regular text-[17px] text-primary sm:text-[18px]">
        {value}
      </dd>
    </div>
  );
};

const CaseStudyDetailPage = async (props: {
  params: CaseStudyDetailPageProps;
}) => {
  const params = await props.params;
  const caseStudy = await getCaseStudyCached(params.slug);

  return (
    <main className="bg-primary-bg">
      <Navbar />
      {/* Centred content block matching client mockup: image left, details right, story below */}
      <div className="mx-auto mt-10 w-full max-w-6xl px-5 sm:mt-12 lg:mt-[50px] lg:px-10 xl:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
          {caseStudy?.img && (
            <div className="w-full shrink-0 lg:w-[48%] lg:max-w-[560px]">
              <CaseStudyHeroImage
                src={caseStudy.img}
                alt={caseStudy?.location ?? "Case study"}
                priority
                size="sidebar"
              />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h1 className="font-league-spartan text-[36px] font-semibold leading-[1.1] text-primary sm:text-[44px] lg:text-[52px] xl:text-[56px]">
              {caseStudy?.location}
            </h1>

            <dl className="mt-6 flex flex-col gap-y-2.5 sm:mt-8 sm:gap-y-3">
              <MetaRow label="Location" value={caseStudy?.location} />
              <MetaRow
                label="Value of Loan"
                value={formatLoan(caseStudy?.loan)}
              />
              <MetaRow
                label="LTV"
                value={
                  caseStudy?.ltv != null && caseStudy.ltv !== ""
                    ? `${caseStudy.ltv}%`
                    : undefined
                }
              />
              <MetaRow label="Property Type" value={caseStudy?.propertyType} />
              <MetaRow label="Type of Deal" value={caseStudy?.dealType} />
            </dl>
          </div>
        </div>

        {caseStudy?.description && (
          <div
            className="mt-8 max-w-none font-gilroy-regular text-[16px] leading-relaxed text-[#2c2c2c] sm:mt-10 lg:mt-12 [&_a]:text-primary [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-0 [&_h2]:font-gilroy-bold [&_h2]:text-[20px] [&_h2]:text-black sm:[&_h2]:text-[22px] [&_h3]:mb-3 [&_h3]:font-gilroy-bold [&_h3]:text-[20px] [&_p]:text-[#2c2c2c] [&_p+p]:mt-4 [&_strong]:font-gilroy-bold"
            dangerouslySetInnerHTML={{ __html: caseStudy.description }}
          />
        )}
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

export async function generateStaticParams() {
  const caseStudies = await listCaseStudies();
  return caseStudies
    .filter((item: TCaseStudy) => item.slug)
    .map((item: TCaseStudy) => ({ slug: item.slug }));
}
