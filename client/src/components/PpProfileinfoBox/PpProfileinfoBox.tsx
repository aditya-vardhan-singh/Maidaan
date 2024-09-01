import { Badge, Stack, Table, Text, Title } from '@mantine/core';
import classes from './PpProfileinfoBox.module.css';

const upcomingTournaments = [
  { name: 'Mumbai Premier League', status: 'Registered', role: 'Player' },
  { name: 'National U-19 Cricket Championship', status: 'Registered', role: 'Player' },
  { name: 'National U-19 Cricket Championship', status: 'Registered', role: 'Player' },
  { name: 'National U-19 Cricket Championship', status: 'Registered', role: 'Player' },
  { name: 'National U-19 Cricket Championship', status: 'Registered', role: 'Player' },
  { name: 'National U-19 Cricket Championship', status: 'Registered', role: 'Player' },
  { name: 'National U-19 Cricket Championship', status: 'Registered', role: 'Player' },
];

const pastTournaments = [
  { name: 'Mumbai Premier League', category: 'Football', role: 'Player', experience: 'Advanced' },
  {
    name: 'National U-19 Cricket Championship',
    category: 'Cricket',
    role: 'Player',
    experience: 'Advanced',
  },
  {
    name: 'National U-19 Cricket Championship',
    category: 'Cricket',
    role: 'Player',
    experience: 'Advanced',
  },
  {
    name: 'National U-19 Cricket Championship',
    category: 'Cricket',
    role: 'Player',
    experience: 'Advanced',
  },
  {
    name: 'National U-19 Cricket Championship',
    category: 'Cricket',
    role: 'Player',
    experience: 'Advanced',
  },
  {
    name: 'National U-19 Cricket Championship',
    category: 'Cricket',
    role: 'Player',
    experience: 'Advanced',
  },
  {
    name: 'National U-19 Cricket Championship',
    category: 'Cricket',
    role: 'Player',
    experience: 'Advanced',
  },
];

export function PpProfileinfoBox() {
  const renderUpcomingTournaments = upcomingTournaments.map((tournament, index) => (
    <tr key={index}>
      <td>{tournament.name}</td>
      <td>
        <Badge className={classes.badge}>{tournament.status}</Badge>
      </td>
      <td>{tournament.role}</td>
    </tr>
  ));

  const renderPastTournaments = pastTournaments.map((tournament, index) => (
    <tr key={index}>
      <td>{tournament.name}</td>
      <td>
        <Badge className={classes.badge}>{tournament.category}</Badge>
      </td>
      <td>{tournament.role}</td>
      <td>{tournament.experience}</td>
    </tr>
  ));

  return (
    <Stack className={classes.infobox}>
      <Title order={3} className={classes.title}>
        Tournament Timeline
      </Title>

      <Stack>
        <Text className={classes.subtitle}>Upcoming Tournaments</Text>
        <div className={classes.scrollContainer}>
          <Table className={classes.table}>
            <thead>
              <tr>
                <th>Tournament Name</th>
                <th>Registration Status</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>{renderUpcomingTournaments}</tbody>
          </Table>
        </div>
      </Stack>

      <Stack>
        <Text className={classes.subtitle}>Past Tournaments</Text>
        <div className={classes.scrollContainer}>
          <Table className={classes.table}>
            <thead>
              <tr>
                <th>Tournament Name</th>
                <th>Sport Category</th>
                <th>Role</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>{renderPastTournaments}</tbody>
          </Table>
        </div>
      </Stack>
    </Stack>
  );
}
