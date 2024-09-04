import { useState } from "react";
import MaidaanLogo from '@/assets/MaidaanLogoTwo.png'
import { Group, Code, Button } from "@mantine/core";
import {
  IconUser,
  IconPhone,
  IconTrophy,
  IconMedal,
  IconFileText,
  IconSwitchHorizontal,
  IconLogout,
  IconMenu, // Icon for mobile menu toggle
} from "@tabler/icons-react";

import classes from "./PspNav.module.css";

const data = [
  {
    link: "Personal Information",
    label: "Personal Information",
    icon: IconUser,
  },
  {
    link: "Contact Information",
    label: "Contact Information",
    icon: IconPhone,
  },
  { link: "Sport Profile", label: "Sport Profile", icon: IconTrophy },
  {
    link: "Tournament Participation",
    label: "Tournament Participation",
    icon: IconMedal,
  },
  { link: "Document", label: "Document", icon: IconFileText },
];
interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}
export function PspNav({ page, setPage }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = data.map((item) => (
    <p
      className={classes.link}
      data-active={item.link === page || undefined}
      // href={item.link}
      key={item.label}
      style={{ cursor: "pointer" }}
      onClick={(event) => {
        event.preventDefault();
        if (mobileMenuOpen) setMobileMenuOpen(false);
        setPage(`${item.link}`);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </p>
  ));

  return (
    <nav
      className={`${classes.navbar} ${mobileMenuOpen ? classes.navbarOpen : ""}`}
    >
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
        <a href="/" style={{ textDecoration: "none", color: "initial" }}>
            {" "}
            {/* <MantineLogo size={30} /> */}
            <img src={MaidaanLogo} alt="" className={classes.Logo} />
          </a>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
