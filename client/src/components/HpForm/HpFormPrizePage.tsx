import React from "react";
import {
  Button,
  Container,
  Grid,
  Group,
  TextInput,
  Checkbox,
} from "@mantine/core";
import { Tournament } from "@/pages/HostingPage";
import styles from "./HpDetailsPage.module.css";

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  tournament: Tournament;
  setTournament: React.Dispatch<React.SetStateAction<Tournament>>;
}

function HpFormPrizePage({
  page,
  setPage,
  tournament,
  setTournament,
}: NavProps) {
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
                value={tournament.prize.tournamentRules}
                onChange={(e) =>
                  setTournament({
                    ...tournament,
                    prize: {
                      ...tournament.prize,
                      tournamentRules: e.target.value,
                    },
                  })
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                type="text"
                autoComplete="Prize Name (Optional)"
                label="Prize Name"
                placeholder="Enter Prize Name"
                value={tournament.prize.prizeName}
                onChange={(e) =>
                  setTournament({
                    ...tournament,
                    prize: { ...tournament.prize, prizeName: e.target.value },
                  })
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                type="number"
                label="Amount"
                placeholder="INR 1 Lakh for 1st Position"
                value={tournament.prize.amount}
                onChange={(e) =>
                  setTournament({
                    ...tournament,
                    prize: { ...tournament.prize, amount: e.target.value },
                  })
                }
              />
            </Grid.Col>
          </Group>
          <Group>
            <Grid.Col span={7}>
              <Checkbox
                label="Trophy"
                checked={tournament.prize.trophy}
                onChange={() =>
                  setTournament({
                    ...tournament,
                    prize: {
                      ...tournament.prize,
                      trophy: !tournament.prize.trophy,
                    },
                  })
                }
              />
            </Grid.Col>
            <Grid.Col span={7}>
              <Checkbox
                label="Medal"
                checked={tournament.prize.medal}
                onChange={() =>
                  setTournament({
                    ...tournament,
                    prize: {
                      ...tournament.prize,
                      medal: !tournament.prize.medal,
                    },
                  })
                }
              />
            </Grid.Col>
            <Grid.Col span={7}>
              <Checkbox
                label="Certificate"
                checked={tournament.prize.certificate}
                onChange={() =>
                  setTournament({
                    ...tournament,
                    prize: {
                      ...tournament.prize,
                      certificate: !tournament.prize.certificate,
                    },
                  })
                }
              />
            </Grid.Col>
            <Grid.Col span={7}>
              <Checkbox
                label="Participation Certificate"
                checked={tournament.prize.participationCertificate}
                onChange={() =>
                  setTournament({
                    ...tournament,
                    prize: {
                      ...tournament.prize,
                      participationCertificate:
                        !tournament.prize.participationCertificate,
                    },
                  })
                }
              />
            </Grid.Col>
          </Group>
        </Group>
      </Grid>

      <Group mt={50}>
        <Button
          onClick={() => setPage("LinksPage")}
          styles={(theme) => ({
            root: {
              backgroundColor: "#058A4A",
              "&:hover": {
                backgroundColor: "#046C3A",
              },
            },
          })}
        >
          Prev
        </Button>

        <Button
          onClick={() => {
            setPage("SchedulePage");
          }}
          styles={(theme) => ({
            root: {
              backgroundColor: "#058A4A",
              "&:hover": {
                backgroundColor: "#046C3A",
              },
            },
          })}
        >
          Next
        </Button>
      </Group>
    </Container>
  );
}

export default HpFormPrizePage;
