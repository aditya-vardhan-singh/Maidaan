import { PspNav } from "@/components/PspNav/PspNav";
import { useState } from "react";
import classes from "./ProfileSettingPage.module.css";
import PspPersonalInformation from "@/components/PspPersonalInformation/PspPersonalInformation";
import PspDocumentInfo from "@/components/PspDocumentInfo/PspDocumentInfo";
import PspContactInformation from "@/components/PspContactInformation/PspContactInformation";
import PspSportsInformation from "@/components/PspSportsInformation/PspSportsInformation";
import PspTournamentInfo from "@/components/PspTournamentparticipation/PspTournamentInfo";
function ProfileSettingPage() {
  const [page, setPage] = useState<string>("Personal Information");
  return (
    <div className={classes.container}>
      <PspNav page={page} setPage={setPage} />
      {page === "Personal Information" ? (
        <PspPersonalInformation page={page} setPage={setPage} />
      ) : page === "Contact Information" ? (
        <PspContactInformation page={page} setPage={setPage} />
      ) : page === "Sport Profile" ? (
        <PspSportsInformation page={page} setPage={setPage} />
      ) : page === "Tournament Participation" ? (
        <PspTournamentInfo page={page} setPage={setPage} />
      ) : page === "Document" ? (
        <PspDocumentInfo page={page} setPage={setPage} />
      ) : null}
    </div>
  );
}

export default ProfileSettingPage;
