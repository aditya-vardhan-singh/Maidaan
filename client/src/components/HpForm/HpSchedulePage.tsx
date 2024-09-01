import React, { useState } from 'react';
import { TextInput, Container, Grid, Button, Group } from '@mantine/core';
import styles from './HpDetailsPage.module.css';

interface ScheduleData {
  scheduleName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}
interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function HpSchdulePage({ page, setPage }: NavProps) {
  const [schedules, setSchedules] = useState<ScheduleData[]>([
    { scheduleName: '', startDate: '', startTime: '', endDate: '', endTime: '' },
  ]);

  const handleAddSchedule = () => {
    setSchedules([
      ...schedules,
      { scheduleName: '', startDate: '', startTime: '', endDate: '', endTime: '' },
    ]);
  };

  const handleChange = (index: number, field: keyof ScheduleData, value: string) => {
    const newSchedules = schedules.map((schedule, i) =>
      i === index ? { ...schedule, [field]: value } : schedule
    );
    setSchedules(newSchedules);
  };

  const handleDeleteSchedule = (index: number) => {
    const newSchedules = schedules.filter((_, i) => i !== index);
    setSchedules(newSchedules);
  };

  return (
    <Container mt={30} className={styles.formContainer}>
      {schedules.map((schedule, index) => (
        <div key={index} className={styles.scheduleContainer}>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="Schedule Name"
                placeholder="Enter the official tournament event name"
                required
                value={schedule.scheduleName}
                onChange={(e) => handleChange(index, 'scheduleName', e.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <TextInput
                label="Start Date"
                placeholder="DD/MM/YYYY"
                required
                value={schedule.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <TextInput
                label="Start Time"
                placeholder="HH:MM"
                required
                value={schedule.startTime}
                onChange={(e) => handleChange(index, 'startTime', e.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <TextInput
                label="End Date"
                placeholder="DD/MM/YYYY"
                required
                value={schedule.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <TextInput
                label="End Time"
                placeholder="HH:MM"
                required
                value={schedule.endTime}
                onChange={(e) => handleChange(index, 'endTime', e.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Button variant="outline" color="red" onClick={() => handleDeleteSchedule(index)}>
                Delete Prize
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
        <Button onClick={() => setPage('PrizesPage')} color="#058A4A">
          Prev
        </Button>
        <Button onClick={() => setPage('SubmitPage')} color="#058A4A">
          Next
        </Button>
      </Group>
    </Container>
  );
}

export default HpSchdulePage;
