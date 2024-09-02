import { Container, Text } from "@mantine/core";
// import { IconLocation, IconCalendar } from 'iconsax-react';
import NextUpTcard from "./NextUpTcard";
import Tcard from "./Tcard";
import classes from "./Tournaments.module.css";

function Tournaments() {
  return (
    <Container size="lg" className={classes.container}>
      <Text className={classes.heading}>Ongoing</Text>
      <a href="/tournaments/details" style={{ textDecoration: "none" }}>
        <Tcard />
      </a>

      <Text className={classes.heading} mt={20}>
        Next Up
      </Text>
      <a href="/tournaments/details" style={{ textDecoration: "none" }}>
        <NextUpTcard />
      </a>
    </Container>
  );
}

export default Tournaments;
