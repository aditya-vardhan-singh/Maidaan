import { useState } from "react";
import { Button, Container, Select, Text, Group } from "@mantine/core";
import classes from "./HpDetailsPage.module.css";

interface NavProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  registrationStatus: string;
  setRegistrationStatus: React.Dispatch<React.SetStateAction<string>>;
  handleFormSubmit: Function;
}

export function HpDetailsubmit({
  page,
  setPage,
  registrationStatus,
  setRegistrationStatus,
  handleFormSubmit,
}: NavProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleStatusChange = (e: string | null) => {
    
  };

  const handleSubmit = () => {
    setSubmitted(true);
    handleFormSubmit();
  };

  return (
    <div className={classes.box}>
    <Container className={classes.formContainer}>
      <div className={classes.registrationStatusContainer}>
        <Select
          label="Registration Status"
          placeholder="Select status"
          required
          data={["ONGOING", "UPCOMING", "FINISHED"]}
          value={registrationStatus}
          onChange={(value) => setRegistrationStatus(value || "")}
          className={classes.statusSelect}
          styles={(theme) => ({
            item: {
              "&[data-selected]": {
                backgroundColor: "#058A4A",
                color: "white",
              },
              "&[data-hovered]": {
                backgroundColor: "#046C3A",
                color: "white",
              },
            },
            dropdown: {
              backgroundColor: "white",
            },
            input: {
              backgroundColor: "#058A4A",
              color: "white",
            },
            label: {
              fontWeight: "bold",
              color: "#333",
            },
          })}
        />

        <Button
          fullWidth
          mt="md"
          className={classes.submitButton}
          color="green"
          radius="md"
          size="md"
          styles={(theme) => ({
            root: {
              backgroundColor: "#058A4A",
              "&:hover": {
                backgroundColor: "#046C3A",
              },
            },
          })}
          onClick={handleSubmit}
        >
          Submit
        </Button>

        {submitted && (
          <Text size="sm" mt="xs" className={classes.submittedText}>
            Submitted
          </Text>
        )}
      </div>

      <Group mt={50}>
        <Button
          onClick={() => setPage("SchedulePage")}
          styles={(theme) => ({
            root: {
              backgroundColor: "#058A4A",
              "&:hover": {
                backgroundColor: "#046C3A",
              },
            },
          })}
        >
          Prev
        </Button>
        <Button color="#058A4A">
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#058A4A",
            }}
          >
            Back to Home
          </a>
        </Button>
        <Button color="#058A4A">Your Profile</Button>
      </Group>
    </Container>
    </div>
  );
}
