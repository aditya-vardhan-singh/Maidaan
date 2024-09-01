import { Button, Image, Text, Title } from '@mantine/core';
import image from '../../assets/coach.gif';
import classes from './EmailBanner.module.css';

export function LearnFromBest() {
  return (
    <div className={classes.wrappertour} id="tour">
      <Image src={image} className={classes.image} />
      <div className={classes.body}>
        <Title className={classes.title}>Learn from the Best</Title>
        <Text fz="sm" c="dimmed" className={classes.description}>
          Access top-tier coaching and training through courses offered by elite academies and
          fitness centers. Whether online or offline, elevate your skills with guidance from the
          pros.
        </Text>

        <div className={classes.controls}>
          <Button className={classes.createProfilebtn} color="">
            Discover Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
