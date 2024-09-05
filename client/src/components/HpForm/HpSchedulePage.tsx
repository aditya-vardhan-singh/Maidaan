import React, { useState } from "react";
import { TextInput, Container, Grid, Button, Group } from "@mantine/core";
import { Tournament } from "@/pages/HostingPage";
import styles from "./HpDetailsPage.module.css";

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  tournament: Tournament;
  setTournament: React.Dispatch<React.SetStateAction<Tournament>>;
}

interface Schedule {
  scheduleName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

function HpSchdulePage({ page, setPage, tournament, setTournament }: NavProps) {
  // const [schedules, setSchedules] = useState<ScheduleData[]>([
  //   {
  //     scheduleName: "",
  //     startDate: "",
  //     startTime: "",
  //     endDate: "",
  //     endTime: "",
  //   },
  // ]);

  const handleAddSchedule = () => {
    setTournament({
      ...tournament,
      schedules: [
        ...tournament.schedules,
        {
          scheduleName: "",
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: "",
        },
      ],
    });
  };

  const handleChange = (
    index: number,
    field: keyof Schedule,
    value: string,
  ) => {
    const newSchedules = tournament.schedules.map((schedule, i) =>
      i === index ? { ...schedule, [field]: value } : schedule,
    );
    setTournament({ ...tournament, schedules: newSchedules });
  };

  const handleDeleteSchedule = (index: number) => {
    const newSchedules = tournament.schedules.filter((_, i) => i !== index);
    setTournament({ ...tournament, schedules: newSchedules });
  };

  return (
    <div className={styles.box}>
    <Container mt={30} className={styles.formContainer}>
      {tournament.schedules.map((schedule, index) => (
        <div key={index} className={styles.scheduleContainer}>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                type="text"
                autoComplete="schedule-name"
                label="Schedule name"
                placeholder="Enter the official tournament event name"
                required
                value={schedule.scheduleName}
                onChange={(e) =>
                  handleChange(index, "scheduleName", e.target.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <TextInput
                type="date"
                label="Start date"
                placeholder="DD/MM/YYYY"
                required
                value={schedule.startDate}
                onChange={(e) =>
                  handleChange(index, "startDate", e.target.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <TextInput
                type="time"
                label="Start time"
                placeholder="HH:MM"
                required
                value={schedule.startTime}
                onChange={(e) =>
                  handleChange(index, "startTime", e.target.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <TextInput
                type="date"
                label="End date"
                placeholder="DD/MM/YYYY"
                required
                value={schedule.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <TextInput
                type="time"
                label="End time"
                placeholder="HH:MM"
                required
                value={schedule.endTime}
                onChange={(e) => handleChange(index, "endTime", e.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Button
                variant="outline"
                color="red"
                onClick={() => handleDeleteSchedule(index)}
              >
                Delete Schedule
              </Button>
            </Grid.Col>
          </Grid>
        </div>
      ))}

      <Button
        className={styles.addScheduleButton}
        color="#058A4A"
        fullWidth
        mt="md"
        onClick={handleAddSchedule}
      >
        Add Schedule
      </Button>
      <Group mt={50}>
        <Button onClick={() => setPage("PrizesPage")} color="#058A4A">
          Prev
        </Button>
        <Button
          onClick={() => {
            setPage("SubmitPage");
          }}
          color="#058A4A"
        >
          Next
        </Button>
      </Group>
    </Container>
    </div>
  );
}

export default HpSchdulePage;
