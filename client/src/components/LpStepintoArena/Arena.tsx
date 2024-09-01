import { Container, Text, Button, Group } from '@mantine/core';
import classes from './Arena.module.css';

export function Arena() {
  return (
    <div className={classes.wrapper}>
      <Container size={900} className={classes.inner}>
        <h1 className={classes.title}>Step Into the Arena with Maidaan</h1>

        <Text className={classes.description} color="dimmed">
          Ready to elevate your game? Whether you’re an athlete chasing glory, <br /> a coach
          shaping champions, or a sports enthusiast with a passion for play,
          <br /> Maidaan is your ultimate gateway to the world of sports excellence.
        </Text>

        <Group className={classes.controls}>
          <h1>Join the Action –</h1>

          <a href="Signup">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Sign Up Now
            </Button>
          </a>
        </Group>
        <Group className={classes.controls}>
          <h1>Make Your Mark –</h1>

          <a href="/HostingPage">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Host an Event
            </Button>
          </a>
        </Group>
      </Container>
    </div>
  );
}
