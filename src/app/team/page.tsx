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

const TeamList = ({
  team,
  setActiveMember,
}: {
  team: TeamMember[];
  setActiveMember: (item: TeamMember) => void;
}) => {
  return (
    <div className="bg-[#C5D3DD] flex flex-row items-start space-x-10 overscroll-x-scroll py-4 lg:py-[26px] px-5 lg:px-[100px] mt-[30px]">
      {team.length > 0 &&
        team.map((item) => (
          <Reveal
            key={item.id}
            className="max-w-[160px] cursor-pointer"
            delay={0.2 * item.id}
          >
            <div onClick={() => setActiveMember(item)}>
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
      <div className="px-5 lg:px-[100px] mt-[50px]">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-league-spartan font-bold text-[70px] text-primary hidden lg:block">
            A Team <br />
            Of Lending
            <br />
            Bridge Experts
          </h1>
          <div className="w-full lg:w-[40%]">
            <div className="flex flex-row items-center space-x-3">
              {activeMember && activeMember?.img && (
                <div className="w-[150px] h-[140px] rounded-[20px] overflow-hidden bg-white relative">
                  <Image
                    src={activeMember.img}
                    width={107}
                    height={138}
                    alt="img"
                    className="w-[107px] h-[138px] object-contain absolute -bottom-5 left-1/2 -translate-x-1/2"
                  />
                </div>
              )}
              <div className="flex flex-col space-y-2">
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
            <div>
              <p className="font-league-spartan font-semibold text-[35px] lg:text-[50px]">
                {activeMember?.firstName}
              </p>
              <p className="font-league-spartan font-semibold text-primary text-[25px]">
                {activeMember?.role}
              </p>
              <p className="mt-[10px] font-gilroy-regular font-extralight">
                {activeMember?.experience}
              </p>
              <Button
                className="w-[370px] lg:w-[400px] mt-[30px]"
                onClick={() => setIsBookAppointmentModalVisible(true)}
              >
                <p className="text-white font-bold uppercase text-[20px]">
                  Book an appointment
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <TeamList team={team} setActiveMember={(item) => setActiveMember(item)} />
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
