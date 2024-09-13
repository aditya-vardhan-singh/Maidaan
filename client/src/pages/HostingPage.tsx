import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

import { HpBanner } from "@/components/HpBanner/HpBanner";
import HpDetailsPageLinks from "@/components/HpForm/HpDetailPageLinks";
import HpDetailsPage from "@/components/HpForm/HpDetailsPage";
import { HpDetailsubmit } from "@/components/HpForm/HpDetailsubmit";
import HpFormPrizePage from "@/components/HpForm/HpFormPrizePage";
import HpSchdulePage from "@/components/HpForm/HpSchedulePage";
import HpFormNavbar from "@/components/HpFormNavbar/HpFormNavbar";
import { baseURL } from "@/Utility";

export enum RegistrationStatus {
  ONGOING = "ONGOING",
  UPCOMING = "UPCOMING",
  FINISHED = "FINISHED",
}

export interface Tournament {
  details: {
    tournamentName: string;
    startDate: string;
    endDate: string;
    selectedOption: string;
    registrationFees: string;
    venueName: string;
    city: string;
    tournamentDetails: string;
  };
  links: {
    officialLink: string;
    facebookLink: string;
    xLink: string;
    instaLink: string;
    posterImage: string;
  };
  prize: {
    tournamentRules: string;
    prizeName: string;
    amount: string;
    trophy: boolean;
    medal: boolean;
    certificate: boolean;
    participationCertificate: boolean;
  };
  schedules: {
    scheduleName: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
  }[];
  registrationStatus: RegistrationStatus;
}

const HostingPage: React.FC = () => {
  const [page, setPage] = useState<string>("");

  const [tournament, setTournament] = useState<Tournament>({
    details: {
      tournamentName: "",
      startDate: "",
      endDate: "",
      selectedOption: "",
      registrationFees: "",
      venueName: "",
      city: "",
      tournamentDetails: "",
    },
    links: {
      officialLink: "",
      facebookLink: "",
      xLink: "",
      instaLink: "",
      posterImage: "",
    },
    prize: {
      tournamentRules: "",
      prizeName: "",
      amount: "",
      trophy: false,
      medal: false,
      certificate: false,
      participationCertificate: false,
    },
    schedules: [
      {
        scheduleName: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
      },
    ],
    registrationStatus: RegistrationStatus.ONGOING,
  });

  const handleFormSubmit = async () => {
    try {
      const response: { message: string } = await axios.post(
        `${baseURL}/tournaments/new`,
        {
          tournament: tournament,
        },
      );
      toast.success(response.message || "Tournament registered successfully");
    } catch (err) {
      toast.error((err as Error).message || "Error occurred submit request!");
    }
  };

  return (
    <>
      <Toaster richColors />
      {page === "DetailsPage" ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpDetailsPage
            setPage={setPage}
            page={page}
            tournament={tournament}
            setTournament={setTournament}
          />
        </>
      ) : page === "LinksPage" ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpDetailsPageLinks
            setPage={setPage}
            page={page}
            tournament={tournament}
            setTournament={setTournament}
          />
        </>
      ) : page === "PrizesPage" ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpFormPrizePage
            setPage={setPage}
            page={page}
            tournament={tournament}
            setTournament={setTournament}
          />
        </>
      ) : page === "SchedulePage" ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpSchdulePage
            setPage={setPage}
            page={page}
            tournament={tournament}
            setTournament={setTournament}
          />
        </>
      ) : page === "SubmitPage" ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpDetailsubmit
            setPage={setPage}
            page={page}
            tournament={tournament}
            setTournament={setTournament}
            handleFormSubmit={handleFormSubmit}
          />
        </>
      ) : (
        <HpBanner setPage={setPage} page={page} />
      )}
    </>
  );
};

export default HostingPage;