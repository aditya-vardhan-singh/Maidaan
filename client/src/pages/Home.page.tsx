// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImageBackground } from '@/components/LpHeader/HeroImageBackground'; // reviewed
import { HeroText } from '@/components/LpHeadertwo/HeroText'; // reviewed
import { EmailBanner } from '@/components/LpProfileBanner/EmailBanner'; // reviewed
import { EmpowerInspire } from '@/components/LpProfileBanner/EmpowerInspire'; // reviewed
import { LearnFromBest } from '@/components/LpProfileBanner/LearnFromBest'; // reviewed
import { TournamentBanner } from '@/components/LpProfileBanner/TournamentBanner'; // reviewed
import { UnitrorPlay } from '@/components/LpProfileBanner/UniteorPlay'; // reviewed
import { Arena } from '@/components/LpStepintoArena/Arena'; // reviewed
import { VoiceFromFiled } from '@/components/LpText/Voice'; // reviewed

export function HomePage() {
  // const [Page,setPage]=useContext(PagerContext)  Error in useContext
  return (
    <>
      {/* <ColorSchemeToggle/> */}
      {/* <Welcome />
      <ColorSchemeToggle /> */}
      <HeroImageBackground />
      <HeroText />
      <EmailBanner />
      <TournamentBanner />
      <UnitrorPlay />
      <LearnFromBest />
      <EmpowerInspire />
      <VoiceFromFiled />
      {/* <TestimonialSlider/> */}
      <Arena />
    </>
  );
}
