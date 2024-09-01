import { Badge, Button, Card, Divider, SimpleGrid, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import classes from './Tournaments.module.css';
import { baseURL } from '@/Utility';

interface Tournament {
  title: string;
  sport: string;
  location: string;
  teamsParticipating: string;
  status: string;
  fee: string;
  startDate: string;
}

function NextUpTcard() {
  const [tournaments, setTournaments] = useState<Tournament[]>([
    {
      title: 'Champions Trophy 2024',
      sport: 'Cricket',
      location: 'Mumbai',
      teamsParticipating: '+1500 Teams Participating',
      status: 'Upcoming',
      fee: 'Fees Free',
      startDate: 'Sept 21, 2024',
    },
  ]);
  useEffect(() => {
    // Fetch tournaments data from backend
    const fetchTournaments = async () => {
      try {
        const response = await axios.get<{ tournaments: Tournament[] }>(
          `${baseURL}/tournaments/upcoming`
        );
        if (!response.data?.tournaments || response.data.tournaments.length === 0) {
          toast.error('No tournaments available');
        } else {
          setTournaments(response.data.tournaments);
        }
      } catch (err) {
        toast.error((err as Error).message || 'Error getting ongoing records!');
      }
    };

    fetchTournaments();
  }, []);

  const card = tournaments.map((tournament) => (
    <Card shadow="sm" p="lg">
      <Toaster richColors />
      <Card className={classes.card}>
        <Text className={classes.title}>{tournament.title}</Text>
        <Text className={classes.sport}>{tournament.sport}</Text>
        <div className={classes.location}>
          {/* <IconLocation size={18} className={classes.icon} /> */}
          <Text>{tournament.location}</Text>
        </div>
        <Divider my="md" color="#DDDDDD" size="sm"></Divider>
        <Badge className={classes.badge}>{tournament.status}</Badge>
        <Text className={classes.fee}>{tournament.fee}</Text>
        <Text className={classes.teams}>{tournament.teamsParticipating}</Text>
        <div className={classes.date}>
          {/* <IconCalendar size={18} className={classes.icon} /> */}
          <Text>Kicks Off {tournament.startDate}</Text>
        </div>
        <Button className={classes.registerButton}>Register Now</Button>
      </Card>
    </Card>
  ));
  return <SimpleGrid cols={{ base: 1, sm: 1, lg: 2, md: 2 }}>{card}</SimpleGrid>;
}

export default NextUpTcard;
