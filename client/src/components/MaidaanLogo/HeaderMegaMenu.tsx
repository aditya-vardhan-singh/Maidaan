import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMegaMenu.module.css';
interface NavProps {
  NavLinks: string;
  SetNavLinks: React.Dispatch<React.SetStateAction<string>>;
}

export function HeaderMegaMenu({ NavLinks, SetNavLinks }: NavProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <a href="/" style={{ textDecoration: 'none', color: 'initial' }}>
            {' '}
            <MantineLogo size={30} />
          </a>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={`${classes.link} `}>
              <p>Home</p>
            </a>
            <a onClick={() => SetNavLinks('Tournaments')} className={`${classes.link} `}>
              <p className={` ${NavLinks === 'Tournaments' ? classes.active : classes.inactive}`}>
                Tournaments
              </p>
            </a>
            <a onClick={() => SetNavLinks('Events')} className={classes.link}>
              <p className={` ${NavLinks === 'Events' ? classes.active : classes.inactive}`}>
                Events
              </p>
            </a>
            <a onClick={() => SetNavLinks('Academies')} className={classes.link}>
              <p className={` ${NavLinks === 'Academies' ? classes.active : classes.inactive}`}>
                Academies
              </p>
            </a>
            <a onClick={() => SetNavLinks('GovernmentSchemes')} className={classes.link}>
              <p
                className={` ${NavLinks === 'GovernmentSchemes' ? classes.active : classes.inactive}`}
              >
                Government Schemes
              </p>
            </a>
            <a href="/ProfilePage">pro</a>
          </Group>

          <Group visibleFrom="sm">
            {/* <a href="" className={classes.linkbtn}>
              Theme
            </a> */}
            <a href="/HostingPage" className={classes.linkbtn}>
              Host an Event
            </a>

            <Button color="#F1A02F" className={classes.Signbtn}>
              <a href="/SignUp" className={classes.Signbtn}>
                Sign up
              </a>
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a onClick={() => SetNavLinks('Tournaments')} className={classes.link}>
            Tournaments
          </a>
          <a onClick={() => SetNavLinks('Events')} className={classes.link}>
            Events
          </a>
          <a onClick={() => SetNavLinks('Academies')} className={classes.link}>
            Academies
          </a>
          <a onClick={() => SetNavLinks('GovernmentSchemes')} className={classes.link}>
            Government Schemes
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <a href="/HostingPage" className={classes.linkbtn}>
              Host an Event
            </a>
            <Button color="#F1A02F" className={classes.Signbtn}>
              <a href="/SignUp" className={classes.Signbtn}>
                Sign up
              </a>
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
