import React from 'react';
import { Card, Text, Title, Group, Stack } from '@mantine/core';
import classes from './ChampionsTrophy.module.css';

// Define a type for trophy items
interface TrophyItem {
  title: string;
  reward: string;
}

const ChampionsTrophy: React.FC = () => {
  // Define the event data inside the component
  const eventName = "Champions Trophy 2024";
  const items: TrophyItem[] = [
    { title: "Winner", reward: "₹5,00,000 + Champions Trophy + Gold Medals + Certificate" },
    { title: "Runner-Up", reward: "₹2,50,000 + Runner-Up Trophy + Silver Medals + Certificate" },
    { title: "Best Player", reward: "₹50,000 + Trophy + Gold Medals + Certificate" },
    { title: "Best Batsman", reward: "₹30,000 + Trophy + Gold Medals + Certificate" },
    { title: "Best Bowler", reward: "₹30,000 + Trophy + Gold Medals + Certificate" },
    { title: "Best Fielder", reward: "₹20,000 + Trophy + Gold Medals + Certificate" },
    { title: "Player of the Match (Per Game)", reward: "₹5,000 + Trophy + Certificate" },
    { title: "Emerging Player", reward: "₹20,000 + Trophy + Certificate" },
  ];

  return (
    <Card className={classes.cardContainer} shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={1} className={classes.title}>
        {eventName}
      </Title>
      <Stack>
        {items.map((item, index) => (
          <Group key={index} className={classes.trophyItem}>
            <div className={classes.textWrapper}>
              <Text className={classes.trophyTitle}>{item.title}</Text>
              <Text className={classes.trophyReward}>{item.reward}</Text>
            </div>
          </Group>
        ))}
      </Stack>
    </Card>
  );
};

export default ChampionsTrophy;
