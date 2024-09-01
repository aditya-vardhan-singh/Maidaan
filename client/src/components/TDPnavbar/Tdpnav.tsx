import { Button, Paper, Group } from '@mantine/core';
import classes from './Tdpnav.module.css'; 

interface TdpnavProps {
  setSubPage: (page: 'home' | 'prizes' | 'Schedule') => void;
}

export function Tdpnav({ setSubPage }: TdpnavProps) {
  return (
    <Paper p="lg">
      <Group mt="md">
        <Button 
          className={classes.tdpnavbtn} 
          variant="default" 
          size="xs" 
          onClick={() => setSubPage('home')}
        >
          Overview
        </Button>
        <Button 
          className={classes.tdpnavbtn} 
          variant="outline" 
          size="xs"
          onClick={() => setSubPage('prizes')}
        >
          Prizes
        </Button>
        <Button 
          className={classes.tdpnavbtn} 
          variant="outline" 
          size="xs"
          onClick={() => setSubPage('Schedule')}
        >
          Schedule
        </Button>
      </Group>
    </Paper>
  );
}
