import { Button, Overlay, Text, Title } from "@mantine/core";
import cx from "clsx";
import classes from "./HeroImageBackground.module.css";

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          "Elevate Your Game and Unlock Your{" "}
          <Text component="span" inherit className={classes.highlight}>
            Full Potential"
          </Text>
        </Title>

        <div className={classes.controls}>
          <a href="/tournaments" className={classes.a}>
            <Button className={classes.control} variant="white" size="lg">
              Explore Tournaments
            </Button>
          </a>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Find a Sports Event
          </Button>
        </div>
      </div>
    </div>
  );
}
