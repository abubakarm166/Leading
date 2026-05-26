import { TeamMember } from "@/types";
import Image from "next/image";
import Modal from "react-responsive-modal";
import Button from "../common/Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember;
  openBookAppointmentModal: () => void;
}

const TeamDetailsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  member,
  openBookAppointmentModal,
}) => {
  const handleBookAppointment = () => {
    onClose();
    openBookAppointmentModal();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      classNames={{ modal: "w-[90%] md:w-[80%] rounded-[20px]" }}
    >
      <div>
        <div className="flex flex-row items-center gap-3">
          <Image
            src={member?.img}
            width={140}
            height={150}
            alt={member?.firstName}
            className="rounded-[20px] w-[140px] h-[150px]"
          />
          <div className="flex flex-col space-y-2">
            <a href={`mailto:${member?.email}`}>
              <Image
                src="/svg/mail-blue.svg"
                width={45}
                height={45}
                alt="mail"
                className="w-[45px] h-[45px] cursor-pointer"
              />
            </a>
            <Image
              src="/svg/linkedin-blue.svg"
              width={45}
              height={45}
              alt="linkedin"
              className="w-[45px] h-[45px] cursor-pointer"
              onClick={() => window.open(member?.linkedIn, "_blank")}
            />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold font-league-spartan text-[35px]">
            {member?.firstName} {member?.lastName}
          </h2>
          <p className="mt-[10px] font-semibold font-league-spartan text-[25px] text-primary">
            {member?.role}
          </p>
          <p className="mt-[10px] font-gilroy-regular text-[18px]">
            {member?.experience}
          </p>
          <Button
            className="w-full md:w-[370px] lg:w-[400px] mt-[30px]"
            onClick={handleBookAppointment}
          >
            <p className="text-white font-bold uppercase text-[16px] md:text-[20px]">
              Book an appointment
            </p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TeamDetailsModal;
