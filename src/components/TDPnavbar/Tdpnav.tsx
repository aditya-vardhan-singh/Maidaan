

import { Button, Paper, Text, Group, CloseButton } from '@mantine/core';
import classes from './Tdpnav.module.css'; 


export function Tdpnav() {
  return (
    <Paper  p="lg" >
      <Group  mt="md">
        <Button  className={classes.tdpnavbtn} variant="default" size="xs">
        Overview
        </Button>
        <Button className={classes.tdpnavbtn} variant="outline" size="xs">
        Prizes
        </Button>
        <Button className={classes.tdpnavbtn} variant="outline" size="xs">
        Schedule
        </Button>
      </Group>
    </Paper>
  );
}
