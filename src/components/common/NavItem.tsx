"use client";

import { Menu, MenuItem } from "@szhsin/react-menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  options?: { title: string; href: string }[];
  href?: string;
}

const NavItem: React.FC<Props> = ({ title, options, href }) => {
  const router = useRouter();
  const hasDropdown = Boolean(options && options.length > 0);

  const handleOnClick = (url: string) => {
    if (!url) return;
    router.push(url);
  };

  if (hasDropdown) {
    return (
      <Menu
        menuButton={
          <div className="flex flex-row items-center space-x-[10px]">
            <p className="cursor-pointer">{title}</p>
            <Image
              src="/svg/chevron-down-black.svg"
              width={11}
              height={7}
              alt=""
              className="h-[7px] w-[11px] object-cover"
            />
          </div>
        }
        transition
        menuStyle={{ marginTop: 15 }}
      >
        {options!.map((item, idx) => (
          <MenuItem key={idx} onClick={() => handleOnClick(item.href)}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className="cursor-pointer transition-opacity hover:opacity-85"
      >
        {title}
      </Link>
    );
  }

  return <span>{title}</span>;
};

export default NavItem;
