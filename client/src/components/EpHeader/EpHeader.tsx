import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './EpHeader.module.css';

export function EpHeader() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>"Unlock Your Potential: Join the Adventure!" </Title>
        <Container size={640}>
          <Text size="lg" className={classes.description}>
            "Step into a world of excitement and growth! Whether you're looking to boost your
            fitness, find mental clarity, or connect with like-minded individuals, our events are
            crafted to inspire and energize you. Take the leap—join an event today and transform
            your free time into a journey of self-discovery and well-being."
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            <a href="#target-section" className={classes.a}>
              Explore Events
            </a>
          </Button>
          {/* <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
          Explore Scheme
          </Button> */}
        </div>
      </div>
    </div>
  );
}
