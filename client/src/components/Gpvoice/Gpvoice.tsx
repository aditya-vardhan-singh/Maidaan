import { Container, Title } from "@mantine/core";
// import { Dots } from './Dots';
import classes from "../LpText/voice.module.css";

export function Gpvoice() {
  return (
    <Container className={classes.wrapper} size={1400} id="#target-section">
      <div className={classes.inner}>
        <Title className={classes.title}>
          Government Fitness and Sports Schemes{" "}
        </Title>
      </div>
    </Container>
  );
}
