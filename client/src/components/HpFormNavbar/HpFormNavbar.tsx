import { Burger, Button, Drawer } from '@mantine/core';
import React, { useState } from 'react';
import classes from './HpFormNavbar.module.css';

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function HpFormNavbar({ page, setPage }: NavProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.links}>
          <Button
            onClick={() => setPage('DetailsPage')}
            className={`${classes.Btn} ${page === 'DetailsPage' ? classes.active : classes.inactive}`}
            variant="subtle"
            color="#058A4A"
          >
            Details
          </Button>
          <Button
            onClick={() => setPage('LinksPage')}
            className={`${classes.Btn} ${page === 'LinksPage' ? classes.active : classes.inactive}`}
            variant="subtle"
            color="#058A4A"
          >
            Links
          </Button>
          <Button
            onClick={() => setPage('PrizesPage')}
            className={`${classes.Btn} ${page === 'PrizesPage' ? classes.active : classes.inactive}`}
            variant="subtle"
            color="#058A4A"
          >
            Prizes
          </Button>
          <Button
            onClick={() => setPage('SchedulePage')}
            className={`${classes.Btn} ${page === 'SchedulePage' ? classes.active : classes.inactive}`}
            variant="subtle"
            color="#058A4A"
          >
            Schedule
          </Button>
          <Button
            onClick={() => setPage('SubmitPage')}
            className={`${classes.Btn} ${page === 'SubmitPage' ? classes.active : classes.inactive}`}
            variant="subtle"
            color="#058A4A"
          >
            Submit
          </Button>
        </div>
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} className={classes.burger} />
      </div>
      <Drawer opened={opened} onClose={() => setOpened(false)} title="Menu" padding="md" size="sm">
        <Button onClick={() => setPage('DetailsPage')} variant="subtle" fullWidth>
          Details
        </Button>
        <Button onClick={() => setPage('LinksPage')} variant="subtle" fullWidth>
          Links
        </Button>
        <Button onClick={() => setPage('PrizesPage')} variant="subtle" fullWidth>
          Prizes
        </Button>
        <Button onClick={() => setPage('SchedulePage')} variant="subtle" fullWidth>
          Schedule
        </Button>
        <Button onClick={() => setPage('SubmitPage')} variant="subtle" fullWidth>
          Submit
        </Button>
      </Drawer>
    </>
  );
}

export default HpFormNavbar;
