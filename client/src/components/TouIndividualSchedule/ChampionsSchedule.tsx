import React from 'react';
import { Card, Text, Title, Group, Stack } from '@mantine/core';
import classes from './ChampionsSchedule.module.css';

// Define a type for schedule items
interface ScheduleItem {
  event: string;
  date: string;
  time: string;
}

const ChampionsSchedule: React.FC = () => {
  // Define the schedule data inside the component
  const scheduleItems: ScheduleItem[] = [
    { event: "Opening Ceremony", date: "September 30, 2024", time: "10:00 AM" },
    { event: "Group Stage Matches", date: "October 1 - October 10, 2024", time: "10:00 AM" },
    { event: "Quarterfinals", date: "October 11 - October 12, 2024", time: "10:00 AM & 2:00 PM" },
    { event: "Semifinals", date: "October 13 - October 14, 2024", time: "10:00 AM & 2:00 PM" },
    { event: "Finals", date: "October 15, 2024", time: "3:00 PM" },
    { event: "Award Ceremony", date: "October 15, 2024", time: "6:00 PM" },
    { event: "Closing Ceremony", date: "October 16, 2024", time: "10:00 AM" },
  ];

  return (
    <Card className={classes.cardContainer} shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={1} className={classes.title}>
        Champions Trophy 2024
      </Title>
      <Stack >
        {scheduleItems.map((item, index) => (
          <Card key={index} shadow="xs" padding="sm" radius="md" className={classes.scheduleCard} withBorder>
            <Text className={classes.eventTitle}>{item.event}</Text>
            <Group  mt="md" className={classes.scheduleCarddata}>
              <Text className={classes.dateText}>
                <strong>Date:</strong> {item.date}
              </Text>
              <Text className={classes.timeText}>
                <strong>Time:</strong> {item.time}
              </Text>
            </Group>
          </Card>
        ))}
      </Stack>
    </Card>
  );
};

export default ChampionsSchedule;
