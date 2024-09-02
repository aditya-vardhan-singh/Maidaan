import { Image, Text, Title } from '@mantine/core';
import image from '../../assets/kheloindia.jpg';
import classes from './GpBanner.module.css';

export function GpBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          Crafting a Healthier Tomorrow: The Importance of Government Initiatives
        </Title>

        <Text c="dimmed" className={classes.description}>
          Government fitness and sports schemes are the pulse of a healthier nation. They empower
          youth, inspire excellence, and unite communities, unlocking potential and paving the way
          for a vibrant, active India. By championing wellness and nurturing talent, they shape the
          future of our country.
        </Text>
      </div>
      <Image src={image} className={classes.image} />
    </div>
  );
}
