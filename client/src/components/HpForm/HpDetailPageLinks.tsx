import { Button, Container, FileInput, Grid, Group, Image, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import styles from './HpDetailsPage.module.css';

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function HpDetailsPageLinks({ page, setPage }: NavProps) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (file: File) => {
    setImage(file);
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  return (
    <Container mt={30} className={styles.formContainer}>
      <Grid>
        <Grid.Col span={8}>
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                label="Official Link"
                placeholder="Enter the official tournament website URL"
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Facebook Link" placeholder="Enter the Facebook page URL" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="X Link" placeholder="Enter the X handle or link" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Instagram Link" placeholder="Enter the Instagram profile URL" />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={4}>
          <FileInput
            label="Upload Poster Image*"
            placeholder="Upload the event poster image"
            // icon={<IconUpload size={14} />}
            accept="image/*"
            onChange={(file) => handleImageChange(file as File)}
          />
          {preview && <Image src={preview} alt="Uploaded Image" mt="md" radius="md" />}
        </Grid.Col>
      </Grid>
      <Group mt={50}>
        <Button onClick={() => setPage('DetailsPage')} color="#058A4A">
          Prev
        </Button>
        <Button onClick={() => setPage('PrizesPage')} color="#058A4A">
          Next
        </Button>
      </Group>
    </Container>
  );
}

export default HpDetailsPageLinks;
