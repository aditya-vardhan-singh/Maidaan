import React from 'react';
import { Container, Input, Button, Group } from '@mantine/core';
// import { IconSearch } from 'iconsax-react';
import classes from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  return (
    <Container size="xs" className={classes.container}>
      <Input
        // icon={<IconSearch />}
        placeholder="Search for tournaments, events, or academies..."
        className={classes.input}
      />
      <Button className={classes.button}>Your Games</Button>
    </Container>
  );
};

export default SearchBar;
