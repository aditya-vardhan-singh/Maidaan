import { Button, Image, Text, Title } from '@mantine/core';
import image from '../../assets/paraolympic.gif';
import classes from './EmailBanner.module.css';

export function EmpowerInspire() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Empower and Inspire</Title>
          <Text fz="sm" c="dimmed" className={classes.description}>
            Engage in initiatives that promote inclusivity in sports. Support or participate in
            programs that encourage everyone, including women and those with disabilities, to thrive
            in the sports community.
          </Text>

          <div className={classes.controls}>
            <Button className={classes.createProfilebtn} color="">
              Get Invovled
            </Button>
          </div>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </>
  );
}
