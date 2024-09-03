import {
  Button,
  Container,
  Grid,
  Group,
  TextInput,
  Textarea,
} from "@mantine/core";
import React from "react";
import styles from "./HpDetailsPage.module.css";

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  details: Details;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
}

interface Details {
  tournamentName: string;
  startDate: string;
  endDate: string;
  venueName: string;
  city: string;
  tournamentDetails: string;
}

function HpDetailsPage({ page, setPage, details, setDetails }: NavProps) {
  const today = new Date().toISOString().split("T")[0];
  return (
    <Container mt={30} className={styles.formContainer}>
      <Grid>
        <Grid.Col span={12}>
          <TextInput
            type="text"
            autoComplete="Tournament Name"
            label="Tournament Name"
            placeholder="Enter Tournament Name"
            required
            value={details.tournamentName}
            onChange={(e) =>
              setDetails({ ...details, tournamentName: e.target.value })
            }
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            type="date"
            min={today}
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() + 2))
                .toISOString()
                .split("T")[0]
            }
            label="Start Date"
            placeholder="DD/MM/YYYY"
            required
            value={details.startDate}
            onChange={(e) =>
              setDetails({ ...details, startDate: e.target.value })
            }
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            type="date"
            min={details.startDate}
            label="End Date"
            placeholder="DD/MM/YYYY"
            required
            value={details.endDate}
            onChange={(e) =>
              setDetails({ ...details, endDate: e.target.value })
            }
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            label="Venue Name"
            placeholder="Enter the venue name"
            required
            value={details.venueName}
            onChange={(e) =>
              setDetails({ ...details, venueName: e.target.value })
            }
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            label="City"
            placeholder="Enter City"
            required
            value={details.city}
            onChange={(e) => setDetails({ ...details, city: e.target.value })}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            label="Tournament Details"
            placeholder="Provide details of the tournament"
            required
            value={details.tournamentDetails}
            onChange={(e) =>
              setDetails({ ...details, tournamentDetails: e.target.value })
            }
          />
        </Grid.Col>
      </Grid>
      <Group mt={50}>
        <Button onClick={() => setPage("")} color="#058A4A">
          Prev
        </Button>
        <Button onClick={() => setPage("LinksPage")} color="#058A4A">
          Next
        </Button>
      </Group>
    </Container>
  );
}

export default HpDetailsPage;
