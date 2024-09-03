import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Divider,
  Group,
  Box
} from "@mantine/core";
import { useForm } from "@mantine/form";
import google from "@/assets/google.svg";
import classes from "./SignupForm.module.css";
export interface SignupFormProps {
  setpage: (page: "Signup" | "Login") => void;
}
export function SignupForm({ setpage }: SignupFormProps) {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6
          ? null
          : "Password must be at least 6 characters long",
      confirmPassword: (value, values) =>
        value === values.password ? null : "Passwords do not match",
    },
  });

  return (
    <>
    <Box className={classes.navbar}> {/* Header */}
    <a href="/" style={{textDecoration:'none'}}> <Text className={classes.logo}>Maidaan</Text></a>
   </Box>
    <Container size={420} my={40} className={classes.container}>
       
      <Title
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Welcome to Maidaan!
      </Title>
      <Text size="m" ta="center" mt={5}>
        Join our community to compete, organize, and experience the thrill of
        sports.
      </Text>

      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        className={classes.Paper}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
          type="email"
            label="Email"
            placeholder="Enter your email address"
            {...form.getInputProps("email")}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps("password")}
            required
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            mt="md"
            {...form.getInputProps("confirmPassword")}
            required
          />

          <Button
            fullWidth
            mt="xl"
            type="submit"
            style={{ backgroundColor: "#F1A02F" }}
          >
            Sign up
          </Button>
        </form>

        <Divider label="OR" labelPosition="center" my="lg" />

        <Group grow mb="md" mt="md">
          <Button variant="default" color="gray" fullWidth>
            <img
              src={google}
              alt="Google Icon"
              style={{ height: "25px", width: "25px" }}
              className={classes.googleicon}
            />
            <Group p="center" m="xs">
              <span>Sign up with Google</span>
            </Group>
          </Button>
        </Group>

        <Text ta="center" mt="md" className={classes.HaveanAccount}>
          Already have an Account?{" "}
          <a
            href="#"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setpage("Login")}
          >
            Log in
          </a>
        </Text>
      </Paper>
    </Container>
    </>
  );
}
