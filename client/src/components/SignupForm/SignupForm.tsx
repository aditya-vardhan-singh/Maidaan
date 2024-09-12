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
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import google from "@/assets/google.svg";
import classes from "./SignupForm.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getInitialValue } from "@testing-library/user-event/dist/types/document/UI";
import { baseURL } from "@/Utility";
import { Toaster, toast } from "sonner";

export interface SignupFormProps {
  setpage: (page: "Signup" | "Login") => void;
}

interface RegistrationForm {
  email: string;
  password: string;
}

export function SignupForm({ setpage }: SignupFormProps) {
  const [isLoading, setIsLoading] = useState(true);
  const handleRegister = async (values: typeof form.values) => {
    const toastId = toast.loading("Loading...", );
    try {
      const response = await axios.post(`${baseURL}/auth/register`, values);
      if (!response?.data?.message) {
        toast.success("User registered successfully");
      } else {
      }
    } catch (err) {
      toast.error(
        axios.isAxiosError(err) && err.response?.data?.message
          ? err.response.data.message
          : "Failed to register user"
      );
    }
    finally{
      setIsLoading(false);
      toast.dismiss(toastId)
    }
  };

  const handleGoogleLogin = async () => {
    axios.get(`${baseURL}/auth/google`);
  };

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

  // const handleSubmit = async () => {};

  return (
    <>
      <Toaster richColors />
      <Box className={classes.navbar}>
        {" "}
        {/* Header */}
        <a href="/" style={{ textDecoration: "none" }}>
          {" "}
          <Text className={classes.logo}>Maidaan</Text>
        </a>
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
          <form onSubmit={form.onSubmit(handleRegister)}>
            <TextInput
              type="email"
              label="email"
              autoComplete="email"
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
            <Button
              variant="default"
              color="gray"
              fullWidth
              onClick={() => handleGoogleLogin()}
            >
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
