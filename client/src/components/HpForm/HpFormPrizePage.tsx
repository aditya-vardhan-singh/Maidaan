import React from 'react';
import { Button, Container, Grid, Group, TextInput } from '@mantine/core';
import styles from './HpDetailsPage.module.css';

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function HpFormPrizePage({ page, setPage }: NavProps) {
  return (
    <Container mt={30} className={styles.formContainer}>
      <Grid>
        <Grid.Col span={6}>
          <TextInput label="Prize Name" placeholder="Enter tournament Name" required />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Amount" placeholder="INR 1 Lakh for 1st Position" />
        </Grid.Col>
        <Grid.Col span={7}>
          <TextInput label="Trophy" placeholder="Describe the Trophy" required />
        </Grid.Col>
        <Grid.Col span={7}>
          <TextInput label="Medal" placeholder="Describe the Medal" required />
        </Grid.Col>

        <Grid.Col span={8}>
          <Button variant="outline" color="red">
            Delete Prize
          </Button>
        </Grid.Col>
      </Grid>
      <Group mt={50}>
        <Button onClick={() => setPage('LinksPage')} color="#058A4A">
          Prev
        </Button>
        <Button onClick={() => setPage('SchedulePage')} color="#058A4A">
          Next
        </Button>
      </Group>
    </Container>
  );
}

export default HpFormPrizePage;
