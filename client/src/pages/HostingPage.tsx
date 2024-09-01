import { useState } from 'react';

// NOTE: Why passing 'page' as prop to all components when it is not being used?
import { HpBanner } from '@/components/HpBanner/HpBanner'; // 1 warn, reviewed
import HpDetailsPageLinks from '@/components/HpForm/HpDetailPageLinks'; // 2 warns, reviewed
import HpDetailsPage from '@/components/HpForm/HpDetailsPage'; // 1 warn, reviewed
import { HpDetailsubmit } from '@/components/HpForm/HpDetailsubmit'; // 4 warns, reviewed
import HpFormPrizePage from '@/components/HpForm/HpFormPrizePage'; // 1 warn, reviewed
import HpSchdulePage from '@/components/HpForm/HpSchedulePage'; // 1 warn, reviewed
import HpFormNavbar from '@/components/HpFormNavbar/HpFormNavbar'; // reviewed

const HostingPage: React.FC = () => {
  const [page, setPage] = useState<string>('');
  return (
    <>
      {page === 'DetailsPage' ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpDetailsPage setPage={setPage} page={page} />
        </>
      ) : page === 'LinksPage' ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpDetailsPageLinks setPage={setPage} page={page} />
        </>
      ) : page === 'PrizesPage' ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpFormPrizePage setPage={setPage} page={page} />
        </>
      ) : page === 'SchedulePage' ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpSchdulePage setPage={setPage} page={page} />
        </>
      ) : page === 'SubmitPage' ? (
        <>
          <HpFormNavbar setPage={setPage} page={page} />
          <HpDetailsubmit setPage={setPage} page={page} />
        </>
      ) : (
        <HpBanner setPage={setPage} page={page} />
      )}
    </>
  );
};

export default HostingPage;
