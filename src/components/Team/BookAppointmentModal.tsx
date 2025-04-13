import { Availability, TeamMember } from "@/types";
import { addAppointment } from "@/utils/api/appointment";
import { getTeamMemberAvailability } from "@/utils/api/team";
import { APPOINTMENT_TIME_SLOTS } from "@/utils/constants";
import { useEffectAsync } from "@/utils/hooks";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import toast from "react-hot-toast";
import Modal from "react-responsive-modal";
import Button from "../common/Button";
import Input from "../common/Input";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember;
}

const BookAppointmentModal: React.FC<Props> = ({ isOpen, member, onClose }) => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string>();
  const [availability, setAvailability] = useState<Availability>();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [typeSelected, setTypeSelected] = useState<"borrower" | "broker">(
    "borrower",
  );

  const handleBookAppointment = async () => {
    if (!fullName || !email) {
      return toast.error("Please enter your name and email");
    }

    await addAppointment({
      appointmentWith: `${member.id}`,
      fullName,
      email,
      date: activeDate.toString(),
      time: selectedTime as string,
      type: typeSelected,
    });
    onClose();
  };

  useEffectAsync(async () => {
    const res = await getTeamMemberAvailability(`${member.id}`);
    setAvailability(res);
  }, [member?.id]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      classNames={{ modal: "w-[90%] lg:min-w-[960px] bg-white rounded-[20px]" }}
    >
      <div className="px-4 lg:px-[25px] py-[30px]">
        <div className="flex flex-col lg:flex-row items-start lg:space-x-[30px] space-y-[30px] lg:space-y-0">
          <div>
            <Calendar
              value={activeDate}
              onChange={(val) =>
                setActiveDate(new Date(val as never as string))
              }
              tileDisabled={({ date }) => {
                if (
                  moment(date).isBetween(availability?.from, availability?.to)
                ) {
                  return false;
                }

                return true;
              }}
            />
            <div className="grid grid-cols-3 lg:grid-cols-4 mt-3 gap-3 lg:gap-5 w-[90%] lg:w-full">
              {APPOINTMENT_TIME_SLOTS.map((item) => (
                <div
                  key={item}
                  className={`w-[80px] lg:w-[112px] h-[34px] flex items-center justify-center ${
                    selectedTime === item ? "bg-primary" : "bg-[#F4F9FF]"
                  } cursor-pointer`}
                  onClick={() => setSelectedTime(item)}
                >
                  <p
                    className={`text-xs ${
                      selectedTime === item ? "text-white" : "text-black"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-[#FFF3EA] px-[10px] py-2 flex flex-row items-center space-x-[14px]">
              <div className="w-7 h-7 rounded-full bg-[#F9E8D7] flex items-center justify-center">
                <Image
                  src="/svg/alert-orange.svg"
                  width={22}
                  height={22}
                  alt="alert"
                  className="w-[22px] h-[22px] object-contain"
                />
              </div>
              <p className="font-gilroy-medium font-medium text-[15px]">
                All times are in GMT (United Kingdom)
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={member?.img}
              width={91}
              height={80}
              alt="member"
              className="w-[91px] h-[80px] object-contain"
            />
            <p className="font-gilroy-bold font-bold text-[30px] mt-[10px]">
              {member?.firstName} {member?.lastName}
            </p>
            <p className="font-gilroy-regular font-extralight text-[16px]">
              {member?.role}
            </p>
            <p className="mt-2 lg:mt-10 font-league-spartan font-semibold text-[20px]">
              You are
            </p>
            <div className="flex flex-col items-center space-y-[30px] mt-5 w-full">
              <select
                className="bg-[#F4F9FF] border border-black rounded-[10px] font-gilroy-regular font-extralight text-[18px] w-full h-[54px] px-5"
                value={typeSelected}
                onChange={(e) => setTypeSelected(e.target.value as never)}
              >
                <option value="borrower">Borrower</option>
                <option value="broker">Broker</option>
              </select>
              <Input
                placeholder="Full Name"
                className="w-full bg-[#F4F9FF] border border-black rounded-[10px] h-[54px] px-5"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                placeholder="Email"
                className="w-full bg-[#F4F9FF] border border-black rounded-[10px] h-[54px] px-5"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleBookAppointment}>
                <p className="text-white text-[20px]">Get Appointment</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BookAppointmentModal;
