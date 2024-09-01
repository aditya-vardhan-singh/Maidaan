import { Button, Image, Text, Title } from '@mantine/core';
import image from '../../assets/gif1.gif';
import classes from './EmailBanner.module.css';

export function EmailBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Your Sports Profile, Perfected</Title>
        <Text fz="sm" c="dimmed" className={classes.description}>
          Capture your milestones, share your victories, and grow your network. Whether you’re an
          emerging talent or a seasoned athlete, your profile tells the story of your passion and
          dedication.
        </Text>

        <div className={classes.controls}>
          <Button className={classes.createProfilebtn} color="">
            Create Your Profile
          </Button>
        </div>
      </div>
      <Image src={image} className={classes.image} />
    </div>
  );
}
