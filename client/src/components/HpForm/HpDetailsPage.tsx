import {
  Button,
  Container,
  Grid,
  Group,
  TextInput,
  Textarea,
  Select,
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

const sportsCategories = [
  { value: "football", label: "Football" },
  { value: "basketball", label: "Basketball" },
  { value: "cricket", label: "Cricket" },
  { value: "tennis", label: "Tennis" },
  { value: "badminton", label: "Badminton" },
  { value: "swimming", label: "Swimming" },
  { value: "running", label: "Running" },
  { value: "yoga", label: "Yoga" },
  { value: "gymnastics", label: "Gymnastics" },
  { value: "martial_arts", label: "Martial Arts" },
  { value: "weightlifting", label: "Weightlifting" },
  { value: "cycling", label: "Cycling" },
  { value: "volleyball", label: "Volleyball" },
  { value: "table_tennis", label: "Table Tennis" },
  { value: "archery", label: "Archery" },
];

function HpDetailsPage({ page, setPage, tournament, setTournament }: NavProps) {
  const today = new Date().toISOString().split("T")[0];

  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (/^\d*\.?\d*$/.test(value)) {
      // Allow only numbers and a single dot for decimals
      setTournament({
        ...tournament,
        details: { ...tournament.details, registrationFees: value },
      });
      setError(null);
    } else {
      setError("Please enter a valid number");
    }
  };

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
            value={tournament.details.tournamentName}
            onChange={(e) =>
              setTournament({
                ...tournament,
                details: {
                  ...tournament.details,
                  tournamentName: e.target.value,
                },
              })
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
                .split("T")[1]
            }
            label="Start Date"
            placeholder="DD/MM/YYYY"
            required
            value={tournament.details.startDate}
            onChange={(e) =>
              setTournament({
                ...tournament,
                details: { ...tournament.details, startDate: e.target.value },
              })
            }
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            type="date"
            min={tournament.details.startDate}
            label="End Date"
            placeholder="DD/MM/YYYY"
            required
            value={tournament.details.endDate}
            onChange={(e) =>
              setTournament({
                ...tournament,
                details: {
                  ...tournament.details,
                  endDate: e.target.value,
                },
              })
            }
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            <Select
              label="Choose Sports"
              placeholder="Select Sports"
              required
              value={tournament.details.selectedOption}
              onChange={(value) => {
                if (value !== null) {
                  setTournament({
                    ...tournament,
                    details: { ...tournament.details, selectedOption: value },
                  });
                }
              }}
              data={sportsCategories}
            />
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            <TextInput
              label="Registration Fees"
              placeholder="Enter the Registration Fees"
              value={tournament.details.registrationFees}
              onChange={handleChange}
              error={error}
              rightSection="₹"
            />
            <br />
          </div>
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            label="Venue Name"
            placeholder="Enter the venue name"
            required
            value={tournament.details.venueName}
            onChange={(e) =>
              setTournament({
                ...tournament,
                details: { ...tournament.details, venueName: e.target.value },
              })
            }
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            label="City"
            placeholder="Enter City"
            required
            value={tournament.details.city}
            onChange={(e) =>
              setTournament({
                ...tournament,
                details: { ...tournament.details, city: e.target.value },
              })
            }
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            label="Tournament Details"
            placeholder="Provide details of the tournament"
            required
            value={tournament.details.tournamentDetails}
            onChange={(e) =>
              setTournament({
                ...tournament,
                details: {
                  ...tournament.details,
                  tournamentDetails: e.target.value,
                },
              })
            }
          />
        </Grid.Col>
      </Grid>
      <Group mt={30}>
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
