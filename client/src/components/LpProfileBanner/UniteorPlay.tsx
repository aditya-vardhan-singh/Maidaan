import { Button, Image, Text, Title } from '@mantine/core';
import image from '../../assets/winner.gif';
import classes from './EmailBanner.module.css';

export function UnitrorPlay() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Unite or Play Solo</Title>
        <Text  c="dimmed" className={classes.description}>
          Join forces with others or showcase your individual skills. Find or create teams that
          match your ambition and compete at the highest level—or just for the love of the game.
        </Text>

        <div className={classes.controls}>
          <Button className={classes.createProfilebtn} color="">
            Join a Team
          </Button>
        </div>
      </div>
      <Image src={image} className={classes.image} />
    </div>
  );
}
