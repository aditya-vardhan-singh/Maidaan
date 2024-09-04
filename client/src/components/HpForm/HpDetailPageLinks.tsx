import {
  Button,
  Container,
  FileInput,
  Grid,
  Group,
  Image,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { Tournament } from "@/pages/HostingPage";
import styles from "./HpDetailsPage.module.css";

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  tournament: Tournament;
  setTournament: React.Dispatch<React.SetStateAction<Tournament>>;
}

function HpDetailsPageLinks({
  page,
  setPage,
  tournament,
  setTournament,
}: NavProps) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (file: File) => {
    setImage(file);
    const objectUrl: string = URL.createObjectURL(file);
    setPreview(objectUrl);
    setTournament({
      ...tournament,
      links: { ...tournament.links, posterImage: objectUrl },
    });
  };

  return (
    <Container mt={30} className={styles.formContainer}>
      <Grid>
        <Grid.Col span={8}>
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                type="text"
                autoComplete="Official link"
                label="Official link"
                placeholder="Enter the official tournament website URL"
                value={tournament.links.officialLink}
                onChange={(e) =>
                  setTournament({
                    ...tournament,
                    links: {
                      ...tournament.links,
                      officialLink: e.target.value,
                    },
                  })
                }
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                type="text"
                autoComplete="Facebook link"
                label="Facebook link"
                placeholder="Enter the Facebook page URL"
                value={tournament.links.facebookLink}
                onChange={(e) =>
                  setTournament({
                    ...tournament,
                    links: {
                      ...tournament.links,
                      facebookLink: e.target.value,
                    },
                  })
                }
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                type="text"
                autoComplete="X link"
                label="X link"
                placeholder="Enter the X handle or link"
                value={tournament.links.xLink}
                onChange={(e) =>
                  setTournament({
                    ...tournament,
                    links: { ...tournament.links, xLink: e.target.value },
                  })
                }
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                type="text"
                autoComplete="Insta link"
                label="Insta link"
                placeholder="Enter the Instagram profile URL"
                value={tournament.links.instaLink}
                onChange={(e) =>
                  setTournament({
                    ...tournament,
                    links: { ...tournament.links, instaLink: e.target.value },
                  })
                }
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={4}>
          <FileInput
            label="Upload poster image"
            placeholder="Upload the event poster image"
            // icon={<IconUpload size={14} />}
            accept="image/*"
            onChange={(file) => handleImageChange(file as File)}
          />
          {preview && (
            <Image src={preview} alt="Uploaded Image" mt="md" radius="md" />
          )}
        </Grid.Col>
      </Grid>
      <Group mt={50}>
        <Button onClick={() => setPage("DetailsPage")} color="#058A4A">
          Prev
        </Button>
        <Button onClick={() => setPage("PrizesPage")} color="#058A4A">
          Next
        </Button>
      </Group>
    </Container>
  );
}

export default HpDetailsPageLinks;
