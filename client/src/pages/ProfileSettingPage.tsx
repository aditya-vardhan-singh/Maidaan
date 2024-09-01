import { PspNav } from '@/components/PspNav/PspNav'
import PspPersonalInformation from '@/components/PspPersonalInformation/PspPersonalInformation'
import React from 'react'
import classes from './ProfileSettingPage.module.css';
import PspContactInformation from '@/components/PspContactInformation/PspContactInformation';
import PspSportsInformation from '@/components/PspSportsInformation/PspSportsInformation';
import PspTournamentInfo from '@/components/PspTournamentparticipation/PspTournamentInfo';
import PspDocumentInfo from '@/components/PspDocumentInfo/PspDocumentInfo';


function ProfileSettingPage() {
  return (
    <div className={classes.container}>
      <PspNav/>
      {/* <PspPersonalInformation/> */}
      {/* <PspContactInformation/> */}
      {/* <PspSportsInformation/> */}
      {/* <PspTournamentInfo/> */}
      <PspDocumentInfo/>
    </div>
  )
}

export default ProfileSettingPage

