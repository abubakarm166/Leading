"use client";
import { Menu, MenuItem } from "@szhsin/react-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  options?: { title: string; href: string }[];
  href?: string;
}

const NavItem: React.FC<Props> = ({ title, options, href }) => {
  const router = useRouter();

  const handleOnClick = (url: string) => {
    if (!url) {
      return;
    }
    router.push(url);
  };

  return (
    <>
      {options && options?.length > 0 ? (
        <Menu
          menuButton={
            <div className="flex flex-row items-center space-x-[10px]">
              <p className="cursor-pointer">{title}</p>
              <Image
                src="/svg/chevron-down-black.svg"
                width={11}
                height={7}
                alt="chevron-black"
                className="w-[11px] h-[7px] object-cover"
              />
            </div>
          }
          transition
          menuStyle={{ marginTop: 15 }}
        >
          {options.map((item, idx) => (
            <MenuItem key={idx} onClick={() => handleOnClick(item.href)}>
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      ) : (
        <p
          className="cursor-pointer"
          onClick={() => handleOnClick(href as string)}
        >
          {title}
        </p>
      )}
    </>
  );
};

export default NavItem;
