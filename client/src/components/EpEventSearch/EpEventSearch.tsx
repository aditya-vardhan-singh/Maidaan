import { Button, Card, Container, Grid, Group, Image, Select, Text, Title } from '@mantine/core';
import React, { useState } from 'react';
import img from '../../assets/imgofevent.jpg';
import classes from './EventSearch.module.css'; // Ensure this path is correct

// Imaginary sports and fitness event data
const events = [
  {
    name: 'Mumbai Marathon',
    date: '2024-09-6',
    location: 'Mumbai',
    description: 'A thrilling marathon in the heart of Mumbai.',
    participants: 5000,
  },
  {
    name: 'Delhi Yoga Retreat',
    date: '2024-10-05',
    location: 'Delhi',
    description: 'A rejuvenating yoga retreat in Delhi.',
    participants: 200,
  },
  {
    name: 'Goa Triathlon',
    date: '2024-11-10',
    location: 'Goa',
    description: 'An exciting triathlon event in sunny Goa.',
    participants: 1500,
  },
  {
    name: 'Bangalore Fitness Expo',
    date: '2024-12-20',
    location: 'Bangalore',
    description: 'A leading fitness expo showcasing the latest in fitness equipment and trends.',
    participants: 3000,
  },
  {
    name: 'Kolkata Running Challenge',
    date: '2024-09-9',
    location: 'Kolkata',
    description: 'A fun running challenge for all ages in Kolkata.',
    participants: 800,
  },
  {
    name: 'Chennai Cycling Festival',
    date: '2024-10-15',
    location: 'Chennai',
    description: 'A vibrant cycling festival with races and community rides in Chennai.',
    participants: 1200,
  },
  {
    name: 'Hyderabad Martial Arts Tournament',
    date: '2024-11-25',
    location: 'Hyderabad',
    description: 'A competitive martial arts tournament featuring various disciplines.',
    participants: 1000,
  },
  {
    name: 'Pune CrossFit Games',
    date: '2024-12-10',
    location: 'Pune',
    description: 'An intense CrossFit competition in Pune.',
    participants: 700,
  },
  {
    name: 'Mumbai Marathon',
    date: '2024-09-15',
    location: 'Mumbai',
    description: 'A thrilling marathon in the heart of Mumbai.',
    participants: 5000,
  },
  {
    name: 'Delhi Yoga Retreat',
    date: '2024-10-05',
    location: 'Delhi',
    description: 'A rejuvenating yoga retreat in Delhi.',
    participants: 200,
  },
  {
    name: 'Goa Triathlon',
    date: '2024-11-10',
    location: 'Goa',
    description: 'An exciting triathlon event in sunny Goa.',
    participants: 1500,
  },
  {
    name: 'Bangalore Fitness Expo',
    date: '2024-12-20',
    location: 'Bangalore',
    description: 'A leading fitness expo showcasing the latest in fitness equipment and trends.',
    participants: 3000,
  },
];

// Calculate days left until the event
const getDaysLeft = (eventDate: string) => {
  const today = new Date();
  const eventDateObj = new Date(eventDate);
  const timeDiff = eventDateObj.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

// Convert days left data to options for the select dropdown
const daysLeftOptions = [0, 7, 14, 30, 60].map((days) => ({
  value: days.toString(),
  label: `${days} days or less`,
}));

export function EventSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDays, setSelectedDays] = useState<string | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleDaysChange = (value: string | null) => {
    setSelectedDays(value);
  };

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm) &&
      (selectedDays ? getDaysLeft(event.date) <= parseInt(selectedDays) : true)
  );

  const renderCard = (event: (typeof events)[0]) => (
    <Card key={event.name} withBorder padding="lg" className={classes.card}>
      <Card.Section>
        <Image src={img} alt="Event Image" height={140} />
      </Card.Section>

      <Group justify="space-between" mt="xl">
        <Text fz="sm" fw={700} className={classes.title}>
          {event.name}
        </Text>
      </Group>
      <Group gap={5}>
        <Text fz="xs" c="dimmed">
          {event.participants} Participants
        </Text>
      </Group>

      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        Date: {event.date} <br /> • Location: {event.location} <br />• Description:{' '}
        {event.description}
      </Text>
      <Button fullWidth variant="outline" mt="md" color="#058A4A">
        Register
      </Button>
    </Card>
  );

  return (
    <Container  className={classes.contai} id="target-section">
      <Title className={classes.heading}>Upcoming Fitness and Sports Events in India</Title>
      <>
        <Select
          placeholder="Filter Events by Days Left"
          value={selectedDays}
          onChange={handleDaysChange}
          data={[{ value: '', label: 'All Events' }, ...daysLeftOptions]}
          mb="md"
          style={{ width: '300px' }}
        />
        <input
          type="text"
          placeholder="Search events"
          onChange={handleSearch}
          style={{ marginBottom: '1rem', padding: '0.5rem', width: '300px' }}
        />
      </>
      <Grid>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Grid.Col key={event.name} span={{ base: 12, sm: 6, md: 4 }}>
              {renderCard(event)}
            </Grid.Col>
          ))
        ) : (
          <Grid.Col span={12}>
            <Text>No events found.</Text>
          </Grid.Col>
        )}
      </Grid>
    </Container>
  );
}
