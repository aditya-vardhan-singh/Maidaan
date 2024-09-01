import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'Get Involved',
    links: [
      { label: 'Organize a Tournament', link: '#' },
      { label: 'Explore Sports Events', link: '#' },
      //   { label: 'Email newsletter', link: '#' },
      //   { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title} color="white">
          {group.title}
        </Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <MantineLogo size={30} />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} color="white">
        <Text size="sm">Privacy Policy | Terms of Service</Text>
        <Text size="sm">Copyright © 2024 Maidaan| All Rights Reserved</Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
