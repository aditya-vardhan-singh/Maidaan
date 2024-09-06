import {
  Box,
  Text,
  Group,
  Container,
  TextInput,
  PasswordInput,
  Divider,
  Button,
} from "@mantine/core";
import classes from "./LoginPage.module.css";
import google from "@/assets/google.svg";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "@/Utility";

interface OrganizerLoginProps {
  setpage: (page: "Signup" | "Login") => void;
}

export function OrganizerLogin({ setpage }: OrganizerLoginProps) {
  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        email: user.email,
        password: user.password,
      });
      // Handle the response (e.g., store user info, navigate)
    } catch (error) {
      console.error("Login failed", error);
      // Handle error (e.g., show error message)
    }
  };
  return (
    <Container className={classes.formContainer}>
      <Box className={classes.infoBox}>
        <Text className={classes.welcomeText}>Welcome Organizer</Text>
        <Text className={classes.descriptionText}>
          Manage your tournaments, engage with players, and create unforgettable
          experiences.{" "}
        </Text>
      </Box>

      <Box className={classes.loginBox}>
        <TextInput
          label="Email / Username"
          placeholder="Enter your email address"
          className={classes.input}
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <PasswordInput
          label="Password"
          placeholder="Your Password"
          required
          className={classes.input}
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button className={classes.loginButton} onClick={handleLogin}>
          Log in
        </Button>

        <Divider my="sm" label="or" labelPosition="center" />

        <Group grow mb="md" mt="md">
          <Button variant="default" color="gray" fullWidth>
            <img
              src={google}
              alt="Google Icon"
              style={{ height: "25px", width: "25px" }}
              className={classes.googleicon}
            />
            <Group p="center" m="xs">
              <span>Log in with Google</span>
            </Group>
          </Button>
        </Group>

        <Group>
          <Text size="sm" color="dimmed">
            Don’t have an account
          </Text>
          <Text
            size="sm"
            color="blue"
            className={classes.signUp}
            onClick={() => setpage("Signup")}
          >
            Sign Up
          </Text>
        </Group>
      </Box>
    </Container>
  );
}
