import {
    Group,Button,Divider,Box,Burger,Drawer,ScrollArea,rem,useMantineTheme,} from '@mantine/core';
  import { MantineLogo } from '@mantinex/mantine-logo';
  import { useDisclosure } from '@mantine/hooks';
  import classes from './HpNav.module.css';
  interface NavProps {
    page:string;
   setPage: React.Dispatch<React.SetStateAction<string>>
  }
  
  export function HpNav({page,setPage}:NavProps) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

  
    return (
      <Box pb={0} className={classes.Nav}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <MantineLogo size={30} />
  
            <Group visibleFrom="sm">

              <Button color='#058A4A'className={classes.Signbtn}><a href="/SignUp" className={classes.Signbtn}>Sign up</a></Button>
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
  
            <Group justify="center" grow pb="xl" px="md">
              <Button color='#058A4A' className={classes.Signbtn} ><a href="/SignUp" className={classes.Signbtn}>Sign up</a></Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }