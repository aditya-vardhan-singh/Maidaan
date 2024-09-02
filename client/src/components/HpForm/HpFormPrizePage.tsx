import React from "react";
import { Button, Container, Grid, Group, TextInput } from "@mantine/core";
import styles from "./HpDetailsPage.module.css";

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  prize: Prize;
  setPrize: React.Dispatch<React.SetStateAction<Prize>>;
}

interface Prize {
  prizeName: string;
  trophyDesc: string;
  medalDesc: string;
  amount: string;
}

function HpFormPrizePage({ page, setPage, prize, setPrize }: NavProps) {
  return (
    <Container mt={30} className={styles.formContainer}>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            type="text"
            autoComplete="prize-name"
            label="prize-name"
            placeholder="Enter tournament Name"
            required
            value={prize.prizeName}
            onChange={(e) => setPrize({ ...prize, prizeName: e.target.value })}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            type="number"
            label="Amount"
            placeholder="INR 1 Lakh for 1st Position"
            value={prize.amount}
            onChange={(e) => setPrize({ ...prize, amount: e.target.value })}
          />
        </Grid.Col>
        <Grid.Col span={7}>
          <TextInput
            type="text"
            autoComplete="trophy"
            label="trophy"
            placeholder="Describe the Trophy"
            required
            value={prize.trophyDesc}
            onChange={(e) => setPrize({ ...prize, trophyDesc: e.target.value })}
          />
        </Grid.Col>
        <Grid.Col span={7}>
          <TextInput
            type="text"
            autoComplete="medal"
            label="medal"
            placeholder="Describe the Medal"
            required
            value={prize.medalDesc}
            onChange={(e) => setPrize({ ...prize, medalDesc: e.target.value })}
          />
        </Grid.Col>

        <Grid.Col span={8}>
          <Button variant="outline" color="red">
            Delete Prize
          </Button>
        </Grid.Col>
      </Grid>
      <Group mt={50}>
        <Button onClick={() => setPage("LinksPage")} color="#058A4A">
          Prev
        </Button>
        <Button onClick={() => setPage("SchedulePage")} color="#058A4A">
          Next
        </Button>
      </Group>
    </Container>
  );
}

export default HpFormPrizePage;
