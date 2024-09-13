import { Badge, Button, Card, Divider, SimpleGrid, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import classes from './Tournaments.module.css';
import { baseURL } from '@/Utility';

interface Tournament {
  id: string;
  title: string;
  sport: string;
  location: string;
  teamsParticipating: string;
  status: string;
  fee: string;
  startDate: string;
}

function Tcard() {
  // Tournaments data
  const [tournaments, setTournaments] = useState<Tournament[]>()
  useEffect(() => {
    // Fetch tournaments data from backend
    const fetchTournaments = async () => {
      try {
        const response = await axios.get<Tournament[]>(
          `${baseURL}/tournaments/ongoing`
        );
        if (!response.data || response.data.length === 0) {
          toast.error('No tournaments available');
        } else {
          setTournaments(response.data);
        }
      } catch (err) {
        toast.error((err as Error).message || 'Error getting ongoing records!');
      }
    };

    fetchTournaments();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const card = tournaments?.map((tournament) => (
    <Card shadow="sm" p="lg" key={tournament.id}>
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
          <Text>Kicks Off {formatDate(tournament.startDate)}</Text>
        </div>
        <Button className={classes.registerButton}>Register Now</Button>
      </Card>
    </Card>
  ));
  return <SimpleGrid cols={{ base: 1, sm: 1, lg: 2, md: 2 }}>{card}</SimpleGrid>;
}

export default Tcard;