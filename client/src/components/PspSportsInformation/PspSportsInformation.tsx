import React, { useState } from 'react';
import { TextInput, Container, Grid, Button, Group, Select } from '@mantine/core';
import styles from './PspSportsInformation.module.css';

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function PspSportsInformation({ page, setPage }: NavProps) {
  const [sportsData, setSportsData] = useState([
    { sport: '', team: '', role: '', experience: '' }
  ]);

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedSportsData = [...sportsData];
    updatedSportsData[index][field as keyof typeof updatedSportsData[0]] = value;
    setSportsData(updatedSportsData);
  };

  const addSport = () => {
    setSportsData([...sportsData, { sport: '', team: '', role: '', experience: '' }]);
  };

//   const handleUpdateRole = (index: number) => {
//     const updatedRole = prompt('Please enter a new role:');
//     if (updatedRole) {
//       const updatedSportsData = [...sportsData];
//       updatedSportsData[index].role = updatedRole;
//       setSportsData(updatedSportsData);
//     }
//   };

  return (
    <Container className={styles.formContainer}>
      <Grid>
        {sportsData.map((sportEntry, index) => (
          <Grid.Col key={index} span={12}>
            <Grid>
              <Grid.Col span={12}>
                <Select
                  label="Sport Category"
                  placeholder="Select Sport"
                  data={[
                    'Football', 'Cricket', 'Basketball', 'Tennis', 'Badminton',
                    'Volleyball', 'Table Tennis', 'Hockey', 'Baseball', 'Swimming',
                    'Athletics', 'Gymnastics', 'Boxing', 'Wrestling', 'Cycling'
                  ]}
                  value={sportEntry.sport}
                  onChange={(value) => handleInputChange(index, 'sport', value!)}
                  required
                  className={styles.selectInput} // Apply CSS class
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Team"
                  placeholder="Teams You’re Part Of"
                  value={sportEntry.team}
                  onChange={(event) => handleInputChange(index, 'team', event.currentTarget.value)}
                  required
                  className={styles.selectInput} // Apply CSS class
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Select
                  label="Role"
                  placeholder="Select Role"
                  data={['Player', 'Coach', 'Referee']}
                  value={sportEntry.role}
                  onChange={(value) => handleInputChange(index, 'role', value!)}
                  required
                  className={styles.selectInput} // Apply CSS class
                />
                {/* <Button mt="md" color="green" onClick={() => handleUpdateRole(index)}> */}
                <Button mt="md" color="green" >

                  Update Role
                </Button>
              </Grid.Col>
              <Grid.Col span={12}>
                <Select
                  label="Experience"
                  placeholder="Select Experience"
                  data={['Beginner', 'Intermediate', 'Advanced']}
                  value={sportEntry.experience}
                  onChange={(value) => handleInputChange(index, 'experience', value!)}
                  required
                  className={styles.selectInput} // Apply CSS class
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        ))}
      </Grid>
      <br />
      <Button color="green" onClick={addSport}>+ Add Sport</Button>

      <Group mt="md">
        {/* <Button color="green" onClick={addSport}>+ Add Sport</Button> */}
        <Button onClick={() => setPage('ContactPage')} className={styles.nextButton} color='#058A4A'>
          Jump to Contact inf.
        </Button>
        <Button onClick={() => setPage('TournamentPage')} className={styles.nextButton} color='#058A4A'>
          Jump to Tournament
        </Button>
      </Group>
    </Container>
  );
}

export default PspSportsInformation;
