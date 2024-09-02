import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './Apheader.module.css';

export function Apheader() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.95} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          &quot;Unleash Your Potential.
          <br /> Every Champion Was Once a Beginner Who Never Gave Up.&quot;
        </Title>
        <Container size={640}>
          <Text  className={classes.description}>
            A Place Where Every Drill, Every Practice, and Every Lesson is a Step Toward Greatness.
            Here, the Focus is on Progress, Not Perfection.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            <a href="#target-section" className={classes.a}>
              Explore Academies
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
