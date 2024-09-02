import {
  Box,
  Text,
  Group,
  Container,
  TextInput,
  PasswordInput,
  Divider,
  Button,
} from '@mantine/core';
import classes from './LoginPage.module.css';
import google from '@/assets/google.svg'
interface UserLoginProps {
  setpage: (page: 'Signup' | 'Login') => void;
}

export function UserLogin({ setpage }: UserLoginProps) {
  return (
    <Container className={`${classes.formContainerReverse} `}>
      <Box className={classes.loginBox}>
        <TextInput
          label="Email /Username"
          placeholder="Enter your email address"
          className={classes.input}
        />
        <PasswordInput
          label="Password"
          placeholder="Your Password"
          required
          className={classes.input}
        />
        <Button className={classes.loginButton}>Log in</Button>

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
          <Text size="sm" color="blue" className={classes.signUp} onClick={() => setpage('Signup')}>
            Sign Up
          </Text>
        </Group>
      </Box>

      <Box className={classes.infoBox}>
        <Text className={classes.welcomeText}>Welcome Champion</Text>
        <Text className={classes.descriptionText}>
          Enter the arena and continue your journey towards greatness.{' '}
        </Text>
      </Box>
    </Container>
  );
}
