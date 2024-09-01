import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';
import kheliimg from '../../assets/Kheloindiayouth.avif';
import Nsdf from '../../assets/Nsdf.jpg';
import Nstss from '../../assets/Nstss.webp';
import RuralSports from '../../assets/RuralSports.png';
import Sai from '../../assets/Sai.png';
import fitindia from '../../assets/fitindia.jpg';
import classes from './GpSchemes.module.css';

const mockdata = [
  {
    title: 'Khelo India Youth Games',
    image: kheliimg,
    date: 'Scholarships, infrastructure development, and coaching support for youth athletes.',
    link: 'https://kheloindia.gov.in/',
  },
  {
    title: 'Fit India Movement',
    image: fitindia,
    date: 'Public campaigns, fitness challenges, and support for community fitness events',
    link: 'https://fitindia.gov.in/',
  },
  {
    title: 'National Sports Talent Search Scheme (NSTSS)',
    image: Nstss,
    date: 'Talent identification, training programs, and scholarships for young athletes',
    link: 'https://yas.nic.in/sports/national-sports-talent-search-scheme-nstss',
  },
  {
    title: 'Sports Authority of India (SAI) Training Centres',
    image: Sai,
    date: 'Advanced training facilities, professional coaching, and opportunities to compete at national and international levels.',
    link: 'https://sportsauthorityofindia.nic.in/sai/sai-training-center',
  },
  {
    title: "PMO's National Sports Development Fund",
    image: Nsdf,
    date: 'Grants for sports infrastructure, financial support for athletes, and development programs.',
    link: 'https://yas.nic.in/sports/national-sports-development-fund-0',
  },
  {
    title: 'Rural Sports Program',
    image: RuralSports,
    date: 'Grants for sports equipment, organization of local events, and infrastructure development in rural areas.',
    link: 'https://www.hondaindiafoundation.org/our-work/rural-sports#:~:text=To%20fill%20this%20need%2C%20the,in%20urban%20and%20rural%20areas.',
  },
];

export function GpSchemes() {
  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href={article.link}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} className={classes.card} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl" id="target-section">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
    </Container>
  );
}
