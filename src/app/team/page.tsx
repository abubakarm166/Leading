"use client";
import Button from "@/components/common/Button";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Reveal from "@/components/common/Reveal";
import BookAppointmentModal from "@/components/Team/BookAppointmentModal";
import { TeamMember } from "@/types";
import { listTeam } from "@/utils/api/team";
import { useEffectAsync } from "@/utils/hooks";
import Image from "next/image";
import { useState } from "react";

const TeamList = ({ team }: { team: TeamMember[] }) => {
  return (
    <div className="bg-[#C5D3DD] py-[26px] px-[100px] mt-[30px]">
      {team.length > 0 &&
        team.map((item) => (
          <Reveal key={item.id} className="max-w-[160px]" delay={0.2 * item.id}>
            <div>
              <div className="bg-white w-[160px] h-[150px] rounded-[20px] relative">
                <Image
                  src={item.img}
                  width={114}
                  height={147}
                  alt={item.firstName}
                  className="w-[114px] h-[147px] object-contain mx-auto absolute -bottom-5 left-1/2 -translate-x-1/2"
                />
              </div>
              <p className="font-league-spartan font-semibold text-[18px] text-center mt-5">
                {item.firstName} {item.lastName}
              </p>
              <p className="font-gilroy-regular text-[12px] font-extralight text-[#434343] text-center">
                {item.role}
              </p>
            </div>
          </Reveal>
        ))}
    </div>
  );
};

const TeamPage = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [activeMember, setActiveMember] = useState<TeamMember>();
  const [isBookAppointmentModalVisible, setIsBookAppointmentModalVisible] =
    useState(false);

  useEffectAsync(async () => {
    const res = await listTeam();
    if (res?.length > 0) {
      setTeam(res);
      setActiveMember(res?.[0]);
    }
  }, []);

  return (
    <main className="bg-primary-bg">
      <Navbar />
      <div className="pl-[100px] pr-[150px] mt-[50px]">
        <h1 className="font-league-spartan font-bold text-[70px] text-primary">
          A Team Of Lending
          <br />
          Bridge Experts
        </h1>
        <div className="flex flex-row items-center justify-between mt-[50px]">
          <div>
            <p className="font-league-spartan font-semibold text-[50px]">
              {activeMember?.firstName}
            </p>
            <p className="font-league-spartan font-semibold text-primary text-[25px]">
              {activeMember?.role}
            </p>
            <p className="mt-[30px] font-gilroy-regular font-extralight">
              {activeMember?.experience}
            </p>
            <div className="flex flex-row items-center space-x-[10px] mt-[18px]">
              <a href={`mailto:${activeMember?.email}`}>
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
                onClick={() => window.open(activeMember?.linkedIn, "_blank")}
              />
            </div>
          </div>
          <div className="relative">
            {activeMember && (
              <Image
                src={activeMember?.img}
                width={247}
                height={332}
                alt={activeMember.firstName}
                className="w-[247px] h-[332px] object-cover"
              />
            )}
            <Button
              className="absolute bottom-0 -left-[30%] w-[400px]"
              onClick={() => setIsBookAppointmentModalVisible(true)}
            >
              <p className="text-white font-bold uppercase text-[20px]">
                Book an appointment
              </p>
            </Button>
          </div>
        </div>
      </div>
      <TeamList team={team} />
      <ContactUs />
      <Footer />
      <BookAppointmentModal
        isOpen={isBookAppointmentModalVisible}
        member={activeMember as TeamMember}
        onClose={() => setIsBookAppointmentModalVisible(false)}
      />
    </main>
  );
};

export default TeamPage;
