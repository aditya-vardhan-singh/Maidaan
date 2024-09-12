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

//Created Sports with IDs: [
//     { id: 1, sportName: 'Cricket' },
//     { id: 2, sportName: 'Football' },
//     { id: 3, sportName: 'Tennis' },
//     { id: 4, sportName: 'Badminton' },
//     { id: 5, sportName: 'Swimming' },
//     { id: 6, sportName: 'Running' },
//     { id: 7, sportName: 'Yoga' },
//     { id: 8, sportName: 'Gymnastics' },
//     { id: 9, sportName: 'Martial Arts' },
//     { id: 10, sportName: 'Weightlifting' },
//     { id: 11, sportName: 'Cycling' },
//     { id: 12, sportName: 'Volleyball' },
//     { id: 13, sportName: 'Table Tennis' },
//     { id: 14, sportName: 'Archery' }
//     { id: 29, sportName: 'Basketball'}
//   ]


const sportsCategories = [
  { value: "1", label: 'Cricket' },
    { value: "2", label: 'Hockey' },
    { value: "3", label: 'Kabaddi' },
    { value: "4", label: 'Football' },
    { value: "5", label: 'Badminton' },
    { value: "6", label: 'Tennis' },
    { value: "7", label: 'Table Tennis' },
    { value: "8", label: 'Boxing' },
    { value: "9", label: 'Wrestling' },
    { value: "10", label: 'Athletics' },
    { value: "11", label: 'Basketball' },
    { value: "12", label: 'Volleyball' },
    { value: "13", label: 'Kho Kho' },
    { value: "14", label: 'Golf' },
    { value: "15", label: 'Shooting' },
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
    <div className={styles.box}>
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
    </div>
  );
}

export default HpDetailsPage;
