import React, { useState } from 'react';
import { TextInput, Container, Grid, Button, Group } from '@mantine/core';
import styles from './PspDocumentInfo.module.css';



function PspDocumentInfo() {
  const [AadharData, setAadharData] = useState([{ Aadhar: '' }]);

  const handleInputChange = (index: number, value: string) => {
    const updatedAadharData = [...AadharData];
    updatedAadharData[index].Aadhar = value;
    setAadharData(updatedAadharData);
  };

  const addAadhar = () => {
    setAadharData([...AadharData, { Aadhar: '' }]);
  };

  return (
    <>
      <Container className={styles.formContainer}>
        <Grid>
          {AadharData.map((AadharEntry, index) => (
            <Grid.Col key={index} span={12}>
              <TextInput
                label="Aadhar Card No"
                placeholder="0000 0000 0000"
                type="number"
                value={AadharEntry.Aadhar}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  // Allow only numbers and limit the length to 12 digits
                  if (/^\d{0,12}$/.test(value)) {
                    handleInputChange(index, value);
                  }
                }} required
              />
            </Grid.Col>
          ))}
        </Grid>
        <Group mt="md">
        <Button
            // onClick={() => setPage('DocumentPage')}
            className={styles.nextButton}
            color="green"
          >
            Jump to Document
          </Button>
          <Button
            // onClick={() => setPage('AadharInfo')}
            className={styles.nextButton}
            color="green"
          >
            Save All
          </Button>
 
        </Group>
        <br />
        <Button
          className={styles.nextButton}
          color="green"
        >
          View My Profile
        </Button>
      </Container>
    </>
  );
}

export default PspDocumentInfo;
