import { Button, Image, Text, Title } from '@mantine/core';
import image from '../../assets/tournament.gif';
import classes from './EmailBanner.module.css';

export function TournamentBanner() {
  return (
    <div className={classes.wrappertour} id="tour">
      <Image src={image} className={classes.image} />
      <div className={classes.body}>
        <Title className={classes.title}>Dive into the Best Tournaments</Title>
        <Text c="dimmed" className={classes.description}>
          From thrilling tournaments to casual matches, discover and join events that ignite your
          passion. Whether you’re competing in football, cricket, or other exciting sports, the
          perfect opportunity awaits.
        </Text>

        <div className={classes.controls}>
          <a href="/Tournaments" style={{textDecoration:'none'}}><Button className={classes.createProfilebtn} color="">
            Explore Tournaments
          </Button></a>
        </div>
      </div>
    </div>
  );
}
