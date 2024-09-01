import { useState } from 'react';
import { Group, Code, Button } from '@mantine/core';
import {
  IconUser,
  IconPhone,
  IconTrophy,
  IconMedal,
  IconFileText,
  IconSwitchHorizontal,
  IconLogout,
  IconMenu, // Icon for mobile menu toggle
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';

import classes from './PspNav.module.css';

const data = [
  { link: '', label: 'Personal Information', icon: IconUser },
  { link: '', label: 'Contact Information', icon: IconPhone },
  { link: '', label: 'Sport Profile', icon: IconTrophy },
  { link: '', label: 'Tournament', icon: IconMedal },
  { link: '', label: 'Document', icon: IconFileText },
];

export function PspNav() {
  const [active, setActive] = useState('Personal Information');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={`${classes.navbar} ${mobileMenuOpen ? classes.navbarOpen : ''}`}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          <MantineLogo size={28} inverted style={{ color: 'white' }} />
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
