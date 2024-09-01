import React from 'react';
import { EventSearch } from '@/components/EpEventSearch/EpEventSearch'; // 1 error, reviewed
import { EpHeader } from '@/components/EpHeader/EpHeader'; // reviewed
import { EpHero } from '@/components/EpHero/EpHero'; // 1 warn, reviewed

const EventPage: React.FC = () => (
  <>
    <EpHeader />
    <EpHero />
    <EventSearch />
  </>
);

export default EventPage;
