import { Container, rem, SimpleGrid, Text } from "@mantine/core";
import { IconBuilding, IconRun, IconTrophy } from "@tabler/icons-react";
import classes from "./ApFeatures.module.css";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon
          style={{ width: rem(38), height: rem(38), display: "block" }}
          className={classes.icon}
          stroke={1.5}
        />
        <Text fw={700} mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" className={classes.description}>
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconRun,
    title: "Expert Coaching Available",
    description:
      "Experienced coaches dedicated to developing athletic skills across various levels are accessible at these academies.",
  },
  {
    icon: IconBuilding,
    title: "World-Class Facilities",
    description:
      "Train in state-of-the-art facilities designed to support athletic excellence, equipped with the latest in sports technology.",
  },
  {
    icon: IconTrophy,
    title: "Proven Success Record",
    description:
      "Academies with a history of producing champions across various sports, focusing on performance and character development.",
  },
];

export function ApFeatures() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="xl">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
