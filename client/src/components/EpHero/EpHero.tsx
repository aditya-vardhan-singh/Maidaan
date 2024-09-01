import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconHeartbeat, IconBrain, IconUsers } from '@tabler/icons-react';
import classes from './EpHero.module.css';

const mockdata = [
  {
    title: 'Boost Your Physical Health',
    description:
      "Participate in activities that improve your fitness, strengthen muscles, and enhance your endurance. Whether it's running a marathon or joining a sports camp, get moving and feel your best.",
    icon: IconHeartbeat,
  },
  {
    title: 'Enhance Mental Clarity',
    description:
      'Break away from the daily grind and find peace of mind. Engage in workshops and events that reduce stress, improve focus, and uplift your mood.',
    icon: IconBrain,
  },
  {
    title: 'Build Meaningful Connections',
    description:
      'Join a community of like-minded individuals. Strengthen social bonds, share experiences, and foster friendships through group activities and events.',
    icon: IconUsers,
  },
];

export function EpHero() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color="#F1A02F" // Set the icon color to #F1A02F
        className={classes.ico}
      />
      <Text fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text  c="dimmed" className={classes.description} mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg" color="#F1A02F">
          Join the Adventure
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Take a Break, Join an Event, and Rejuvenate!
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Step into a world of excitement and growth! Whether you're looking to boost your fitness,
        find mental clarity, or connect with others, our events are designed to inspire and energize
        you.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
