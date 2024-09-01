import { Container, Text, Title } from '@mantine/core';
// import { Dots } from './Dots';
import classes from './HeroText.module.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>Unlock a World of Sports and Competition </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Step into a world where every match, tournament, and event shapes your sports journey.
            Showcase your achievements, connect with like-minded players, and inspire others to join
            you on the path to greatness.
          </Text>
        </Container>

        {/* <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button className={classes.control} size="lg">
            Purchase a license
          </Button>
        </div> */}
      </div>
    </Container>
  );
}
