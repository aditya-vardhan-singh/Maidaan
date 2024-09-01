import React from 'react';
import { Card, Image, Text, Title, Group, Button, Stack } from '@mantine/core';
import classes from './EventCard.module.css'; 
import fight from '../../assets/fight.png';

// Define a type for event data
interface EventData {
  eventName: string;
  location: string;
  startDate: string;
  endDate: string;
  applicationDeadline: string;
  imageUrl: string;
  description: string;
  detailsLink: string;
  registeredPlayers: string;
  registrationStatus: string;
  tournamentFormat: string;
  teams: string;
  matchScheduleInfo: string;
}

const EventCard: React.FC = () => {
  // Define event data inside the component
  const eventData: EventData = {
    eventName: "Champions Trophy 2024",
    location: "Mumbai, India",
    startDate: "21 Sept",
    endDate: "24 Sept, 2024",
    applicationDeadline: "1d:12h:01m",
    // imageUrl: "./", // Replace with a valid image URL
    description: "The Champions Cricket Tournament is a premier cricket event that brings together top teams from around the region to compete for the title of champion.",
    detailsLink: "https://www.championstrophy.com",
    registeredPlayers: "1500+ players",
    registrationStatus: "Open",
    tournamentFormat: "Round-robin group stage followed by knockout rounds.",
    teams: "16 teams from various regions",
    matchScheduleInfo: "Matches are held daily with fixtures announced on the official website.",
    imageUrl: ''
  };

  return (
    <Card className={classes.cardContainer} shadow="sm" padding="lg" radius="md" withBorder>
       {/* <Image className={classes.posterImage} src={eventData.imageUrl} alt={eventData.eventName} radius="md" /> */}
       <Image className={classes.posterImage} src={fight} alt={eventData.eventName} radius="md" />


      {/* Description Section */}
      <Text className={classes.description} size="sm" mt="md">
        {eventData.description}
      </Text>

      {/* Details Section */}
      <Stack className={classes.details} mt="md">
        <Group>
          <Text size="sm">
            <strong>Tournament Name:</strong> {eventData.eventName}
          </Text>
          <Text size="sm">
            <strong>Sport Category:</strong> Cricket
          </Text>
        </Group>
        <Text size="sm">
          <strong>Eligibility:</strong> Open to players aged 16 and above.
        </Text>
        <Text size="sm">
          <strong>Location:</strong> {eventData.location}
        </Text>
        <Text size="sm">
          <strong>Start Date:</strong> {eventData.startDate}
        </Text>
        <Text size="sm">
          <strong>End Date:</strong> {eventData.endDate}
        </Text>
        <Text size="sm">
          <strong>Registered Players:</strong> {eventData.registeredPlayers}
        </Text>
        <Text size="sm">
          <strong>Registration Status:</strong> {eventData.registrationStatus}
        </Text>
        <Text size="sm">
          <strong>Tournament Format:</strong> {eventData.tournamentFormat}
        </Text>
        <Text size="sm">
          <strong>Teams:</strong> {eventData.teams}
        </Text>
        <Text size="sm">
          <strong>Match Schedule:</strong> {eventData.matchScheduleInfo}
        </Text>
      </Stack>
    </Card>
  );
};

export default EventCard;
