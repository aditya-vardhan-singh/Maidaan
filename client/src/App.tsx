import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";
import { FooterLinks } from "./components/LpFooter/FooterLinks"; // reviewed
import { HeaderMegaMenu } from "./components/MaidaanLogo/HeaderMegaMenu"; // reviewed
import Tournaments from "./components/Tournaments/Tournaments"; // reviewed
import PageProvider from "./Context"; // reviewed
import Academies from "./pages/Academies"; // reviewed
import GovtSchemes from "./pages/GovtSchemes"; // reviewed
import { Router } from "./Router";
import { theme } from "./theme";
import EventPage from "./pages/EventPage";

export default function App() {
  // type NL = 'Tournaments' | 'Events' | 'Academies' | 'GovtSheme'| 'Home';
  const [NavLinks, SetNavLinks] = useState<string>("");
  // const [Page,SetPage] =useState<string>('')
  return (
    <MantineProvider theme={theme}>
      <PageProvider>
        <HeaderMegaMenu />
        {/* <HeaderMegaMenu SetNavLinks={SetNavLinks} NavLinks={NavLinks} /> */}
        {/* {NavLinks === 'Tournaments' ? (
          <Tournaments />
        ) : NavLinks === 'GovernmentSchemes' ? (
          <GovtSchemes />
        ) : NavLinks === 'Academies' ? (
          <Academies />
        )  : NavLinks === 'Events' ? (
          <EventPage />
        )
        : (
          <Router />
        )} */}
        <Router />
        <FooterLinks />
      </PageProvider>
    </MantineProvider>
  );
}
