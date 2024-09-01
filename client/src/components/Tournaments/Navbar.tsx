import React from 'react';
import { Container, Button, Group, Text } from '@mantine/core';
import classes from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={classes.navbar}>
      <Container size="lg" className={classes.container}>
        <Text className={classes.logo}>Maidaan</Text>
        <Group  className={classes.links}>
          <Text>Tournaments</Text>
          <Text>Government Schemes</Text>
        </Group>
        <Group  className={classes.buttons}>
          <Button variant="outline" color="yellow">Host an Event</Button>
          <Button color="yellow">Sign in</Button>
        </Group>
      </Container>
    </div>
  );
};

export default Navbar;
