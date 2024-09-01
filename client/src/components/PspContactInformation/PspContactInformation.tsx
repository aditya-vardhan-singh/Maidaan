import React, { useState } from 'react';
import { TextInput, Container, Grid, Button, Group } from '@mantine/core';
import styles from './PspContactInformation.module.css';

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function PspContactInformation({ page, setPage }: NavProps) {
  return (
    <Container className={styles.formContainer}>
      <Grid>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={6}>
              <TextInput label="Email" placeholder="Email Address" required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Twitter" placeholder="@ username" required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Phone Number" placeholder="Contact Number" required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Facebook" placeholder="Profile Link" required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Location" placeholder="City, Country" required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Instagram" placeholder="Profile Link" required />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="LinkedIn" placeholder="Profile Link" required />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      <Group mt="md">
      <Button onClick={() => setPage('SportsProfilePage')} className={styles.nextButton} color='#058A4A'>
          Jump to Personal info
        </Button>
        <Button onClick={() => setPage('SportsProfilePage')} className={styles.nextButton} color='#058A4A'>
          Jump to Sports Profile
        </Button>
      </Group>
    </Container>
  );
}

export default PspContactInformation;
