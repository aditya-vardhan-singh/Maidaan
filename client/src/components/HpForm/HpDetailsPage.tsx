import {
  Button,
  Container,
  Grid,
  Group,
  TextInput,
  Textarea,
  Select,
} from "@mantine/core";
// import React from "react";
import React, { useState } from "react";
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

function HpDetailsPage({ page, setPage, details, setDetails }: NavProps) {
  const today = new Date().toISOString().split("T")[0];

  const [cost, setCost] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (/^\d*\.?\d*$/.test(value)) {  // Allow only numbers and a single dot for decimals
      setCost(value);
      setError(null);
    } else {
      setError('Please enter a valid number');
    }
  };

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
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
        <Grid.Col span={6}>
          <div>
            <Select
              label="Choose Sports"
              placeholder="Select Sports"
              required
              value={selectedOption}
              onChange={setSelectedOption}
              data={sportsCategories}
            />
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            <TextInput
              label="Registration Fees"
              placeholder="Enter the Registration Fees"
              value={cost}
              onChange={handleChange}
              error={error}
               rightSection="₹"
            />
            <br />
            <Button
              disabled={!cost || !!error}
              onClick={() => alert(`Submitted cost: ₹${cost}`)}
              color="#058A4A"
            >
              Submit
            </Button>
          </div>
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
    </div>
  );
}

export default HpDetailsPage;
