import { Container, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';

export default function Register() {
  return (
    <Container maxW="2xl" centerContent>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Box padding="6" mt="10">
        <Heading size="xl">CREATE A NEW ACCOUNT</Heading>
        <RegistrationForm />
        ALREADY HAVE AN ACCOUNT?{' '}
        <Link to="/login" style={{ textDecoration: 'underline' }}>
          Log in here.
        </Link>
      </Box>
    </Container>
  );
}
