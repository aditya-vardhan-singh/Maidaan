import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

// NOTE: Why passing 'page' as prop to all components when it is not being used?
import { HpBanner } from "@/components/HpBanner/HpBanner"; // 1 warn, reviewed
import HpDetailsPageLinks from "@/components/HpForm/HpDetailPageLinks"; // 2 warns, reviewed
import HpDetailsPage from "@/components/HpForm/HpDetailsPage"; // 1 warn, reviewed
import { HpDetailsubmit } from "@/components/HpForm/HpDetailsubmit"; // 4 warns, reviewed
import HpFormPrizePage from "@/components/HpForm/HpFormPrizePage"; // 1 warn, reviewed
import HpSchdulePage from "@/components/HpForm/HpSchedulePage"; // 1 warn, reviewed
import HpFormNavbar from "@/components/HpFormNavbar/HpFormNavbar"; // reviewed
import { baseURL } from "@/Utility";

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
  registrationStatus: string;
}

const HostingPage: React.FC = () => {
  const [page, setPage] = useState<string>("");

  /* All forms data compiled in tournaments */
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
    registrationStatus: "",
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
