import React from "react";
import {
  Button,
  Container,
  Grid,
  Group,
  TextInput,
  Checkbox,
} from "@mantine/core";
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
        <Group>
          <Group>
          <Grid.Col span={12}>
          <TextInput
            type="text"
            autoComplete="rules"
            label="Tournament Rules"
            placeholder="Enter tournamentRules"
            required
          />
        </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                type="text"
                autoComplete="Prize Name (Optional)"
                label="Prize Name"
                placeholder="Enter Prize Name"
                value={prize.prizeName}
                onChange={(e) =>
                  setPrize({ ...prize, prizeName: e.target.value })
                }
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
          </Group>
          <Group>
            <Grid.Col span={7}>
              <Checkbox label="Trophy" />
            </Grid.Col>
            <Grid.Col span={7}>
              <Checkbox label="Medal" />
            </Grid.Col>
            <Grid.Col span={7}>
              <Checkbox label="Certificate" />
            </Grid.Col>
            <Grid.Col span={7}>
              <Checkbox label="Participation Certificate" />
            </Grid.Col>
          </Group>
        </Group>
        <Grid.Col span={8} mt="md">
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
