import { FooterLinks } from '@/components/LpFooter/FooterLinks';
import CompetitionDetails from '@/components/TdpCompetitionDetails/CompetitionDetails';
import EventCard from '@/components/TdpEventCard/EventCard';
import { Tdpnav } from '@/components/TDPnavbar/Tdpnav';
import { useState } from 'react';
import ChampionsTrophy from "@/components/TdpPrizeChampionsTrophy/ChampionsTrophy";
import ChampionsSchedule from "@/components/TouIndividualSchedule/ChampionsSchedule";

export function TournamentDetailPage() {
  // Define the possible values for the subPage state
  type SubPage = 'home' | 'prizes' | 'Schedule';

  // Initialize the subPage state
  const [subPage, setSubPage] = useState<SubPage>('home');

  return (
    <>
      
      <Tdpnav setSubPage={setSubPage} />

      {subPage === 'home' && (
        <>
          <CompetitionDetails />
          <EventCard />
        </>
      )}

      {subPage === 'prizes' && <ChampionsTrophy />}

      {subPage === 'Schedule' && <ChampionsSchedule />}
    </>
  );
}
