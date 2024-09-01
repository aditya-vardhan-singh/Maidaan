import { Button, Card, Container, Grid, Group, Image, Select, Text, Title } from '@mantine/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { baseURL } from '@/Utility';
import classes from './CardWithStats.module.css'; // Ensure this path is correct

// Updated academy data with location
// const academies = [
//   {
//     name: 'Elite Sports Academy',
//     timings: '9 AM - 5 PM',
//     sports: ['Soccer', 'Basketball', 'Tennis'],
//     registeredStudents: 120,
//     location: '123 Elm Street, Springfield',
//   },
//   {
//     name: 'Champion Fitness Center',
//     timings: '10 AM - 6 PM',
//     sports: ['Swimming', 'Running', 'Boxing'],
//     registeredStudents: 85,
//     location: '456 Oak Avenue, Springfield',
//   },
//   {
//     name: 'Victory Martial Arts School',
//     timings: '8 AM - 4 PM',
//     sports: ['Taekwondo', 'Karate', 'Judo'],
//     registeredStudents: 95,
//     location: '789 Pine Road, Springfield',
//   },
//   {
//     name: 'Pro Cycling Club',
//     timings: '7 AM - 3 PM',
//     sports: ['Cycling', 'Running', 'Yoga'],
//     registeredStudents: 110,
//     location: '101 Maple Lane, Springfield',
//   },
//   {
//     name: 'Highland Yoga Studio',
//     timings: '6 AM - 2 PM',
//     sports: ['Yoga', 'Pilates', 'Meditation'],
//     registeredStudents: 75,
//     location: '202 Birch Blvd, Springfield',
//   },
//   {
//     name: 'Mountain Climbing Gym',
//     timings: '10 AM - 8 PM',
//     sports: ['Climbing', 'Hiking', 'Bouldering'],
//     registeredStudents: 100,
//     location: '303 Cedar Drive, Springfield',
//   },
//   {
//     name: 'Ocean Swim Academy',
//     timings: '9 AM - 5 PM',
//     sports: ['Swimming', 'Diving', 'Surfing'],
//     registeredStudents: 90,
//     location: '404 Spruce Street, Springfield',
//   },
//   {
//     name: 'Urban Boxing Gym',
//     timings: '12 PM - 8 PM',
//     sports: ['Boxing', 'Kickboxing', 'Self-defense'],
//     registeredStudents: 130,
//     location: '505 Walnut Avenue, Springfield',
//   },
//   {
//     name: 'Skyline Soccer League',
//     timings: '8 AM - 4 PM',
//     sports: ['Soccer', 'Futsal', 'Beach Soccer'],
//     registeredStudents: 140,
//     location: '606 Fir Lane, Springfield',
//   },
//   {
//     name: 'Downtown Basketball Club',
//     timings: '10 AM - 6 PM',
//     sports: ['Basketball', 'Streetball', '3x3 Basketball'],
//     registeredStudents: 95,
//     location: '707 Aspen Road, Springfield',
//   },
//   {
//     name: 'Central Tennis Academy',
//     timings: '7 AM - 3 PM',
//     sports: ['Tennis', 'Table Tennis', 'Squash'],
//     registeredStudents: 105,
//     location: '808 Willow Street, Springfield',
//   },
//   {
//     name: 'Zen Pilates Center',
//     timings: '6 AM - 2 PM',
//     sports: ['Pilates', 'Yoga', 'Stretching'],
//     registeredStudents: 80,
//     location: '909 Oak Street, Springfield',
//   },
// ];

// Updated sport icons
const sportIcons = {
  Soccer: '⚽',
  Basketball: '🏀',
  Tennis: '🎾',
  Swimming: '🏊',
  Running: '🏃',
  Boxing: '🥊',
  Cycling: '🚴',
  Volleyball: '🏐',
  Taekwondo: '🥋',
  Karate: '🥋',
  Yoga: '🧘',
  Climbing: '🧗',
  Hiking: '🥾',
  Pilates: '🧘‍♀️',
};

// Convert sports data to options for the select dropdown
const sportOptions = Object.keys(sportIcons).map((sport) => ({
  value: sport,
  label: sport,
}));

export function AcademyGrid() {
  const [academies, setAcademies] = useState([
    {
      name: 'Elite Sports Academy',
      timings: '9 AM - 5 PM',
      sports: ['Soccer', 'Basketball', 'Tennis'],
      registeredStudents: 120,
      location: '123 Elm Street, Springfield',
    },
    {
      name: 'Champion Fitness Center',
      timings: '10 AM - 6 PM',
      sports: ['Swimming', 'Running', 'Boxing'],
      registeredStudents: 85,
      location: '456 Oak Avenue, Springfield',
    },
    {
      name: 'Victory Martial Arts School',
      timings: '8 AM - 4 PM',
      sports: ['Taekwondo', 'Karate', 'Judo'],
      registeredStudents: 95,
      location: '789 Pine Road, Springfield',
    },
    {
      name: 'Pro Cycling Club',
      timings: '7 AM - 3 PM',
      sports: ['Cycling', 'Running', 'Yoga'],
      registeredStudents: 110,
      location: '101 Maple Lane, Springfield',
    },
    {
      name: 'Highland Yoga Studio',
      timings: '6 AM - 2 PM',
      sports: ['Yoga', 'Pilates', 'Meditation'],
      registeredStudents: 75,
      location: '202 Birch Blvd, Springfield',
    },
    {
      name: 'Mountain Climbing Gym',
      timings: '10 AM - 8 PM',
      sports: ['Climbing', 'Hiking', 'Bouldering'],
      registeredStudents: 100,
      location: '303 Cedar Drive, Springfield',
    },
    {
      name: 'Ocean Swim Academy',
      timings: '9 AM - 5 PM',
      sports: ['Swimming', 'Diving', 'Surfing'],
      registeredStudents: 90,
      location: '404 Spruce Street, Springfield',
    },
    {
      name: 'Urban Boxing Gym',
      timings: '12 PM - 8 PM',
      sports: ['Boxing', 'Kickboxing', 'Self-defense'],
      registeredStudents: 130,
      location: '505 Walnut Avenue, Springfield',
    },
    {
      name: 'Skyline Soccer League',
      timings: '8 AM - 4 PM',
      sports: ['Soccer', 'Futsal', 'Beach Soccer'],
      registeredStudents: 140,
      location: '606 Fir Lane, Springfield',
    },
    {
      name: 'Downtown Basketball Club',
      timings: '10 AM - 6 PM',
      sports: ['Basketball', 'Streetball', '3x3 Basketball'],
      registeredStudents: 95,
      location: '707 Aspen Road, Springfield',
    },
    {
      name: 'Central Tennis Academy',
      timings: '7 AM - 3 PM',
      sports: ['Tennis', 'Table Tennis', 'Squash'],
      registeredStudents: 105,
      location: '808 Willow Street, Springfield',
    },
    {
      name: 'Zen Pilates Center',
      timings: '6 AM - 2 PM',
      sports: ['Pilates', 'Yoga', 'Stretching'],
      registeredStudents: 80,
      location: '909 Oak Street, Springfield',
    },
  ]);
  useEffect(() => {
    // Fetch academies records from backend
    const fetchAcademies = async () => {
      try {
        const response = await axios.get(`${baseURL}/academies/get`);
        if (!response.data?.tournaments || response.data.tournaments.length === 0) {
          toast.error('No academies available');
        } else {
          setAcademies(response.data.academies);
        }
      } catch (err) {
        toast.error((err as Error).message || 'Error getting academies!');
      }
    };

    fetchAcademies();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSportChange = (value: string | null) => {
    setSelectedSport(value);
  };

  const filteredAcademies = academies.filter(
    (academy) =>
      academy.name.toLowerCase().includes(searchTerm) &&
      (selectedSport ? academy.sports.includes(selectedSport) : true)
  );

  const renderCard = (academy: (typeof academies)[0]) => (
    <Card key={academy.name} withBorder padding="lg" className={classes.card}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Academy Image"
          height={140}
        />
      </Card.Section>

      <Group justify="space-between" mt="xl">
        <Text fz="sm" fw={700} className={classes.title}>
          {academy.name}
        </Text>
        <Group gap={5}>
          <Text fz="xs" c="dimmed">
            {academy.registeredStudents} Students
          </Text>
        </Group>
      </Group>

      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        Timings: {academy.timings} <br /> • Sports: {academy.sports.join(', ')} <br />• Location:{' '}
        {academy.location}
      </Text>
      <Button fullWidth variant="outline" mt="md" color="#058A4A">
        Register
      </Button>
    </Card>
  );

  return (
    <Container my="md" className={classes.contai} id="target-section">
      <Toaster richColors />
      <Title className={classes.heading}>
        Elite Academy Finder: Where Passion Meets Opportunity
      </Title>
      <Select
        placeholder="Filter Academies by sport"
        value={selectedSport}
        onChange={handleSportChange}
        data={[{ value: '', label: 'All Sports' }, ...sportOptions]}
        mb="md"
        style={{ width: '300px' }}
      />
      <Grid>
        {filteredAcademies.length > 0 ? (
          filteredAcademies.map((academy) => (
            <Grid.Col key={academy.name} span={{ base: 12, sm: 6, md: 4 }}>
              {renderCard(academy)}
            </Grid.Col>
          ))
        ) : (
          <Grid.Col span={12}>
            <Text>No academies found.</Text>
          </Grid.Col>
        )}
      </Grid>
    </Container>
  );
}
