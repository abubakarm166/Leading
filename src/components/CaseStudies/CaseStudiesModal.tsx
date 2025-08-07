import { TCaseStudy } from "@/types";
import Image from "next/image";
import Modal from "react-responsive-modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  activeCaseStudy: TCaseStudy | null;
}

const CaseStudiesModal: React.FC<Props> = ({ isOpen, activeCaseStudy, onClose }) => {
  if (!activeCaseStudy) {
    return <div />;
  }

  const formattedContent =
    activeCaseStudy && activeCaseStudy?.description ? activeCaseStudy.description.replace(/<p><\/p>/g, "<br />") : "";

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      blockScroll
      classNames={{
        modal: "w-[90%] md:min-w-[95vw] md:min-h-[90vh] rounded-[10px]",
      }}
    >
      <div className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-[50px] mt-10 md:mt-0">
        {activeCaseStudy && (
          <Image
            src={activeCaseStudy?.img}
            width={200}
            height={200}
            alt={activeCaseStudy?.location}
            className="w-full md:w-[500px] h-[380px] rounded-[20px] object-cover -mt-14"
          />
        )}
        <div className="w-full md:w-[50%]">
          <div className="font-gilroy-regular flex flex-col space-y-2">
            <div className="flex flex-row items-center">
              <p className="font-gilroy-medium text-[20px] w-[40%] md:w-[30%]">Location</p>
              <p className="w-[10%]">:</p>
              <p className="text-[20px] text-primary">{activeCaseStudy?.location}</p>
            </div>
            <div className="flex flex-row items-center">
              <p className="font-gilroy-medium text-[20px] w-[40%] md:w-[30%]">Value of Loan</p>
              <p className="w-[10%]">:</p>
              <p className="text-[20px] text-primary">{activeCaseStudy?.loan}</p>
            </div>
            <div className="flex flex-row items-center">
              <p className="font-gilroy-medium text-[20px] w-[40%] md:w-[30%]">LTV</p>
              <p className="w-[10%]">:</p>
              <p className="text-[20px] text-primary">{activeCaseStudy?.ltv}%</p>
            </div>
            {activeCaseStudy?.propertyType && (
              <div className="flex flex-row items-center">
                <p className="font-gilroy-medium text-[20px] w-[40%] md:w-[30%]">Property Type</p>
                <p className="w-[10%]">:</p>
                <p className="text-[20px] text-primary">{activeCaseStudy?.propertyType}</p>
              </div>
            )}
            {activeCaseStudy?.dealType && (
              <div className="flex flex-row items-center">
                <p className="font-gilroy-medium text-[20px] w-[40%] md:w-[30%]">Type of Deal</p>
                <p className="w-[10%]">:</p>
                <p className="text-[20px] text-primary">{activeCaseStudy?.dealType}</p>
              </div>
            )}
          </div>
          {/* <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-5">
            <div className="flex flex-row items-center gap-[5px]">
              <Image src="/svg/check-black.svg" width={16} height={16} alt="check" />
              <p className="font-gilroy-regular text-[18px] text-primary">Commercial</p>
            </div>
            <div className="flex flex-row items-center gap-[5px]">
              <Image src="/svg/check-black.svg" width={16} height={16} alt="check" />
              <p className="font-gilroy-regular text-[18px] text-primary">Property Purchase</p>
            </div>
          </div> */}
          <p className="text-[20px] font-gilroy-bold mt-10">{activeCaseStudy?.location}</p>
          <p
            className="font-gilroy-regular text-[16px] whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: formattedContent,
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CaseStudiesModal;
