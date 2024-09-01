import React, { useState } from 'react';
import { TextInput, FileInput, Container, Grid, Image, Button, Group, Select } from '@mantine/core';
import styles from './PspPersonalInformation.module.css';

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function PspPersonalInformation({ page, setPage }: NavProps) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (file: File) => {
    setImage(file);
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  return (
    <Container className={styles.formContainer}>
    <Grid>
      <Grid.Col span={8}>
        <Grid>
          <Grid.Col span={12}>
            <TextInput label="Name" placeholder="Full Name" required />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput label="Username" placeholder="Unique Username" required />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput label="Bio" placeholder="Short Description" required />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput label="Date of Birth" placeholder="DD/MM/YYYY" required />
          </Grid.Col>
          <Grid.Col span={12}>
            <Select
              label="Gender"
              placeholder="Select Gender"
              data={['Male', 'Female', 'Other']}
              required
            />
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={4}>
        <FileInput
          label="Profile Picture"
          placeholder="Upload Image"
          accept="image/*"
          onChange={(file) => handleImageChange(file as File)}
        />
        {preview && (
          <Image
            src={preview}
            alt="Uploaded Image"
            radius="md"
            mt="md"
          />
        )}
      </Grid.Col>
    </Grid>
    <Group mt="md">
      {/* <Button className={styles.backButton}>Back to Home page</Button> */}
      <Button onClick={() => setPage('PrizesPage')} className={styles.nextButton} color='#058A4A'>
      Jump to Contact Information
      </Button>
    </Group>
  </Container>
  );
}

export default PspPersonalInformation;
