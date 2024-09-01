import { Accordion, Container, Title } from '@mantine/core';
import classes from './GpFaq.module.css';

export function GpFaq() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="scheme-info">
          <Accordion.Control>What are government fitness and sports schemes?</Accordion.Control>
          <Accordion.Panel>
            Government fitness and sports schemes are initiatives designed to promote physical
            activity, enhance public health, and support sports development through various programs
            and funding opportunities.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="find-schemes">
          <Accordion.Control>How can I find information about available schemes?</Accordion.Control>
          <Accordion.Panel>
            Visit the "Schemes" section on our website to explore detailed information about each
            program, including eligibility, benefits, and application procedures.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="eligibility">
          <Accordion.Control>Who is eligible to apply for these schemes?</Accordion.Control>
          <Accordion.Panel>
            Eligibility varies by scheme. Generally, schemes are open to individuals of all ages,
            from youth to adults, with specific criteria outlined for each program.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="apply">
          <Accordion.Control>How do I apply for a scheme?</Accordion.Control>
          <Accordion.Panel>
            Application procedures are detailed on each scheme's page on our website. Follow the
            instructions provided, which may include online forms or document submissions.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="updates">
          <Accordion.Control>How can I stay updated on new schemes or changes?</Accordion.Control>
          <Accordion.Panel>
            Subscribe to our newsletter or follow us on social media for the latest updates on new
            schemes, changes, and important announcements.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
