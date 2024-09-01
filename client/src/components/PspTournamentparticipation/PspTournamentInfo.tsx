import React, { useState } from 'react';
import { TextInput, Container, Grid, Button, Group, Select } from '@mantine/core';
import styles from './PspTournamentInfo.module.css';

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function PspTournamentInfo({ page, setPage }: NavProps) {
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

  const removeSport = (index: number) => {
    const updatedSportsData = sportsData.filter((_, i) => i !== index);
    setSportsData(updatedSportsData);
  };

  return (
    <>
      <Container className={styles.formContainer}>
        <Grid>
          {sportsData.map((sportEntry, index) => (
            <Grid.Col key={index} span={6}>
              <Grid>
                <Grid.Col span={12}>
                  <TextInput
                    label="Tournament Name"
                    placeholder="Name"
                    value={sportEntry.team}
                    onChange={(event) => handleInputChange(index, 'team', event.currentTarget.value)}
                   
                  />
                </Grid.Col>
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
                    
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Select
                    label="Date"
                    placeholder="Select Date"
                    data={['2024-01-01', '2024-02-01', '2024-03-01']} // Example dates
                    value={sportEntry.role}
                    onChange={(value) => handleInputChange(index, 'role', value!)}
                    
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Select
                    label="Role"
                    placeholder="Select Role"
                    data={['Player', 'Coach', 'Referee']}
                    value={sportEntry.role}
                    onChange={(value) => handleInputChange(index, 'role', value!)}
                    
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Select
                    label="Experience"
                    placeholder="Select Experience"
                    data={['Beginner', 'Intermediate', 'Advanced']}
                    value={sportEntry.experience}
                    onChange={(value) => handleInputChange(index, 'experience', value!)}
                    
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Button color="red" onClick={() => removeSport(index)}>Remove Tournament</Button>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          ))}
        </Grid>
        <Group mt="md">
          <Button color="green" onClick={addSport}>+ Add Tournament</Button>
        </Group>
        <Group mt="md">
          <Button onClick={() => setPage('ContactPage')} className={styles.nextButton} color='#058A4A'>
            Jump to Sports info.
          </Button>
          <Button onClick={() => setPage('TournamentPage')} className={styles.nextButton} color='#058A4A'>
            Jump to Document
          </Button>
        </Group>
      </Container>
    </>
  );
}

export default PspTournamentInfo;
