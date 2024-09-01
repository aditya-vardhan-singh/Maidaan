import { Container, Title } from '@mantine/core';
// import { Dots } from './Dots';
import classes from './voice.module.css';

export function VoiceFromFiled() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>Voices from the Field </Title>
      </div>
    </Container>
  );
}
