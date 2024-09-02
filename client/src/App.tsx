import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";
import { FooterLinks } from "./components/LpFooter/FooterLinks"; // reviewed
import { HeaderMegaMenu } from "./components/MaidaanLogo/HeaderMegaMenu"; // reviewed
import { Router } from "./Router";
import { theme } from "./theme";

export default function App() {
  // type NL = 'Tournaments' | 'Events' | 'Academies' | 'GovtSheme'| 'Home';
  const [NavLinks, SetNavLinks] = useState<string>("");
  // const [Page,SetPage] =useState<string>('')
  return (
    <MantineProvider theme={theme}>
      <HeaderMegaMenu />
      <Router />
      <FooterLinks />
    </MantineProvider>
  );
}
