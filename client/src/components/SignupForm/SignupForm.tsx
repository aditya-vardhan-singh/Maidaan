import React from 'react';
import {TextInput,PasswordInput,Paper,Title,Text,Container,Button,Divider,Group,} from '@mantine/core';
import { useForm } from '@mantine/form';
import { GoogleIcon } from './GoogleIcon';
import classes from './SignupForm.module.css'
export interface SignupFormProps {
  setpage: (page: 'Signup' | 'Login' ) => void;
}
export function SignupForm({setpage}:SignupFormProps) {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length >= 6 ? null : 'Password must be at least 6 characters long',
      confirmPassword: (value, values) =>
        value === values.password ? null : 'Passwords do not match',
    },
  });

  return (
    <Container size={420} my={40} className={classes.container}>
      <Title
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Welcome to Maidaan!
      </Title>
      <Text  size="m" ta="center" mt={5}>
        Join our community to compete, organize, and experience the thrill of sports.
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" className={classes.Paper}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput 
            label="Email"
            placeholder="Enter your email address"
            {...form.getInputProps('email')}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps('password')}
            required
          />

          <PasswordInput 
            label="Confirm Password"
            placeholder="Confirm your password"
            mt="md"
            {...form.getInputProps('confirmPassword') }
            required
          />

          <Button fullWidth mt="xl" type="submit" style={{backgroundColor:'#F1A02F'}}>
            Sign up
          </Button>
        </form>

        <Divider label="OR" labelPosition="center" my="lg" />

        <Group grow mb="md" mt="md">
          <Button variant="default" color="gray" fullWidth>
            <Group p="center" m="xs">
              <GoogleIcon />
              <span>Sign up with Google</span>
            </Group>
          </Button>
        </Group>

        <Text ta="center" mt="md" className={classes.HaveanAccount}>
          Already have an Account? <a href="#" style={{textDecoration:'none', color:'black'}} onClick={() => setpage('Login')}>Log in</a>
        </Text>
      </Paper>
    </Container>
  );
};
