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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUser } from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import MaidaanLogo from "../../assets/MaidaanLogoTwo.png";
import classes from "./HeaderMegaMenu.module.css";


export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <a href="/" style={{ textDecoration: "none", color: "initial" }}>
            {" "}
            {/* <MantineLogo size={30} /> */}
            <img src={MaidaanLogo} alt="" className={classes.Logo} />
          </a>

          <Group h="100%" gap={0} visibleFrom="md">
            <a href="/" className={`${classes.link} `}>
              <p>Home</p>
            </a>
            <a href="/tournaments" className={`${classes.link}`}>
              <p className={`${classes.inactive}`}>Tournaments</p>
            </a>
            <a href="/events" className={classes.link}>
              <p className={`${classes.inactive}`}>Events</p>
            </a>
            <a href="/academies" className={classes.link}>
              <p className={`${classes.inactive}`}>Academies</p>
            </a>
            <a href="/government-schemes" className={classes.link}>
              <p className={`${classes.inactive}`}>Government Schemes</p>
            </a>
          </Group>

          <Group visibleFrom="md">
            <a href="/hosting" className={classes.linkbtn}>
              <p className={`${classes.inactive}`}>Host</p>
            </a>
            <a href="/profile-page">
            <div className={classes.Probtn}><IconUser size={35} color="#F1A02F" /></div>
            
            </a>
            <a href="/SignUp" className={classes.Signbtn}>
              <Button color="#F1A02F" className={classes.Signbtn}>
                Sign up
              </Button>
            </a>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="md"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <a href="/" className={classes.link}>
            Home
          </a>
          <a href="/tournaments" className={classes.link}>
            Tournaments
          </a>
          <a href="/events" className={classes.link}>
            Events
          </a>
          <a href="/academies" className={classes.link}>
            Academies
          </a>
          <a href="/government-schemes" className={classes.link}>
            Government Schemes
          </a>
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <a href="/hosting" className={classes.linkbtn}>
              Host 
            </a>
            <a href="/signup" className={classes.Signbtn}>
              <Button color="#F1A02F" className={classes.Signbtn}>
                Sign up
              </Button>
            </a>
            <a href="/profile-page" className={classes.Signbtn}>
              <Button color="#F1A02F" className={classes.Signbtn}>
                <IconUser size={30} color="white" />
              </Button>
            </a>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
