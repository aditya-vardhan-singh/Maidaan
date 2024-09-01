import React from 'react';
import { PpProfileBox } from '@/components/PpProfileBox/PpProfileBox'; // 1 warn, add user details fetch, reviewed
import { PpProfileinfoBox } from '@/components/PpProfileinfoBox/PpProfileinfoBox'; // add user details fetch, reviewed
import classes from './HostingPage.module.css';

function ProfilePage() {
  return (
    <div className={classes.Ppdiv}>
      <PpProfileBox />
      <PpProfileinfoBox />
    </div>
  );
}

export default ProfilePage;
