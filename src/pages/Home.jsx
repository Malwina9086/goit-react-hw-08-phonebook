import { NavLink } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box position="relative">
      <Box>
        <Box color="brand.dark" mt="200">
          <Heading fontSize="60" fontWeight="500" lineHeight="80%" mb="10">
            PHONEBOOK - <br></br> YOUR NEW WAY TO MANAGE CONTACTS
          </Heading>
          <Text
            color="#2D3748"
            fontSize="20"
            fontWeight="300"
            maxW="3xl"
            mb="8"
          >
            Forget about problems with organizing contacts!<br></br> Phonebook
            is an innovative application that facilitates managing <br></br> and
            finding information about your friends, family, and colleagues.
          </Text>
          <NavLink to="/register">
            <Button fontSize="xl" px="20" py="30">
              Let's start!
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
