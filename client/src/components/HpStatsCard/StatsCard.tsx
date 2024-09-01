import { Progress, Text, Group, Badge, Card, Container, SimpleGrid } from '@mantine/core';
import classes from './StatsCard.module.css';

const mockdata = [
  {
    title: 'Swimming challenge',
    progress: 60,
  },
  {
    title: 'Champions Trophy 2024',
    progress: 40,
  },
  {
    title: 'Champions Trophy 2024',
    progress: 40,
  },
  {
    title: 'Champions Trophy 2024',
    progress: 40,
  },
];

export function StatsCard() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" className={classes.card}>
      <Text   className={classes.title}>
        {article.title}
      </Text>
      <Group  mt="xs">
        <Text size="sm" >
          Progress
        </Text>
        <Text size="sm" >
          {article.progress}%
        </Text>
      </Group>
      <Progress value={article.progress} mt={5} color="#058A4A" />
      <Group  mt="md">
        <a href="#"><Badge size="sm" color="#058A4A">
          Continue organizing
        </Badge></a>
      </Group>
    </Card>
  ));

  return (
    <Container py="xl" id="target-section">
      <SimpleGrid className={classes.Pgrid}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
}
