import React from 'react';
import { Card, Group, Stack, Title, Text } from '@mantine/core';
import { IconWorld, IconX, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import classes from './CompetitionDetails.module.css';

const CompetitionDetails: React.FC = () => {
  // Define event details within the component
  const eventData = {
    title: "Champions Trophy 2024",
    startDate: "21 Sept",
    endDate: "24 Sept, 2024",
    location: "Mumbai, India",
    applicationDeadline: "1d:12h:01m",
  };

  return (
    <Card className={classes.cardContainer} shadow="sm" radius="md" withBorder>
      <Title className={classes.title} order={2}>
        {eventData.title}
      </Title>
      <Group className={classes.detailsGroup} mt="md">
        {/* Left Side */}
        <Stack className={classes.detailsSection}>
          <Text size="sm" className={classes.label}>
            Scheduled for
          </Text>
          <Title order={4} className={classes.date}>
            {eventData.startDate} - {eventData.endDate}
          </Title>
          <Text size="sm" className={classes.label}>
            Application closes in
          </Text>
          <Title order={4} className={classes.applicationDeadline}>
            {eventData.applicationDeadline}
          </Title>
        </Stack>
        
        {/* Right Side */}
        <Stack className={classes.detailsSection}  align="flex-end">
          <Text size="sm" className={classes.label}>
            Location
          </Text>
          <Title order={4} className={classes.location}>
            {eventData.location}
          </Title>
          {/* Social Media Icons */}
          <Group >
            <IconWorld size={16} color="#ff6f00" />
            <IconX size={16} color="#ff6f00" />
            <IconBrandFacebook size={16} color="#ff6f00" />
            <IconBrandInstagram size={16} color="#ff6f00" />
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};

export default CompetitionDetails;
