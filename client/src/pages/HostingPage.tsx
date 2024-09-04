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


interface Details {
  tournamentName: string;
  startDate: string;
  endDate: string;
  venueName: string;
  city: string;
  tournamentDetails: string;
}

interface Links {
  officialLink: string;
  facebookLink: string;
  xLink: string;
  instaLink: string;
  posterImage: string;
}

interface Prize {
  prizeName: string;
  trophyDesc: string;
  medalDesc: string;
  amount: string;
}

interface Schedule {
  scheduleName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

interface Tournament {
  details: Details;
  links: Links;
  prize: Prize;
  schedules: Schedule[];
  registrationStatus: String;
}

const convertToISOFormat = (dateString: string): string => {
  return new Date(dateString).toISOString();
};


const HostingPage: React.FC = () => {
  const [page, setPage] = useState<string>("");

  /* Form Data */
  const [details, setDetails] = useState<Details>({
    tournamentName: "",
    startDate: "",
    endDate: "",
    venueName: "",
    city: "",
    tournamentDetails: "",
  });
  const [links, setLinks] = useState<Links>({
    officialLink: "",
    facebookLink: "",
    xLink: "",
    instaLink: "",
    posterImage: "",
  });
  const [prize, setPrize] = useState<Prize>({
    prizeName: "",
    trophyDesc: "",
    medalDesc: "",
    amount: "",
  });
  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      scheduleName: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    },
  ]);
  const [registrationStatus, setRegistrationStatus] = useState("")

  /* All forms data compiled in tournaments */
  const [tournament, setTournament] = useState<Tournament>({
    details: details,
    links: links,
    prize: prize,
    schedules: schedules,
    registrationStatus: registrationStatus
  });


  const handleFormSubmit = async () => {
    // Convert dates to ISO format before submission
    const formattedDetails = {
      ...details,
      startDate: convertToISOFormat(details.startDate),
      endDate: convertToISOFormat(details.endDate),
    };

    const formattedSchedules = schedules.map((schedule) => ({
      ...schedule,
      startDate: convertToISOFormat(schedule.startDate),
      endDate: convertToISOFormat(schedule.endDate),
    }));

    const formattedTournament: Tournament = {
      ...tournament,
      details: formattedDetails,
      schedules: formattedSchedules,
    };

    console.log(formattedTournament);

    try {
      const response: { message: string } = await axios.post(
        `${baseURL}/tournaments/new`,
        {
          tournament: formattedTournament,
        }
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
            details={details}
            setDetails={setDetails}
          />
        </>
      ) : page === "LinksPage" ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpDetailsPageLinks
            setPage={setPage}
            page={page}
            links={links}
            setLinks={setLinks}
          />
        </>
      ) : page === "PrizesPage" ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpFormPrizePage
            setPage={setPage}
            page={page}
            prize={prize}
            setPrize={setPrize}
          />
        </>
      ) : page === "SchedulePage" ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpSchdulePage
            setPage={setPage}
            page={page}
            schedules={schedules}
            setSchedules={setSchedules}
          />
        </>
      ) : page === "SubmitPage" ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpDetailsubmit
            setPage={setPage}
            page={page}
            registrationStatus={registrationStatus}
            setRegistrationStatus={setRegistrationStatus}
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
